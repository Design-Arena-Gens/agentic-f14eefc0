import clsx from "clsx";

type CatIllustrationProps = {
  variant: "stretch" | "crunch" | "dumbbell";
  matGradient: string;
  auraGradient: string;
};

const palette = {
  fur: "#1a1926",
  furSoft: "#231f33",
  whisker: "#f3d4ff",
  innerEar: "#ffbcd9",
  blush: "#ff92a1",
  eye: "#f5f6fb",
  collar: "#ffce6a",
  bell: "#ffe6a9",
  dumbbell: "#27243c",
};

export function CatIllustration({
  variant,
  matGradient,
  auraGradient,
}: CatIllustrationProps) {
  const poseTransforms = {
    stretch: {
      torso: "translate(160 160) scale(1.05 1.2)",
      head: "translate(210 90) rotate(-6)",
      tail: "translate(120 90) rotate(-25)",
      leftArm: "translate(255 195) rotate(-22)",
      rightArm: "translate(215 205) rotate(-42)",
      leftLeg: "translate(180 300) rotate(12)",
      rightLeg: "translate(225 308) rotate(-4)",
      accessory: "translate(140 150)",
    },
    crunch: {
      torso: "translate(210 210) rotate(-28) scale(1.2 1)",
      head: "translate(260 160) rotate(8)",
      tail: "translate(120 240) rotate(20)",
      leftArm: "translate(288 242) rotate(64)",
      rightArm: "translate(262 246) rotate(38)",
      leftLeg: "translate(187 285) rotate(-62)",
      rightLeg: "translate(212 275) rotate(-12)",
      accessory: "translate(150 245)",
    },
    dumbbell: {
      torso: "translate(200 180) rotate(4)",
      head: "translate(250 122)",
      tail: "translate(120 160) rotate(-42)",
      leftArm: "translate(292 220) rotate(24)",
      rightArm: "translate(236 190) rotate(-58)",
      leftLeg: "translate(210 300) rotate(6)",
      rightLeg: "translate(250 302) rotate(-2)",
      accessory: "translate(180 155)",
    },
  } as const;

  const pose = poseTransforms[variant];

  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-visible">
      <svg
        className="h-full w-full"
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`${variant}-mat`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient
            id={`${variant}-aura`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={auraGradient.split(",")[0]} />
            <stop offset="100%" stopColor={auraGradient.split(",")[1]} />
          </linearGradient>
          <linearGradient
            id={`${variant}-matColor`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={matGradient.split(",")[0]} />
            <stop offset="100%" stopColor={matGradient.split(",")[1]} />
          </linearGradient>
        </defs>

        <rect
          x="60"
          y="252"
          width="360"
          height="58"
          rx="26"
          fill={`url(#${variant}-matColor)`}
        />
        <ellipse
          cx="240"
          cy="286"
          rx="150"
          ry="60"
          fill={`url(#${variant}-mat)`}
        />

        <g transform="translate(100 40)">
          <g transform={pose.tail}>
            <path
              d="M60 90 C40 40 10 0 20 -40 C30 -80 90 -70 90 -20 C90 30 30 120 30 120"
              stroke={palette.fur}
              strokeWidth={22}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="3.8s"
                repeatCount="indefinite"
                values="
                M60 90 C40 40 10 0 20 -40 C30 -80 90 -70 90 -20 C90 30 30 120 30 120;
                M60 90 C50 35 0 10 20 -50 C40 -96 92 -70 94 -20 C96 30 30 120 30 120;
                M60 90 C40 40 10 0 20 -40 C30 -80 90 -70 90 -20 C90 30 30 120 30 120"
              />
            </path>
          </g>

          <g transform={pose.torso}>
            <ellipse
              cx="0"
              cy="0"
              rx="78"
              ry="92"
              fill={palette.fur}
              className="drop-shadow-[0_18px_32px_rgba(21,16,35,0.4)]"
            />
            <ellipse cx="0" cy="10" rx="50" ry="55" fill={palette.furSoft} />
          </g>

          <g transform={pose.head}>
            <g transform="translate(0 0)">
              <ellipse cx="0" cy="0" rx="54" ry="52" fill={palette.fur} />
              <g>
                <path
                  d="M-38 -28 L-64 -70 L-24 -48 Z"
                  fill={palette.fur}
                  stroke={palette.furSoft}
                  strokeWidth="4"
                />
                <path
                  d="M38 -28 L64 -70 L24 -48 Z"
                  fill={palette.fur}
                  stroke={palette.furSoft}
                  strokeWidth="4"
                />
                <path
                  d="M-34 -30 L-60 -68 L-22 -48 Z"
                  fill={palette.innerEar}
                />
                <path
                  d="M34 -30 L60 -68 L22 -48 Z"
                  fill={palette.innerEar}
                />
              </g>

              <g>
                <ellipse
                  cx="-18"
                  cy="-4"
                  rx="14"
                  ry="18"
                  fill={palette.eye}
                />
                <ellipse cx="18" cy="-4" rx="14" ry="18" fill={palette.eye} />
                <circle cx="-16" cy="-4" r="6" fill={palette.fur} />
                <circle cx="16" cy="-4" r="6" fill={palette.fur} />
                <circle
                  cx="-13"
                  cy="-8"
                  r="3"
                  fill="white"
                  opacity="0.6"
                />
                <circle
                  cx="19"
                  cy="-8"
                  r="3"
                  fill="white"
                  opacity="0.6"
                />
              </g>

              <g transform="translate(0 8)">
                <ellipse cx="0" cy="0" rx="16" ry="12" fill={palette.furSoft} />
                <path
                  d="M-12 2 Q0 16 12 2"
                  stroke={palette.furSoft}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="-10" cy="10" r="6" fill={palette.blush} opacity={0.6} />
                <circle cx="10" cy="10" r="6" fill={palette.blush} opacity={0.6} />
              </g>

              <g>
                <path
                  d="M-28 12 C-54 14 -66 26 -70 28"
                  stroke={palette.whisker}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M-28 16 C-54 26 -66 34 -70 36"
                  stroke={palette.whisker}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M28 12 C54 14 66 26 70 28"
                  stroke={palette.whisker}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M28 16 C54 26 66 34 70 36"
                  stroke={palette.whisker}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </g>

          <g transform={pose.leftArm}>
            <ellipse
              cx="0"
              cy="0"
              rx="20"
              ry="40"
              fill={palette.fur}
              transform="rotate(14)"
            />
            <ellipse
              cx="0"
              cy="28"
              rx="18"
              ry="22"
              fill={palette.furSoft}
            />
          </g>

          <g transform={pose.rightArm}>
            <ellipse
              cx="0"
              cy="0"
              rx="20"
              ry="40"
              fill={palette.fur}
              transform="rotate(-18)"
            />
            <ellipse
              cx="0"
              cy="28"
              rx="18"
              ry="22"
              fill={palette.furSoft}
            />
          </g>

          <g transform={pose.leftLeg}>
            <ellipse cx="0" cy="0" rx="22" ry="46" fill={palette.fur} />
            <ellipse cx="0" cy="32" rx="22" ry="18" fill={palette.furSoft} />
          </g>

          <g transform={pose.rightLeg}>
            <ellipse cx="0" cy="0" rx="22" ry="46" fill={palette.fur} />
            <ellipse cx="0" cy="32" rx="22" ry="18" fill={palette.furSoft} />
          </g>

          <g transform={`translate(200 200)`}>
            <rect
              x="-44"
              y="-20"
              width="88"
              height="40"
              rx="20"
              fill={palette.collar}
            />
            <circle cx="0" cy="24" r="12" fill={palette.bell} />
          </g>

          {variant === "dumbbell" && (
            <g transform={pose.accessory}>
              <g transform="translate(132 20)">
                <rect
                  x="-60"
                  y="-8"
                  width="120"
                  height="16"
                  rx="8"
                  fill={palette.dumbbell}
                />
                <rect
                  x="-90"
                  y="-16"
                  width="24"
                  height="32"
                  rx="10"
                  fill={palette.dumbbell}
                />
                <rect
                  x="66"
                  y="-16"
                  width="24"
                  height="32"
                  rx="10"
                  fill={palette.dumbbell}
                />
              </g>
              <g transform="translate(84 -60)">
                <rect
                  x="-24"
                  y="-8"
                  width="48"
                  height="16"
                  rx="8"
                  fill={palette.dumbbell}
                />
                <rect
                  x="-46"
                  y="-16"
                  width="18"
                  height="32"
                  rx="8"
                  fill={palette.dumbbell}
                />
                <rect
                  x="28"
                  y="-16"
                  width="18"
                  height="32"
                  rx="8"
                  fill={palette.dumbbell}
                />
              </g>
            </g>
          )}

          {variant === "crunch" && (
            <g transform={pose.accessory}>
              <ellipse
                cx="0"
                cy="0"
                rx="90"
                ry="26"
                fill="rgba(255,255,255,0.35)"
              />
              <ellipse
                cx="0"
                cy="0"
                rx="74"
                ry="20"
                fill="rgba(255,255,255,0.55)"
              />
            </g>
          )}

          {variant === "stretch" && (
            <g transform={pose.accessory}>
              <path
                d="M-100 -40 Q0 -120 100 -40"
                stroke={`url(#${variant}-aura)`}
                strokeWidth="26"
                strokeLinecap="round"
                opacity="0.4"
              >
                <animate
                  attributeName="opacity"
                  values="0.4;0.7;0.4"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          )}
        </g>
      </svg>

      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 scale-125 rounded-[32px]",
          "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9)_0%,transparent_60%)]",
          "shadow-[0_40px_80px_rgba(148,112,255,0.25)]",
        )}
      />
    </div>
  );
}

export default CatIllustration;
