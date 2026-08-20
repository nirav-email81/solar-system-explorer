import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function useScrollRevealList<T>(items: T[], threshold = 0.1) {
  const [visible, setVisible] = useState<boolean[]>(items.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-reveal-index'));
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    const els = document.querySelectorAll('[data-reveal-index]');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items.length, threshold]);

  return visible;
}
