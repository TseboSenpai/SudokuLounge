/** Hidden SVG <defs> block — render once at the top of the tree so
 *  any PlankButton's <use href="#plankArt" /> and <use href="#bouquet" />
 *  can reference the symbols anywhere on the page. */
export default function PlankDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* ── Gradients ── */}
        <linearGradient id="wA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecb56b" />
          <stop offset="1" stopColor="#cb8c41" />
        </linearGradient>
        <linearGradient id="wB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#dca455" />
          <stop offset="0.5" stopColor="#c0833a" />
          <stop offset="1"   stopColor="#a06a2c" />
        </linearGradient>
        <linearGradient id="wC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c79050" />
          <stop offset="1" stopColor="#8d5b27" />
        </linearGradient>

        {/* ── Three-board plank ── */}
        <g id="plankArt">
          {/* bottom board */}
          <path d="M44,108 C40,100 50,96 62,97 L380,94 C396,93 404,100 400,110 C402,122 394,132 378,131 L60,132 C46,133 40,124 41,116 Z"
            fill="url(#wC)" stroke="#3a2410" strokeWidth="5" strokeLinejoin="round" />
          <path d="M58,118 C160,122 280,115 382,120"
            fill="none" stroke="#6e3f18" strokeWidth="2.4" strokeLinecap="round" opacity="0.45" />
          <path d="M210,123 C212,118 220,118 221,123 C221,128 212,129 210,123 Z" fill="#4a2910" />
          {/* middle board */}
          <path d="M26,62 C22,52 34,46 48,47 L394,44 C412,43 422,51 418,63 C421,80 412,96 394,95 L50,98 C34,99 24,90 25,78 Z"
            fill="url(#wB)" stroke="#3a2410" strokeWidth="5.5" strokeLinejoin="round" />
          <path d="M44,55 C150,50 300,52 406,50"
            fill="none" stroke="#f3d091" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
          <path d="M40,72 C140,67 270,75 412,69"
            fill="none" stroke="#7d4a1c" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M48,84 C150,88 280,80 406,86"
            fill="none" stroke="#8a5722" strokeWidth="2.2" strokeLinecap="round" opacity="0.42" />
          <ellipse cx="330" cy="72" rx="7" ry="9" fill="#6e3f18" />
          <ellipse cx="330" cy="72" rx="3" ry="4" fill="#3f240d" />
          {/* top board */}
          <path d="M40,24 C36,14 48,10 60,11 L372,8 C388,7 398,14 394,25 C397,38 388,50 372,49 L58,52 C44,53 36,44 37,36 Z"
            fill="url(#wA)" stroke="#3a2410" strokeWidth="5.5" strokeLinejoin="round" />
          <path d="M54,18 C160,13 290,15 384,13"
            fill="none" stroke="#f6d79b" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
          <path d="M50,32 C150,28 280,35 388,30"
            fill="none" stroke="#7d4a1c" strokeWidth="2.6" strokeLinecap="round" opacity="0.45" />
          <ellipse cx="130" cy="30" rx="4" ry="5" fill="#5f3614" opacity="0.8" />
        </g>

        {/* ── Flower primitives ── */}
        <g id="leaf">
          <path d="M0,0 C-7,7 -7,20 0,27 C7,20 7,7 0,0 Z" fill="#5f9440" stroke="#2f5320" strokeWidth="1.1" />
          <path d="M0,3 L0,24" stroke="#2f5320" strokeWidth="0.9" fill="none" opacity="0.7" />
        </g>

        <g id="daisy">
          <g fill="#fdf6ea" stroke="#be9550" strokeWidth="1">
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(45)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(90)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(135)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(180)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(225)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(270)" />
            <ellipse cx="0" cy="-8.5" rx="3.2" ry="6.8" transform="rotate(315)" />
          </g>
          <circle r="4.3" fill="#f4b637" stroke="#cf8a1e" strokeWidth="1" />
        </g>

        <g id="rose">
          <g fill="#e27ba1" stroke="#ad4a74" strokeWidth="1.1">
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" />
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" transform="rotate(60)" />
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" transform="rotate(120)" />
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" transform="rotate(180)" />
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" transform="rotate(240)" />
            <ellipse cx="0" cy="-7.5" rx="4.6" ry="6" transform="rotate(300)" />
          </g>
          <g fill="#ee97b8" stroke="#ad4a74" strokeWidth="0.9" transform="rotate(30)">
            <ellipse cx="0" cy="-5" rx="3.4" ry="4.4" />
            <ellipse cx="0" cy="-5" rx="3.4" ry="4.4" transform="rotate(72)" />
            <ellipse cx="0" cy="-5" rx="3.4" ry="4.4" transform="rotate(144)" />
            <ellipse cx="0" cy="-5" rx="3.4" ry="4.4" transform="rotate(216)" />
            <ellipse cx="0" cy="-5" rx="3.4" ry="4.4" transform="rotate(288)" />
          </g>
          <circle r="2.8" fill="#f8c2d8" />
        </g>

        <g id="wflo">
          <g fill="#8fa8e6" stroke="#5d78c4" strokeWidth="0.9">
            <ellipse cx="0" cy="-5" rx="2.6" ry="4" />
            <ellipse cx="0" cy="-5" rx="2.6" ry="4" transform="rotate(72)" />
            <ellipse cx="0" cy="-5" rx="2.6" ry="4" transform="rotate(144)" />
            <ellipse cx="0" cy="-5" rx="2.6" ry="4" transform="rotate(216)" />
            <ellipse cx="0" cy="-5" rx="2.6" ry="4" transform="rotate(288)" />
          </g>
          <circle r="2.4" fill="#f4d24a" stroke="#cf9e1e" strokeWidth="0.8" />
        </g>

        <g id="bud">
          <ellipse cx="0" cy="0" rx="4" ry="5.5" fill="#ec92b3" stroke="#ad4a74" strokeWidth="1" />
          <path d="M0,5 L0,13" stroke="#3f6b2a" strokeWidth="1.4" />
        </g>

        {/* ── Bouquet (placed at each plank end) ── */}
        <g id="bouquet">
          <path d="M-22,18 C-30,4 -18,-6 -8,-10 C2,-14 14,-18 24,-26"
            fill="none" stroke="#3f6b2a" strokeWidth="2" opacity="0.85" />
          <use href="#leaf" transform="translate(-20,4) rotate(-52) scale(0.9)" />
          <use href="#leaf" transform="translate(10,-26) rotate(22) scale(0.8)" />
          <use href="#leaf" transform="translate(-3,15) rotate(-12) scale(0.95)" />
          <use href="#bud"  transform="translate(25,-25) rotate(18) scale(0.9)" />
          <use href="#wflo" transform="translate(-21,-7) scale(1.05)" />
          <use href="#daisy" transform="translate(17,-12) scale(0.92)" />
          <use href="#rose"  transform="translate(-3,3) scale(1.18)" />
          <use href="#daisy" transform="translate(-15,15) scale(0.68)" />
          <use href="#wflo"  transform="translate(13,12) scale(0.85)" />
        </g>
      </defs>
    </svg>
  );
}
