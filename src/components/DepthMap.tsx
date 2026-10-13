export function DepthMap() {
  return (
    <div className="depth-map" aria-label="Абстрактная карта глубин">
      <svg viewBox="0 0 640 560" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#173f36" />
            <stop offset="1" stopColor="#0a201b" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="6" result="blur" /></filter>
        </defs>
        <rect width="640" height="560" rx="36" fill="url(#water)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            className={`contour contour-${i}`}
            d={`M ${76 - i * 10} ${285 + i * 2} C ${130 - i * 4} ${90 + i * 18}, ${475 + i * 15} ${80 + i * 4}, ${562 + i * 6} ${248 + i * 7} C ${620 - i * 2} ${365 + i * 9}, ${445 + i * 20} ${505 - i * 10}, ${257 - i * 12} ${477 + i * 5} C ${83 - i * 2} ${450 - i * 5}, ${42 + i * 9} ${350 - i * 4}, ${76 - i * 10} ${285 + i * 2} Z`}
          />
        ))}
        <circle cx="360" cy="278" r="8" fill="#b5d46a" />
        <circle cx="360" cy="278" r="22" fill="#b5d46a" opacity=".16" filter="url(#glow)" />
      </svg>
      <div className="sonar-card">
        <span>ГЛУБИНА</span>
        <strong>6.4 м</strong>
        <small>перспективная точка</small>
      </div>
      <div className="map-coordinate">53°54′N · 27°34′E</div>
    </div>
  );
}
