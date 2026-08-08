import { profile } from '@/lib/data';

const version = process.env.NEXT_PUBLIC_APP_VERSION;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center dark:border-slate-800">
      <p className="font-mono text-xs text-slate-400">
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
        {version && <> · v{version}</>}
      </p>
    </footer>
  );
}
