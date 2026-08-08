'use client';

import { experience } from '@/lib/data';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, className } = useScrollReveal();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <div ref={ref} className={className}>
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="font-mono text-lg text-accent">03.</span>
          Experience
          <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
        </h2>

        <div className="reveal-stagger relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent dark:border-slate-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.role}
                  <span className="text-accent"> @ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                {job.location}
              </p>
              <ul className="space-y-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <svg className="mt-1 h-3 w-3 shrink-0 text-accent" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 2 4 4-4 4" />
                  </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {job.projects && job.projects.length > 0 && (
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Projects
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {job.projects.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-lg border border-slate-200 bg-white/60 p-4 dark:border-slate-700/60 dark:bg-slate-900/50"
                      >
                        <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {p.name}
                        </h5>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="inline-block rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[11px] text-accent"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
