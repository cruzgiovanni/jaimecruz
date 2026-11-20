/**
 * O bairro da capa, redesenhado com as cores do site: escola, posto de saúde,
 * a casa com a janela acesa, conselho tutelar e fórum, ligados por um caminho
 * que se interrompe diante da casa.
 */
export function NeighborhoodScene() {
  return (
    <svg
      className="ne-scene"
      viewBox="0 0 1240 230"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Ilustração de um bairro à noite: escola, posto de saúde, uma casa com a janela acesa, conselho tutelar e fórum, ligados por um caminho que se interrompe diante da casa."
    >
      <g className="back">
        <rect x="40" y="58" width="80" height="66" />
        <path d="M 30 58 L 80 28 L 130 58 Z" />
        <rect x="300" y="54" width="86" height="70" />
        <path d="M 290 54 L 343 22 L 396 54 Z" />
        <rect x="560" y="60" width="78" height="64" />
        <path d="M 550 60 L 599 30 L 648 60 Z" />
        <rect x="820" y="54" width="86" height="70" />
        <path d="M 810 54 L 863 22 L 916 54 Z" />
        <rect x="1080" y="58" width="80" height="66" />
        <path d="M 1070 58 L 1120 28 L 1170 58 Z" />
      </g>

      <g className="front">
        <rect x="78" y="96" width="120" height="68" />
        <path d="M 68 96 L 138 60 L 208 96 Z" />
        <rect x="330" y="86" width="126" height="78" />
        <path d="M 580 104 L 637 72 L 694 104 Z" />
        <rect x="840" y="94" width="124" height="70" />
        <path d="M 830 94 L 902 58 L 974 94 Z" />
        <rect x="1090" y="100" width="110" height="64" />
        <path d="M 1080 100 L 1145 66 L 1210 100 Z" />
      </g>
      <rect className="trim" x="330" y="86" width="126" height="14" />
      <rect className="dim" x="590" y="104" width="94" height="60" />

      <g className="icon">
        <rect x="378" y="110" width="20" height="46" rx="2" />
        <rect x="365" y="123" width="46" height="20" rx="2" />
        <path d="M 902 108 L 924 116 L 924 138 C 924 149 913 157 902 161 C 891 157 880 149 880 138 L 880 116 Z" />
      </g>

      <rect className="light" x="610" y="120" width="30" height="30" />
      <g className="mullion" strokeWidth="2">
        <line x1="625" y1="120" x2="625" y2="150" />
        <line x1="610" y1="135" x2="640" y2="135" />
      </g>

      <line className="ground" x1="0" y1="164" x2="1240" y2="164" strokeWidth="3" />
      <path className="path" d="M 138 200 L 1145 200" strokeWidth="3" fill="none" />
      <g className="stop">
        <circle cx="138" cy="200" r="7" />
        <circle cx="393" cy="200" r="7" />
        <circle cx="902" cy="200" r="7" />
        <circle cx="1145" cy="200" r="7" />
      </g>
      <path
        className="gap"
        d="M 637 200 L 637 172"
        strokeWidth="3"
        strokeDasharray="6 8"
        fill="none"
      />
      <circle className="gap" cx="637" cy="200" r="6" fill="none" strokeWidth="3" />
    </svg>
  );
}
