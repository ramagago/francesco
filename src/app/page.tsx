import Link from "next/link";
import { menu } from "@/data/menu";
import { site } from "@/data/site";

const externalLink =
  "text-sm text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="px-6 pt-8 sm:px-10">
        <p className="font-serif text-sm tracking-[0.28em] text-foreground">
          {site.mark}
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-14 px-6 py-16 sm:px-10 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.22em] text-sea uppercase">
            Pasticceria
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none font-light italic text-foreground sm:text-7xl">
            {site.welcome}
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
            {site.lede}
          </p>

          <Link
            href="/menu"
            className="mt-10 flex h-14 w-full items-center justify-center bg-foreground px-10 text-base text-background transition-colors hover:bg-sea focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea sm:w-fit"
          >
            Menú
          </Link>

          <nav aria-label="Redes y ubicación" className="mt-6 flex gap-8">
            <a
              className={externalLink}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className={externalLink}
              href={site.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubicación
            </a>
          </nav>
        </div>

        <nav aria-label="Secciones del menú" className="border border-line bg-paper/80 p-6 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-muted uppercase">
            La carta
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {menu.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/menu#${section.id}`}
                  className="font-serif text-2xl leading-tight italic text-foreground transition-colors hover:text-sea focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
                >
                  ( ) {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
