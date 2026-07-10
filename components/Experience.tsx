import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="font-mono text-lg text-accent">03.</span>
        Experience
        <span className="ml-4 hidden h-px flex-1 bg-slate-200 sm:block dark:bg-slate-800" />
      </h2>

      <div className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
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
                  <span className="mt-1 text-accent">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
