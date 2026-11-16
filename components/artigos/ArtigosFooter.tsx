export function ArtigosFooter() {
  return (
    <footer className="a-footer px-6 py-12 text-center">
      <p>© {new Date().getFullYear()} — Jaime Cesar da Cruz</p>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://giovannicruz.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          giovannicruz.dev
        </a>
      </p>
    </footer>
  );
}
