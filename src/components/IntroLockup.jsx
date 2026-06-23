// Lockup de marca para la intro usando los assets reales:
//  - /wordmark.png : "NE_ARQ" en blanco con un HUECO donde va la X + "360°".
//  - /arrow.png    : la flecha dorada del logo.
//
// La flecha se coloca DETRÁS del wordmark. Como el texto es PNG con fondo
// transparente, la flecha queda oculta tras las letras (entrelazado natural)
// y solo asoma por el hueco de la X, formándola en dorado — igual que el logo.
//
// Ajusta ARROW para alinear la flecha con el hueco de la X.
const ARROW = {
  height: '120%', // alto de la flecha respecto al wordmark
  left: '46%', // centro horizontal (sobre el hueco de la X)
  top: '46%', // centro vertical
  rotate: '16deg', // inclinación para que la elipse quede más vertical (como el logo)
}

export default function IntroLockup({ className = '' }) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Flecha dorada (capa DELANTERA: pasa por encima del texto) */}
      <div
        className="pointer-events-none absolute z-20"
        style={{
          left: ARROW.left,
          top: ARROW.top,
          height: ARROW.height,
          transform: `translate(-50%, -50%) rotate(${ARROW.rotate})`,
        }}
      >
        {/* La flecha se renderiza dentro de un SVG para poder dibujarla con
            una máscara que sigue su recorrido (trazado continuo cola→punta). */}
        <svg
          viewBox="0 0 1000 524"
          preserveAspectRatio="xMidYMid meet"
          className="block h-full w-auto max-w-none"
          aria-hidden="true"
        >
          <defs>
            <mask id="arrowDrawMask" maskUnits="userSpaceOnUse">
              {/* Línea central de la flecha (cola → punta). Trazo ancho para
                  cubrir toda la cinta dorada con margen (no se desborda porque
                  la imagen es transparente fuera de la flecha). */}
              <path
                d="M726 290 L722 298 L718 308 L725 323 L729 339 L733 357 L735 375 L736 394 L734 413 L729 431 L719 446 L704 457 L685 461 L663 460 L641 455 L620 446 L601 437 L584 426 L569 416 L556 406 L546 397 L536 389 L528 382 L521 375 L515 368 L510 363 L504 358 L500 352 L496 348 L492 343 L488 339 L484 335 L481 330 L478 327 L475 322 L472 318 L469 314 L466 310 L463 306 L460 302 L457 297 L454 293 L451 288 L448 283 L444 277 L440 271 L436 264 L432 257 L428 249 L423 240 L417 229 L411 217 L405 203 L399 187 L392 168 L387 147 L382 122 L381 98 L384 75 L392 55 L404 41 L421 33 L440 32 L460 35 L479 43 L498 59 L513 59 L528 71 L545 82"
                pathLength="1000"
                fill="none"
                stroke="#fff"
                strokeWidth="135"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-draw-path"
              />
            </mask>
          </defs>
          <image
            href="/arrow.png"
            x="0"
            y="0"
            width="1000"
            height="524"
            mask="url(#arrowDrawMask)"
          />
        </svg>
      </div>

      {/* Wordmark NE_ARQ (define el alto del lockup) */}
      <img
        src="/wordmark.png"
        alt="NEXARQ 360"
        className="animate-wordmark-reveal relative z-10 block w-full"
        draggable="false"
      />
    </div>
  )
}
