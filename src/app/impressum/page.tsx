"use client";

import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";

export default function ImpressumPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Rechtliches
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-16 md:mb-20">
            Impressum
          </h1>
        </AnimateIn>

        <div className="space-y-10">
          <AnimateIn delay={0.2}>
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Angaben gemäß § 5 TMG
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
                Kontakt
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
            <div className="pt-8 border-t border-border/50">
              <p className="text-base font-light leading-relaxed text-foreground/50 italic">
                Weitere Angaben gemäß § 5 TMG werden aktualisiert.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
