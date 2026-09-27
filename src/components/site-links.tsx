import { MapPin } from "lucide-react";
import { site } from "@/data/site";

const linkClass =
  "inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Redes y ubicación" className={`flex gap-6 ${className}`}>
      <a
        className={linkClass}
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
        Instagram
      </a>
      <a
        className={linkClass}
        href={site.locationUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin aria-hidden className="size-4" strokeWidth={1.5} />
        Ubicación
      </a>
    </nav>
  );
}
