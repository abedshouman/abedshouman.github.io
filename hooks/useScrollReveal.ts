'use client';

import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const revealed = visible ? 'reveal reveal-visible' : 'reveal';

  return { ref, className: revealed };
}
