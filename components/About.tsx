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

        {/* Circular profile photo. Swap by replacing public/profile.jpg. */}
        <div className="mx-auto md:mx-0">
          <div className="group relative mx-auto h-56 w-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-sky-500 blur-lg opacity-40 transition group-hover:opacity-60" />
            <img
              src="/profile.jpg"
              alt={profile.name}
              width={224}
              height={224}
              className="relative h-56 w-56 rounded-full object-cover object-[50%_28%] shadow-xl ring-4 ring-white dark:ring-slate-900"
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-300 md:justify-start">
            <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm font-medium">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
