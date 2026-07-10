'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { profile } from '@/lib/data';

export default function GetInTouchButton({
  className = '',
  label = 'Get in touch',
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Rendered via a portal to document.body so `position: fixed` anchors to
  // the viewport, not the hero's transformed (animated) container.
  const modal = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact details"
    >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-sm animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Get in touch
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Tap to email or call me directly.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-accent hover:bg-accent/5 dark:border-slate-700"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">Email</span>
                  <span className="block truncate text-sm font-medium text-slate-800 group-hover:text-accent dark:text-slate-200">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a
                href={profile.phoneHref}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-accent hover:bg-accent/5 dark:border-slate-700"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">Phone</span>
                  <span className="block text-sm font-medium text-slate-800 group-hover:text-accent dark:text-slate-200">
                    {profile.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
