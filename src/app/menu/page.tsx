import type { Metadata } from "next";
import Link from "next/link";
import { MenuGroupView } from "@/components/menu-view";
import { SectionNav } from "@/components/section-nav";
import { SiteLinks } from "@/components/site-links";
import { menu } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Menú",
  description: "Carta de Frances.co: bebidas, boulangerie, patisserie, salado, brunch y almuerzos.",
};

export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="font-serif text-sm tracking-[0.22em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            {site.mark}
          </Link>
          <SiteLinks />
        </div>
        <SectionNav sections={menu.map((section) => ({ id: section.id, title: section.title }))} />
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
                    key={
                      group.label ??
                      group.items?.[0]?.name ??
                      group.groups?.[0]?.label ??
                      section.id
                    }
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
