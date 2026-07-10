import { profile, socials } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="mb-3 font-mono text-sm text-accent">06. What&apos;s next?</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Get in touch
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-400">
        I&apos;m always open to discussing backend architecture, distributed systems,
        or new opportunities. Reach out by email or phone and I&apos;ll get back to you.
      </p>

      {/* Email + phone: click to open mail app or dial */}
      <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-accent px-6 py-4 font-medium text-accent transition hover:bg-accent hover:text-white"
        >
          <svg width="18" height="18" className="shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 5L2 7" />
          </svg>
          <span className="text-sm">{profile.email}</span>
        </a>

        <a
          href={profile.phoneHref}
          className="group flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-accent px-6 py-4 font-medium text-accent transition hover:bg-accent hover:text-white"
        >
          <svg width="18" height="18" className="shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-sm">{profile.phone}</span>
        </a>
      </div>

      <div className="mt-10 flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
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
    </section>
  );
}
