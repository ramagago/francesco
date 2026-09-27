"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type SectionLink = {
  id: string;
  title: string;
};

export function SectionNav({ sections }: { sections: SectionLink[] }) {
  const scrollerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const pinnedRef = useRef<string | null>(null);
  const sectionKey = sections.map((section) => section.id).join("|");

  function selectSection(id: string) {
    pinnedRef.current = id;
    setActive(id);

    const release = () => {
      window.setTimeout(() => {
        if (pinnedRef.current === id) pinnedRef.current = null;
      }, 80);
    };

    window.addEventListener("scrollend", release, { once: true });

    const startY = window.scrollY;
    window.setTimeout(() => {
      if (pinnedRef.current === id && window.scrollY === startY) {
        pinnedRef.current = null;
        window.removeEventListener("scrollend", release);
      }
    }, 120);
  }

  useEffect(() => {
    const release = () => {
      pinnedRef.current = null;
    };

    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    return () => {
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
    };
  }, []);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node != null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (pinnedRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const next = visible[0]?.target.id;
        if (next) setActive(next);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionKey, sections]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const link = track.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!link) return;

    setIndicator({ left: link.offsetLeft, width: link.offsetWidth });

    const linkStart = link.offsetLeft;
    const linkEnd = linkStart + link.offsetWidth;
    const viewStart = scroller.scrollLeft;
    const viewEnd = viewStart + scroller.clientWidth;

    if (linkStart < viewStart) {
      scroller.scrollTo({ left: Math.max(0, linkStart - 16), behavior: "smooth" });
    } else if (linkEnd > viewEnd) {
      scroller.scrollTo({
        left: linkEnd - scroller.clientWidth + 16,
        behavior: "smooth",
      });
    }
  }, [active, sectionKey]);

  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      const link = track?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
      if (!link) return;
      setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <nav
      ref={scrollerRef}
      aria-label="Secciones"
      className="mx-auto w-full max-w-3xl overflow-x-auto px-5 sm:px-8"
    >
      <div ref={trackRef} className="relative flex w-max min-w-full gap-6">
        {sections.map((section) => {
          const isActive = section.id === active;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => selectSection(section.id)}
              className={`shrink-0 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${
                isActive ? "text-ink" : "text-muted hover:text-foreground"
              }`}
            >
              {section.title}
            </a>
          );
        })}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
        <span
          aria-hidden
          className="absolute bottom-0 h-0.5 bg-ink transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>
    </nav>
  );
}
