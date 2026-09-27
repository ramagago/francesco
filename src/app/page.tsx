import Image from "next/image";
import Link from "next/link";
import { SiteLinks } from "@/components/site-links";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col md:min-h-full md:flex-row">
      <div className="relative h-[30vh] w-full shrink-0 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[40%]">
        <Image
          src="/images/hero-francesco.jpeg"
          alt="Café con espuma de Frances.co"
          fill
          preload
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover object-[center_32%] md:object-[center_42%]"
        />
      </div>

      <div className="flex w-full flex-1 flex-col md:w-[60%] md:flex-none">
        <header className="px-6 pt-8 sm:px-10">
          <p className="font-serif text-sm tracking-[0.28em] text-foreground">
            {site.mark}
          </p>
        </header>

        <main className="flex w-full flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:items-center md:text-center">
          <div className="flex w-full max-w-xl flex-col md:w-auto md:items-center">
            <p className="text-xs tracking-[0.22em] text-sea uppercase">
              Pasticceria
            </p>
            <h1 className="mt-4 font-serif text-6xl leading-none font-light italic text-foreground sm:text-7xl">
              {site.welcome}
            </h1>

            <Link
              href="/menu"
              className="mt-10 flex h-14 w-full items-center justify-center rounded-[2px] bg-ink px-10 text-base text-white transition-colors hover:bg-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-fit"
            >
              Menú
            </Link>

            <SiteLinks className="mt-6 md:justify-center" />
          </div>
        </main>
      </div>
    </div>
  );
}
