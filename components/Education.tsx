import { education, certifications } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="font-mono text-lg text-accent">05.</span>
        Education &amp; Certifications
        <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Education
          </h3>
          {education.map((e) => (
            <div
              key={e.school}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <p className="font-semibold text-slate-900 dark:text-white">
                {e.degree}
              </p>
              <p className="mt-1 text-sm text-accent">{e.school}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">
                {e.location} · {e.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Certifications
          </h3>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/40">
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                      {c.name}
                    </span>
                    <span className="block font-mono text-xs text-slate-400">
                      {c.issuer} · {c.year}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
