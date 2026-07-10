import { profile, socials } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="mb-3 font-mono text-sm text-accent">05. What&apos;s next?</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Get in touch
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-400">
        I&apos;m always open to discussing backend architecture, distributed systems,
        or new opportunities. Feel free to reach out and I&apos;ll get back to you.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-lg border border-accent px-8 py-4 font-mono text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
      >
        Say hello
      </a>

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
