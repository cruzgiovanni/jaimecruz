import Image from "next/image";
import Link from "next/link";
import type { ArticleBlock, InlineNode } from "@/data/articles";

const COLUMN_LIST_MIN_ITEMS = 10;

function Inline({ content }: { content: string | InlineNode[] }) {
  if (typeof content === "string") return <>{content}</>;

  return (
    <>
      {content.map((node, index) => {
        if (typeof node === "string") return node;

        let element: React.ReactNode = node.text;

        if (node.italic) element = <em>{element}</em>;
        if (node.bold) element = <strong>{element}</strong>;

        if (node.href) {
          const isInternal = node.href.startsWith("/");
          element = isInternal ? (
            <Link href={node.href}>{element}</Link>
          ) : (
            <a href={node.href} target="_blank" rel="noopener noreferrer">
              {element}
            </a>
          );
        }

        return <span key={index}>{element}</span>;
      })}
    </>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <Inline content={block.content} />
        </p>
      );

    case "list":
      return (
        <ul
          className={`a-list${
            block.items.length >= COLUMN_LIST_MIN_ITEMS ? " a-list--columns" : ""
          }`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "highlight":
      return <p className="a-highlight">{block.content}</p>;

    case "figure":
      return (
        <figure className="a-figure">
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.height}
            className="a-figure-image"
            sizes="(min-width: 768px) 680px, 100vw"
          />

          {block.legend?.length ? (
            <ul className="a-legend" aria-label="Legenda do mapa">
              {block.legend.map((item) => (
                <li key={item.label}>
                  <span
                    className="a-swatch"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <span>
                    {item.label}
                    {item.detail ? (
                      <span className="a-legend-detail">{item.detail}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          <figcaption className="a-figcaption">{block.caption}</figcaption>
        </figure>
      );
  }
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="a-body">
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}
