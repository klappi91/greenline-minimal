import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Händlersuche",
};

export default function HaendlersuchePage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Fachhändler
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-6">
            Händlersuche
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/60 mb-16 md:mb-20">
            Finden Sie einen greenline Fachhändler in Ihrer Nähe.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="border border-border/50 p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
              <MapPin size={20} className="text-greenline" />
            </div>
            <p className="text-base font-light leading-relaxed text-foreground/70">
              Die interaktive Kartensuche wird derzeit überarbeitet und steht Ihnen in Kürze zur Verfügung.
            </p>
            <div className="pt-4 border-t border-border/50 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                In der Zwischenzeit
              </p>
              <p className="text-base font-light leading-relaxed text-foreground/70">
                Kontaktieren Sie uns gerne direkt — wir nennen Ihnen einen Fachhändler in Ihrer Region.
              </p>
              <div className="text-base font-light leading-relaxed text-foreground/70 space-y-1">
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
          </div>
        </AnimateIn>
      </section>
    </PageLayout>
  );
}
