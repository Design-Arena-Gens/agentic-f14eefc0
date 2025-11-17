import CatIllustration from "../components/CatIllustration";

const routines = [
  {
    id: "sunrise",
    title: "Sunrise Stretch",
    blurb:
      "Gentle spinal waves and playful tail swishes ease the sleepy stiffness away.",
    variant: "stretch",
    matGradient: "#a6f0ff,#fbc2eb",
    auraGradient: "#ffb2ff,#b0f3ff",
  },
  {
    id: "corefire",
    title: "Core Fire Crunches",
    blurb:
      "Compact, controlled curls that make the floof ripple with focused determination.",
    variant: "crunch",
    matGradient: "#c9b6ff,#ffcfda",
    auraGradient: "#ffd6ff,#c5c6ff",
  },
  {
    id: "pepup",
    title: "Pep-Up Presses",
    blurb:
      "Tiny pastel dumbbells, rhythmic reps, and a triumphant purr for every squeeze.",
    variant: "dumbbell",
    matGradient: "#b4f1d4,#ffecb3",
    auraGradient: "#ffedc4,#b9f5f6",
  },
] as const;

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col gap-16 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#fff1f9_0%,#ffeef3_35%,transparent_60%),radial-gradient(circle_at_80%_10%,#fff7d9_0%,transparent_45%),linear-gradient(180deg,#fdf5ff_0%,#e3f6ff_100%)] pb-20 text-indigo-950">
      <div className="pointer-events-none absolute inset-0 -z-10 animate-[floatBackdrop_18s_ease-in-out_infinite] bg-[radial-gradient(circle_at_center,#ffffff_0%,rgba(255,255,255,0)_70%)] opacity-60" />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-20 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col justify-center space-y-10">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 shadow-[0_12px_40px_rgba(255,203,243,0.45)]">
              Sunrise Flow
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-indigo-900 drop-shadow-sm sm:text-5xl lg:text-6xl">
              Morning Moves with <span className="text-pink-500">Mallow</span>
              , the Energized Black Cat
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-indigo-900/80 sm:text-xl">
              Follow along as Mallow wakes the day with stretchy sways, core-burning crunches, and sunny dumbbell reps—all on a pastel yoga mat that glows with upbeat energy.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-[0_18px_30px_rgba(255,132,210,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_42px_rgba(255,132,210,0.55)]">
              Join the Routine
            </button>
            <button className="rounded-full border border-indigo-200/80 bg-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 shadow-[0_10px_30px_rgba(160,190,255,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
              Save the Flow
            </button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute inset-10 -z-10 rounded-[48px] bg-[conic-gradient(from_120deg_at_70%_20%,rgba(255,230,194,0.85),rgba(191,231,255,0.65),rgba(255,220,244,0.9))] blur-3xl opacity-70" />
          <CatIllustration
            variant="stretch"
            matGradient="var(--stretch-mat-start),var(--stretch-mat-end)"
            auraGradient="var(--stretch-aura-start),var(--stretch-aura-end)"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <header className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-indigo-950 sm:text-4xl">
            Three-play Circuit for Peak Purrformance
          </h2>
          <p className="text-lg text-indigo-900/70">
            Each mini set keeps the vibes high, the colors bright, and the heart happily racing.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-3">
          {routines.map((routine) => (
            <article
              key={routine.id}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_30px_70px_rgba(151,142,255,0.25)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_40px_90px_rgba(151,142,255,0.35)]"
            >
              <div className="relative mb-6 rounded-[24px] border border-white/40 bg-gradient-to-br from-white/70 via-white/40 to-white/20 p-3">
                <CatIllustration
                  variant={routine.variant}
                  matGradient={routine.matGradient}
                  auraGradient={routine.auraGradient}
                />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900">
                {routine.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-indigo-900/75">
                {routine.blurb}
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                <span>3 sets · 8 reps</span>
                <span className="text-sky-500 transition group-hover:translate-x-1">
                  Flow →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
