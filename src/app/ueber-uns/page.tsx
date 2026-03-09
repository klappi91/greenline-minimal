"use client";

import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import type { Metadata } from "next";

export default function UeberUnsPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Philosophie
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-4">
            Über uns
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-lg md:text-xl font-light leading-relaxed text-greenline mb-16 md:mb-20">
            Unsere Philosophie — Natur pur!
          </p>
        </AnimateIn>

        <div className="space-y-8 md:space-y-10">
          <AnimateIn delay={0.3}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
              Seit über zwanzig Jahren gehört das Markenzeichen greenline zum festen Erkennungszeichen für wohngesunde Bodenbeläge. Mit Teppichböden ohne chemische Beimischungen und schädliche Ausrüstung (wie z. B. Mottenschutz, Antistatik, Antisoil usw.), die schadstoffkontrolliert, volldeklariert und somit im baubiologischen Sinne völlig unbedenklich sind, setzte greenline den ersten Eckstein auf diesem Weg.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
              Heute umfasst unsere Produktpalette für den Bodenbereich mit Korkparkett, Schurwollteppichen, Sisalbelägen... bis hin zu Universalkleber und Ausgleichsmasse fast alles, was für die wohngesunde und zugleich ästhetisch ansprechende Ausstattung von &bdquo;Lebensräumen&ldquo; notwendig ist.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
              Wir finden Sie haben das Recht, in einem &bdquo;natürlichen Wohnraum&ldquo; zu leben! Deswegen setzen wir unsere kontinuierliche Entwicklung von Produkten für die natürliche Wohnraumgestaltung fort: Nach den CONTRA-Produkten und den Wohlfühlfarben stehen nun Öle und Wachse für die Bodenveredelung sowie Produkte für die Innendämmung im Zentrum unserer Produktentwicklung.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.6}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
              Unser Ziel ist nicht nur, dass Sie mit Naturprodukten auf keinen Ihrer gewohnten &bdquo;Lebensstandards&ldquo; verzichten müssen, sondern dass Sie die unverwechselbare Schönheit natürlicher Oberflächen in Ihren eigenen vier Wänden genießen können und dass Sie an der langen Lebensdauer unserer Produkte auch lange Freude haben.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.7}>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/70 pt-8 border-t border-border/50">
              Mit besten Grüßen,
              <br />
              <span className="text-greenline">Ihr greenline Team</span>
            </p>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
