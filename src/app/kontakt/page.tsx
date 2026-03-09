import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Kontakt
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-16 md:mb-20">
            Kontakt
          </h1>
        </AnimateIn>

        <div className="space-y-12">
          <AnimateIn delay={0.2}>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Anschrift
              </p>
              <div className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
                <p className="text-foreground">greenline Naturprodukte GmbH</p>
                <p>Feldlinie 32</p>
                <p>26160 Bad Zwischenahn</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Erreichbarkeit
              </p>
              <div className="text-base md:text-lg font-light leading-relaxed text-foreground/70 space-y-1">
                <p>
                  Tel.:{" "}
                  <a
                    href="tel:+4944136107710"
                    className="transition-colors duration-300 hover:text-foreground"
                  >
                    +49 (0)441 - 36 10 77 -10
                  </a>
                </p>
                <p>Fax: +49 (0)441 - 36 10 77 -19</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@greenline-online.de"
                    className="text-greenline transition-colors duration-300 hover:text-greenline/80"
                  >
                    info@greenline-online.de
                  </a>
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="pt-8 border-t border-border/50 space-y-6">
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
                Unsere{" "}
                <Link
                  href="/agb"
                  className="text-greenline transition-colors duration-300 hover:text-greenline/80 underline underline-offset-4 decoration-greenline/30"
                >
                  Allgemeinen Geschäftsbedingungen
                </Link>{" "}
                finden Sie hier.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
                Vielen Dank für Ihr Interesse!
                <br />
                <span className="text-greenline">Ihr greenline Team</span>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
