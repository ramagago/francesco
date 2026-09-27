import type { Metadata } from "next";
import Link from "next/link";
import { MenuGroupView } from "@/components/menu-view";
import { menu } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Menú",
  description: "Carta de Frances.co: bebidas, boulangerie, patisserie, salado, brunch y almuerzos.",
};

export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="font-serif text-sm tracking-[0.22em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
          >
            {site.mark}
          </Link>
          <nav aria-label="Sitio" className="flex gap-5 text-sm text-muted">
            <a
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
              href={site.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubicación
            </a>
          </nav>
        </div>
        <nav
          aria-label="Secciones"
          className="mx-auto flex w-full max-w-3xl gap-2 overflow-x-auto px-5 pb-3 sm:px-8"
        >
          {menu.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 border border-line bg-paper px-3 py-1.5 text-sm text-foreground transition-colors hover:border-sea hover:text-sea focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs tracking-[0.22em] text-sea uppercase">Pasticceria</p>
        <h1 className="mt-3 font-serif text-5xl leading-none font-light italic sm:text-6xl">
          Menú
        </h1>

        <div className="mt-14 space-y-16">
          {menu.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-36">
              <h2 className="font-serif text-4xl leading-none font-light italic">
                ( ) {section.title}
              </h2>
              {section.kicker ? (
                <p className="mt-3 text-xs tracking-[0.14em] text-sea uppercase">
                  {section.kicker}
                </p>
              ) : null}
              <div
                className={
                  section.split
                    ? "mt-8 grid gap-10 md:grid-cols-2 md:gap-x-12"
                    : "mt-8 grid gap-10"
                }
              >
                {section.groups.map((group) => (
                  <MenuGroupView
                    key={group.label ?? group.items?.[0]?.name ?? section.id}
                    group={group}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
