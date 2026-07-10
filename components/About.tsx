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
      <div className="space-y-5 text-slate-600 dark:text-slate-400">
        <p className="max-w-3xl leading-relaxed">{profile.summary}</p>

        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-sm font-medium">Based in {profile.location}</span>
        </div>

        <p className="pt-2 font-medium text-slate-800 dark:text-slate-200">
          What I focus on:
        </p>
        <ul className="grid max-w-3xl gap-2 sm:grid-cols-2">
          {specializations.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm leading-6">
              <svg
                className="mt-1.5 h-3 w-3 shrink-0 text-accent"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m4 2 4 4-4 4" />
              </svg>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
