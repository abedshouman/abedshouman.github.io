import { profile, socials } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 animate-fade-up font-mono text-sm text-accent">
          Hi, my name is
        </p>
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <h2 className="mt-2 animate-fade-up text-2xl font-semibold text-slate-500 sm:text-4xl dark:text-slate-400">
          {profile.title}
        </h2>
        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.tagline}
        </p>

        <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-soft"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-lg px-5 py-3 text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-accent hover:underline dark:text-slate-300"
          >
            Résumé ↗
          </a>
        </div>

        <div className="mt-10 flex animate-fade-up gap-5 text-sm text-slate-500 dark:text-slate-400">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="transition hover:text-accent"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
