import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="font-mono text-lg text-accent">04.</span>
        Projects
        <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
                <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex gap-3 text-slate-400">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Repository" className="transition hover:text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live site" className="transition hover:text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-accent dark:text-white">
              {p.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>

            <ul className="mt-4 space-y-1.5">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="mt-1 text-accent">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
