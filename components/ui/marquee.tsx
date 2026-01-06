"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = { items: (string | ReactNode)[] };

const PX_PER_SECOND = 90; // ✅ tweak once here (lower = slower, higher = faster)
const MIN_SECONDS = 10;
const MAX_SECONDS = 120;

function useAutoDuration(items: (string | ReactNode)[]) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const compute = () => {
      const width = el.scrollWidth;
      if (!width) return;

      const seconds = width / PX_PER_SECOND;
      setDuration(Math.max(MIN_SECONDS, Math.min(seconds, MAX_SECONDS)));
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);

    return () => ro.disconnect();
  }, [items]);

  return { trackRef, duration };
}

export function Marquee({ items }: Props) {
  const { trackRef, duration } = useAutoDuration(items);

  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-border bg-main text-black/65 font-base">
      <div
        ref={trackRef}
        className="animate-marquee whitespace-nowrap py-6 will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, id) => (
          <span key={id} className="mx-4 text-3xl">
            {item}
          </span>
        ))}
      </div>

      <div
        className="absolute top-0 animate-marquee2 whitespace-nowrap py-6 will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, id) => (
          <span key={`clone-${id}`} className="mx-4 text-3xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ReverseMarquee({ items }: Props) {
  const { trackRef, duration } = useAutoDuration(items);

  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-main text-black/65 font-base">
      <div
        ref={trackRef}
        className="animate-reverse-marquee whitespace-nowrap py-6 will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, id) => (
          <span key={id} className="mx-4 text-3xl">
            {item}
          </span>
        ))}
      </div>

      <div
        className="absolute top-0 animate-reverse-marquee2 whitespace-nowrap py-6 will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, id) => (
          <span key={`clone-${id}`} className="mx-4 text-3xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
