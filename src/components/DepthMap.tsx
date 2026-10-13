export function FishingScene() {
  return (
    <div className="fishing-scene">
      <svg viewBox="0 0 640 560" role="img" aria-labelledby="fishing-scene-title fishing-scene-description">
        <title id="fishing-scene-title">Удочка на берегу озера</title>
        <desc id="fishing-scene-description">Удочка стоит на подставке, леска уходит в озеро, а поплавок покачивается и ныряет при поклёвке.</desc>
        <defs>
          <linearGradient id="scene-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#173e35" />
            <stop offset="1" stopColor="#245747" />
          </linearGradient>
          <linearGradient id="scene-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#17493f" />
            <stop offset="1" stopColor="#081d19" />
          </linearGradient>
          <linearGradient id="scene-shore" x1="0" y1="0" x2="1" y2=".4">
            <stop offset="0" stopColor="#8d8665" />
            <stop offset="1" stopColor="#353d2d" />
          </linearGradient>
          <linearGradient id="float-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f1efe3" />
            <stop offset=".48" stopColor="#f1efe3" />
            <stop offset=".5" stopColor="#b5d46a" />
            <stop offset="1" stopColor="#83a64e" />
          </linearGradient>
          <radialGradient id="scene-light" cx="55%" cy="30%" r="70%">
            <stop offset="0" stopColor="#7db29a" stopOpacity=".32" />
            <stop offset="1" stopColor="#071a16" stopOpacity="0" />
          </radialGradient>
          <filter id="scene-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity=".35" />
          </filter>
          <filter id="float-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <clipPath id="scene-clip"><rect width="640" height="560" rx="36" /></clipPath>
        </defs>
        <g clipPath="url(#scene-clip)" filter="url(#scene-shadow)">
          <rect width="640" height="560" fill="url(#scene-sky)" />
          <circle cx="410" cy="135" r="260" fill="url(#scene-light)" />

          <path d="M0 200 C78 175 136 189 205 163 C288 132 342 173 414 148 C485 122 548 136 640 107 L640 245 L0 245 Z" fill="#102a23" opacity=".84" />
          <path d="M0 219 C86 197 157 210 226 184 C294 159 376 191 444 167 C512 143 566 154 640 130" fill="none" stroke="#6d8b70" strokeOpacity=".25" />
          <rect y="216" width="640" height="344" fill="url(#scene-water)" />

          <g className="water-lines" fill="none" stroke="#8ec4ad" strokeOpacity=".2" strokeWidth="1">
            <path d="M24 260 C128 248 217 274 326 257 C428 241 523 267 615 250" />
            <path d="M-15 306 C104 292 197 321 313 302 C429 283 530 314 662 291" />
            <path d="M18 354 C123 339 208 369 316 349 C433 328 520 365 629 342" />
            <path d="M-24 407 C93 393 189 421 294 405 C405 387 525 416 665 394" />
          </g>

          <path d="M0 395 C81 371 145 382 214 410 C286 439 343 465 434 468 C517 471 579 447 640 416 L640 560 L0 560 Z" fill="url(#scene-shore)" />
          <path d="M0 424 C82 394 154 410 222 438 C312 474 417 495 517 469 C565 457 604 439 640 421" fill="none" stroke="#c5bc91" strokeOpacity=".28" strokeWidth="2" />
          <g fill="#b8b08a" opacity=".5">
            <circle cx="65" cy="462" r="5" /><circle cx="104" cy="438" r="3" /><circle cx="145" cy="493" r="7" />
            <circle cx="198" cy="463" r="4" /><circle cx="291" cy="504" r="6" /><circle cx="351" cy="486" r="3" />
          </g>

          <g className="rod-stand" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M210 420 L174 520 M210 420 L246 520 M210 420 L205 516" stroke="#b5d46a" strokeWidth="7" />
            <path d="M190 424 L232 424" stroke="#dbe5cf" strokeWidth="9" />
            <path d="M202 411 Q210 425 218 411" stroke="#dbe5cf" strokeWidth="5" />
          </g>

          <g className="fishing-rod" fill="none" strokeLinecap="round">
            <path d="M198 407 C270 345 361 258 502 151" stroke="#071511" strokeWidth="10" />
            <path d="M199 403 C272 340 365 253 503 150" stroke="#d7dfcf" strokeWidth="3" />
            <path d="M211 392 C268 344 350 269 428 207" stroke="#b5d46a" strokeWidth="2" strokeOpacity=".7" />
            <path d="M173 428 L226 384" stroke="#b78a54" strokeWidth="13" />
            <path d="M173 428 L226 384" stroke="#d5b47b" strokeWidth="3" strokeDasharray="3 7" />
            <circle cx="229" cy="381" r="14" stroke="#0a1713" strokeWidth="7" />
            <circle cx="229" cy="381" r="8" stroke="#9eafa2" strokeWidth="3" />
            <path d="M235 391 l17 16" stroke="#9eafa2" strokeWidth="4" />
          </g>

          <path className="fishing-line" d="M503 150 C548 196 545 247 507 308" fill="none" stroke="#cde2d6" strokeOpacity=".7" strokeWidth="1.4" />
          <path d="M507 308 C505 323 505 337 506 352" fill="none" stroke="#cde2d6" strokeOpacity=".35" strokeWidth="1" />

          <g className="bite-ripples" fill="none" stroke="#70d5bc">
            <ellipse className="bite-ripple bite-ripple-one" cx="506" cy="329" rx="17" ry="5" />
            <ellipse className="bite-ripple bite-ripple-two" cx="506" cy="329" rx="17" ry="5" />
          </g>
          <g className="fishing-float">
            <circle cx="506" cy="314" r="18" fill="#b5d46a" opacity=".13" filter="url(#float-glow)" />
            <path d="M506 286 L506 302" stroke="#ff765e" strokeWidth="3" strokeLinecap="round" />
            <path d="M500 302 Q506 296 512 302 L510 327 Q506 334 502 327 Z" fill="url(#float-body)" stroke="#10231d" strokeWidth="2" />
            <path d="M502 313 L510 313" stroke="#ff765e" strokeWidth="4" />
          </g>

          <g className="scene-reeds" fill="none" stroke="#a9b579" strokeLinecap="round">
            <path d="M548 454 Q556 385 548 319 M563 457 Q578 392 579 342 M584 452 Q595 401 610 372" />
            <path d="M551 367 q18 -15 29 -4 M574 398 q-19 -14 -28 -3 M594 417 q19 -12 28 -1" />
          </g>
        </g>
      </svg>
      <div className="fishing-scene-label">
        <span>ТИХАЯ ВОДА</span>
        <strong>Поклёвка</strong>
        <small>идея становится живым продуктом</small>
      </div>
    </div>
  );
}
