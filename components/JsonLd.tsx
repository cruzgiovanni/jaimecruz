type Schema = Record<string, unknown>;

interface JsonLdProps {
  data: Schema | Schema[];
}

function safe(payload: Schema): string {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safe(schema) }}
        />
      ))}
    </>
  );
}
