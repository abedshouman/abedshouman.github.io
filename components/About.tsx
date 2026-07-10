import { profile, specializations } from '@/lib/data';

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
      <span className="font-mono text-lg text-accent">{index}</span>
      {title}
      <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
    </h2>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01." title="About" />
      <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
        <div className="space-y-4 text-slate-600 dark:text-slate-400">
          <p className="leading-relaxed">{profile.summary}</p>
          <p className="pt-2 font-medium text-slate-800 dark:text-slate-200">
            What I focus on:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {specializations.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1 text-accent">▹</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Monogram avatar — swap for a real photo by dropping abed.jpg in /public
            and replacing this block with a <img src="abed.jpg" /> */}
        <div className="mx-auto md:mx-0">
          <div className="group relative h-56 w-56">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent transition group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-sky-500 text-6xl font-bold text-white shadow-xl">
              {profile.initials}
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-400 md:text-left">
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
