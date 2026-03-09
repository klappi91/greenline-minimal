import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="greenline"
              width={140}
              height={12}
              className="h-3.5 w-auto opacity-70"
            />
            <p className="text-sm font-light leading-relaxed text-muted-foreground max-w-xs">
              Ökologischer Fachgroßhändler für wohngesunde Raumgestaltung mit
              innovativen Eigenmarken und starken Partnern.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm font-light text-foreground/70">
              <p>greenline Naturprodukte GmbH</p>
              <p>Feldlinie 32</p>
              <p>26160 Bad Zwischenahn</p>
              <p className="pt-2">
                Tel:{" "}
                <a
                  href="tel:+4944136107710"
                  className="transition-colors hover:text-foreground"
                >
                  +49 (0)441 - 36 10 77 -10
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@greenline-online.de"
                  className="transition-colors hover:text-foreground"
                >
                  info@greenline-online.de
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Links
            </h3>
            <div className="flex flex-col gap-2 text-sm font-light">
              <Link
                href="/produkte"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                Produkte
              </Link>
              <Link
                href="/ueber-uns"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                Über uns
              </Link>
              <Link
                href="/haendlersuche"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                Händlersuche
              </Link>
              <Link
                href="/kontakt"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-muted-foreground">
            &copy; {new Date().getFullYear()} greenline Naturprodukte GmbH
          </p>
          <div className="flex gap-6 text-xs font-light text-muted-foreground">
            <Link
              href="/impressum"
              className="transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-foreground"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="transition-colors hover:text-foreground"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
