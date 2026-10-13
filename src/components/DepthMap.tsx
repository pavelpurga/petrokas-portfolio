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
          <linearGradient id="float-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff836d" />
            <stop offset=".46" stopColor="#f05a48" />
            <stop offset=".49" stopColor="#f3eee2" />
            <stop offset="1" stopColor="#d7dfd6" />
          </linearGradient>
          <clipPath id="above-water"><rect x="546" y="290" width="52" height="53" /></clipPath>
        </defs>

        <path
          className="fishing-line-shadow"
          d="M594 86 C597 148 595 210 585 266 C580 296 576 321 572 340"
          fill="none"
          stroke="#06120f"
          strokeOpacity=".42"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="fishing-line-glint"
          d="M594 86 C597 148 595 210 585 266 C580 296 576 321 572 340"
          fill="none"
          stroke="#edf4ef"
          strokeOpacity=".54"
          strokeWidth=".55"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        <ellipse className="float-water-dimple" cx="572" cy="343" rx="8" ry="2.2" fill="#071b17" fillOpacity=".3" />
        <g className="float-vibration" fill="none" stroke="#d9eee6" strokeWidth=".7">
          <ellipse cx="572" cy="343" rx="10" ry="2.6" />
          <ellipse cx="572" cy="343" rx="18" ry="4.5" />
        </g>

        <g className="bite-ripples" fill="none" stroke="#c5f3e4">
          <ellipse className="bite-ripple bite-ripple-one" cx="572" cy="343" rx="13" ry="3.4" />
          <ellipse className="bite-ripple bite-ripple-two" cx="572" cy="343" rx="13" ry="3.4" />
          <ellipse className="bite-ripple bite-ripple-three" cx="572" cy="343" rx="13" ry="3.4" />
        </g>

        <g clipPath="url(#above-water)">
          <g className="fishing-float">
            <path d="M572 315 L572 329" stroke="#ec5546" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M569 330 Q572 327 575 330 L574 344 Q572 347 570 344 Z" fill="url(#float-top)" stroke="#13251f" strokeWidth="1.4" />
            <path d="M570 336 L574 336" stroke="#13251f" strokeOpacity=".55" strokeWidth=".8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
