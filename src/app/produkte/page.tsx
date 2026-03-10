import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Alle Produktwelten von greenline: Teppichböden, Korkparkett, Wandgestaltung, Innendämmung, Öle & Wachse, Schutz & Pflege und mehr.",
};

export default function ProduktePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Sortiment
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground max-w-3xl">
            Unsere <span className="text-greenline">Produktwelten</span>
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 text-lg font-light leading-relaxed text-foreground/60 max-w-2xl">
            Schadstoffkontrollierte, volldeklarierte Naturprodukte für
            wohngesunde Raumgestaltung — von Teppichböden über Wandgestaltung
            bis hin zu Ölen und Wachsen.
          </p>
        </AnimateIn>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, i) => (
            <AnimateIn key={category.slug} delay={i * 0.06}>
              <Link
                href={`/produkte/${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted mb-5">
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-light tracking-wide text-foreground group-hover:text-greenline transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="mt-1.5 text-sm font-light text-muted-foreground line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 text-foreground/20 transition-all duration-300 group-hover:text-greenline group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-3 text-xs font-light text-muted-foreground">
                  {category.products.length}{" "}
                  {category.products.length === 1 ? "Produkt" : "Produkte"}
                </p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Beratung
            </p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
              Nicht sicher, welches Produkt das richtige ist?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-base font-light text-foreground/60 mb-10">
              Unsere Fachhändler beraten Sie gerne vor Ort.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link
              href="/haendlersuche"
              className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:border-foreground/40 min-h-[44px]"
            >
              Händler in Ihrer Nähe
              <ArrowRight size={14} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
