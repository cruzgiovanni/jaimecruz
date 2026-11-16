import Link from "next/link";
import {
  type Article,
  formatArticleDate,
  getReadingMinutes,
} from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  headingLevel?: "h2" | "h3";
  compact?: boolean;
}

export function ArticleCard({
  article,
  headingLevel = "h2",
  compact = false,
}: ArticleCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/artigos/${article.slug}`}
      className={`a-card${compact ? " a-card--compact" : ""}`}
    >
      <span className="a-card-meta">
        <span className="a-card-category">{article.category}</span>
        <span className="a-dot" aria-hidden="true" />
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
        {compact ? null : (
          <>
            <span className="a-dot" aria-hidden="true" />
            <span>{getReadingMinutes(article)} min de leitura</span>
          </>
        )}
      </span>

      <Heading className="a-card-title">{article.title}</Heading>

      {article.subtitle && !compact ? (
        <p className="a-card-subtitle">{article.subtitle}</p>
      ) : null}

      {compact ? null : (
        <p className="a-card-description">{article.description}</p>
      )}

      <span className="a-card-cta">
        Ler artigo <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
