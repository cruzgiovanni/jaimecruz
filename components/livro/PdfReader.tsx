"use client";

import {
  type MouseEvent as ReactMouseEvent,
  type TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "next-themes";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Sun,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { SITE } from "@/lib/site";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_URL = SITE.book.pdfUrl;

const documentOptions = {
  cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
};

const STORAGE_KEY = "entre-frestas-reader-page";
const IDLE_MS = 2600;

export default function PdfReader() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [chromeVisible, setChromeVisible] = useState(true);
  const [pixelRatio, setPixelRatio] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number; t: number } | null>(
    null
  );
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setPixelRatio(Math.min(2.5, window.devicePixelRatio || 1));
  }, []);

  const pageWidth = useMemo(() => {
    if (!containerWidth) return undefined;
    return Math.max(280, Math.min(containerWidth - 16, 980)) * scale;
  }, [containerWidth, scale]);

  const goToPage = useCallback(
    (page: number, total = numPages) => {
      const max = total || 1;
      setPageNumber(Math.min(Math.max(1, page), max));
    },
    [numPages]
  );

  const onLoadSuccess = useCallback(
    ({ numPages: n }: { numPages: number }) => {
      setNumPages(n);

      // Hash takes priority (shareable links: /livro/ler#p=42)
      const hashMatch =
        typeof window !== "undefined" &&
        window.location.hash.match(/p=(\d+)/);
      if (hashMatch) {
        const fromHash = Number(hashMatch[1]);
        if (Number.isFinite(fromHash) && fromHash >= 1) {
          goToPage(fromHash, n);
          return;
        }
      }

      const saved = Number(window.localStorage.getItem(STORAGE_KEY));
      if (Number.isFinite(saved) && saved > 1) {
        goToPage(saved, n);
      }
    },
    [goToPage]
  );

  const goPrev = useCallback(() => {
    setPageNumber((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPageNumber((p) => Math.min(numPages || 1, p + 1));
  }, [numPages]);

  const zoomIn = () => setScale((s) => Math.min(2, +(s + 0.15).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(0.6, +(s - 0.15).toFixed(2)));
  const zoomReset = () => setScale(1);

  // Sync with localStorage + URL hash
  useEffect(() => {
    if (!numPages) return;
    window.localStorage.setItem(STORAGE_KEY, String(pageNumber));

    const newHash = `#p=${pageNumber}`;
    if (typeof window !== "undefined" && window.location.hash !== newHash) {
      // replaceState to avoid history pollution per page flip
      window.history.replaceState(null, "", newHash);
    }
  }, [numPages, pageNumber]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") {
        return;
      }

      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-hide chrome after idle
  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setChromeVisible(true);
    idleTimerRef.current = setTimeout(() => {
      setChromeVisible(false);
    }, IDLE_MS);
  }, []);

  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [resetIdleTimer]);

  // Reset idle timer on chrome interaction
  useEffect(() => {
    const handler = () => resetIdleTimer();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("mousemove", handler);
    };
  }, [resetIdleTimer]);

  const isDark = mounted && resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  function isViewportZoomed(): boolean {
    if (typeof window === "undefined") return false;
    const vv = window.visualViewport;
    return Boolean(vv && vv.scale > 1.02);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    if (e.touches.length > 1) {
      // pinch in progress — let browser handle it
      touchStartRef.current = null;
      return;
    }
    const touch = e.changedTouches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      t: Date.now(),
    };
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const start = touchStartRef.current;
    if (!start) return;

    // If the user zoomed in, the browser owns panning — don't hijack
    if (isViewportZoomed()) {
      touchStartRef.current = null;
      return;
    }

    const touch = e.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    const dt = Date.now() - start.t;

    touchStartRef.current = null;

    // Tap (short, small movement) → handled by handleStageTap via click
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12 && dt < 350) {
      return;
    }

    // Swipe horizontal → page flip
    if (Math.abs(dx) >= 56 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      resetIdleTimer();
      if (dx < 0) goNext();
      else goPrev();
    }
  }

  function handleStageTap(e: ReactMouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    // Ignore taps on interactive elements (links inside PDF, buttons)
    if (target.closest("a, button, input, [role='button']")) {
      return;
    }

    // While zoomed in, taps are likely panning intent — let the user explore freely
    if (isViewportZoomed()) {
      return;
    }

    // Don't hijack a real text selection
    const selection = typeof window !== "undefined" ? window.getSelection() : null;
    if (selection && selection.toString().length > 0) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;

    if (ratio < 0.32) {
      goPrev();
      resetIdleTimer();
    } else if (ratio > 0.68) {
      goNext();
      resetIdleTimer();
    } else {
      // center → toggle chrome
      setChromeVisible((v) => !v);
      if (!chromeVisible) resetIdleTimer();
    }
  }

  const progress = numPages ? (pageNumber / numPages) * 100 : 0;

  return (
    <div
      className={`reader-shell ${chromeVisible ? "chrome-visible" : "chrome-hidden"}`}
    >
      <header className="reader-toolbar">
        <a
          href="/livro"
          className="reader-back reader-control livro-sans"
          aria-label="Voltar para a página do livro"
        >
          <ArrowLeft aria-hidden size={17} />
          <span>Livro</span>
        </a>

        <div className="reader-position livro-sans" aria-live="polite">
          <span className="reader-title">Entre Frestas e Horizontes</span>
          <span className="reader-pagecount">
            Página {pageNumber} de {numPages || "..."}
          </span>
        </div>

        <div className="reader-desktop-controls">
          <div
            className="reader-pager livro-sans"
            aria-label="Navegação por páginas"
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={pageNumber <= 1}
              className="reader-iconbtn"
              aria-label="Página anterior"
            >
              <ChevronLeft aria-hidden size={18} />
            </button>
            <span className="reader-pagenum">
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={numPages || 1}
                value={pageNumber}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (Number.isFinite(v)) {
                    goToPage(v);
                  }
                }}
                aria-label="Número da página"
              />
              <span className="reader-of">/ {numPages || "..."}</span>
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={!numPages || pageNumber >= numPages}
              className="reader-iconbtn"
              aria-label="Próxima página"
            >
              <ChevronRight aria-hidden size={18} />
            </button>
          </div>

          <div className="reader-zoom livro-sans" aria-label="Controles de zoom">
            <button
              type="button"
              onClick={zoomOut}
              className="reader-iconbtn"
              aria-label="Diminuir zoom"
            >
              <Minus aria-hidden size={16} />
            </button>
            <button
              type="button"
              onClick={zoomReset}
              className="reader-zoomlabel"
              aria-label="Restaurar zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              onClick={zoomIn}
              className="reader-iconbtn"
              aria-label="Aumentar zoom"
            >
              <Plus aria-hidden size={16} />
            </button>
          </div>

          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="reader-control reader-themetoggle"
              aria-label={isDark ? "Modo claro" : "Modo escuro"}
            >
              {isDark ? <Sun aria-hidden size={16} /> : <Moon aria-hidden size={16} />}
            </button>
          )}
        </div>
      </header>

      <div className="reader-progress" aria-hidden>
        <span style={{ width: `${progress}%` }} />
      </div>

      <main
        className="reader-stage"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleStageTap}
      >
        <div className="reader-page-wrap">
          <Document
            file={PDF_URL}
            onLoadSuccess={onLoadSuccess}
            loading={
              <div className="reader-status">
                <span className="reader-status-title">Carregando livro</span>
                <span className="reader-status-text">
                  Preparando a leitura para este dispositivo.
                </span>
              </div>
            }
            error={
              <div className="reader-status">
                <span className="reader-status-title">
                  Não foi possível carregar o livro.
                </span>
                <a href={PDF_URL} download className="reader-status-action">
                  Baixar PDF
                </a>
              </div>
            }
            options={documentOptions}
          >
            {pageWidth ? (
              <Page
                key={pageNumber}
                pageNumber={pageNumber}
                width={pageWidth}
                devicePixelRatio={pixelRatio}
                renderAnnotationLayer
                renderTextLayer
                loading={
                  <div className="reader-status reader-status-page">
                    Carregando página...
                  </div>
                }
              />
            ) : null}
          </Document>
        </div>

        {/* Tap hint, shown only first load on mobile */}
      </main>

      <nav className="reader-mobilenav livro-sans" aria-label="Navegação">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
            resetIdleTimer();
          }}
          disabled={pageNumber <= 1}
          className="reader-navbtn"
          aria-label="Página anterior"
        >
          <ChevronLeft aria-hidden size={20} />
          <span>Anterior</span>
        </button>

        <div className="reader-mobile-page" aria-hidden>
          <span>
            {pageNumber}/{numPages || "..."}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
            resetIdleTimer();
          }}
          disabled={!numPages || pageNumber >= numPages}
          className="reader-navbtn reader-navbtn-primary"
          aria-label="Próxima página"
        >
          <span>Próxima</span>
          <ChevronRight aria-hidden size={20} />
        </button>
      </nav>

      <div className="reader-mobile-zoom" aria-label="Zoom">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            zoomOut();
            resetIdleTimer();
          }}
          className="reader-iconbtn"
          aria-label="Diminuir zoom"
        >
          <Minus aria-hidden size={16} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            zoomReset();
            resetIdleTimer();
          }}
          className="reader-zoomlabel"
          aria-label="Restaurar zoom"
        >
          <RotateCcw aria-hidden size={15} />
          <span>{Math.round(scale * 100)}%</span>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            zoomIn();
            resetIdleTimer();
          }}
          className="reader-iconbtn"
          aria-label="Aumentar zoom"
        >
          <Plus aria-hidden size={16} />
        </button>

        {mounted && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
              resetIdleTimer();
            }}
            className="reader-iconbtn"
            aria-label={isDark ? "Modo claro" : "Modo escuro"}
          >
            {isDark ? <Sun aria-hidden size={16} /> : <Moon aria-hidden size={16} />}
          </button>
        )}
      </div>
    </div>
  );
}
