import Image from "next/image";

export function FishingScene() {
  return (
    <div className="fishing-scene">
      <Image
        className="fishing-scene-image"
        src="/images/hero-fishing-scene.webp"
        alt="Реалистичная удочка с катушкой на подставке у берега лесного озера"
        fill
        sizes="(max-width: 720px) 104vw, (max-width: 1000px) 540px, 610px"
        priority
      />
      <div className="fishing-scene-shade" aria-hidden="true" />
      <svg className="fishing-scene-overlay" viewBox="0 0 640 560" aria-hidden="true">
        <defs>
          <linearGradient id="float-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff745f" />
            <stop offset=".36" stopColor="#ff745f" />
            <stop offset=".38" stopColor="#f4f1e8" />
            <stop offset=".72" stopColor="#f4f1e8" />
            <stop offset=".74" stopColor="#b5d46a" />
            <stop offset="1" stopColor="#739445" />
          </linearGradient>
          <filter id="float-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path
          className="fishing-line"
          d="M594 86 C607 151 606 227 572 318"
          fill="none"
          stroke="#e7eee9"
          strokeOpacity=".72"
          strokeWidth="1.2"
        />

        <g className="bite-ripples" fill="none" stroke="#c5f3e4">
          <ellipse className="bite-ripple bite-ripple-one" cx="572" cy="342" rx="15" ry="4" />
          <ellipse className="bite-ripple bite-ripple-two" cx="572" cy="342" rx="15" ry="4" />
        </g>

        <g className="fishing-float">
          <circle cx="572" cy="326" r="18" fill="#b5d46a" opacity=".15" filter="url(#float-glow)" />
          <path d="M572 298 L572 309" stroke="#ff745f" strokeWidth="3" strokeLinecap="round" />
          <path d="M566 309 Q572 303 578 309 L576 338 Q572 345 568 338 Z" fill="url(#float-body)" stroke="#10231d" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
