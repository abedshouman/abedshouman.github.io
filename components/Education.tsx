import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="font-mono text-lg text-accent">05.</span>
        Education
        <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {e.degree}
              </p>
              <p className="mt-1 text-sm text-accent">{e.school}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">
                {e.location} · {e.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
