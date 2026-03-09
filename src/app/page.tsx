"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn, FadeIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const featuredCategories = categories.slice(0, 6);

export default function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/natur_pur.jpg"
            alt="Natürliche Wohnraumgestaltung"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Ökologischer Fachgroßhandel
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground">
              Natürlich ist
              <br />
              <span className="text-greenline">die beste Wahl</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="mt-8 text-lg md:text-xl font-light leading-relaxed text-foreground/60 max-w-xl mx-auto">
              Wohngesunde Raumgestaltung mit innovativen Eigenmarken — seit über
              20 Jahren.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.45}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/produkte"
                className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:bg-foreground/80 min-h-[44px]"
              >
                Produkte entdecken
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/haendlersuche"
                className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:border-foreground/40 min-h-[44px]"
              >
                Händler finden
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Philosophie
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-light leading-relaxed tracking-tight">
            Seit über zwanzig Jahren steht greenline für schadstoffkontrollierte,
            volldeklarierte Naturprodukte — baubiologisch unbedenklich und
            ästhetisch überzeugend.
          </h2>
        </AnimateIn>
      </section>

      {/* Lehm Section */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src="/images/DSC1785-Lehm.jpg"
                alt="Wandgestaltung mit Lehm"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <AnimateIn delay={0.15}>
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Wandgestaltung
              </p>
              <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight">
                Lehm: Einfach natürlich und ästhetisch überzeugend
              </h2>
              <p className="text-base font-light leading-relaxed text-foreground/60">
                Der umweltfreundliche, traditionsreiche Baustoff Lehm erlebt
                dank der erhöhten Nachfrage nach umweltgerechten und
                gesundheitsverträglichen Materialien aktuell eine Renaissance.
                Lehm vereint vielfältige Gestaltungsmöglichkeiten mit einem
                optimalen Wohnraumklima.
              </p>
              <Link
                href="/produkte/wandgestaltung"
                className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground/60 transition-colors duration-300 hover:text-foreground group"
              >
                Wandgestaltung entdecken
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Hartwachsöle Section */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimateIn className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Holzveredelung
              </p>
              <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight">
                Hartwachsöle: Die neue Generation
              </h2>
              <p className="text-base font-light leading-relaxed text-foreground/60">
                Die neuen greenline Hartwachsöle bilden eine offenporige und
                atmungsaktive wohngesunde Oberfläche. Trittfest, dauerhaft
                belastbar, pflegeleicht. Durch innovative Fertigungsmethoden
                erreichen sie eine bessere Feinverteilung der volldeklarierten
                Zusatzstoffe.
              </p>
              <Link
                href="/produkte/oele-und-wachse"
                className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground/60 transition-colors duration-300 hover:text-foreground group"
              >
                Öle & Wachse entdecken
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </AnimateIn>
          <FadeIn className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src="/images/hartwachsoele01.jpg"
                alt="greenline Hartwachsöle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Sortiment
              </p>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                Unsere Produktwelten
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, i) => (
              <AnimateIn key={category.slug} delay={i * 0.08}>
                <Link
                  href={`/produkte/${category.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted mb-4">
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
                  <h3 className="text-base font-light tracking-wide text-foreground group-hover:text-greenline transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm font-light text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <div className="text-center mt-12">
              <Link
                href="/produkte"
                className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:border-foreground/40 min-h-[44px]"
              >
                Alle Produkte
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Innendämmung Feature */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src="/images/innendaemmung-img_2327.jpg"
                alt="Innendämmung mit natürlichen Materialien"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <AnimateIn delay={0.15}>
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Innendämmung
              </p>
              <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight">
                Frieren und Schimmel war gestern
              </h2>
              <p className="text-base font-light leading-relaxed text-foreground/60">
                Innendämmung mit natürlichen Materialien leicht gemacht. Unsere
                Dämmsysteme aus Strohfaser und Holzweichfaser sorgen für
                wohngesunde Wärme und ein behagliches Raumklima.
              </p>
              <Link
                href="/produkte/innendaemmung"
                className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground/60 transition-colors duration-300 hover:text-foreground group"
              >
                Innendämmung entdecken
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-10">
              Unsere Partner
            </p>
          </AnimateIn>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50">
              <Image
                src="/images/HAGA-Logo.jpg"
                alt="HAGA"
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
              <Image
                src="/images/tretford-logo.jpg"
                alt="tretford"
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
              <Image
                src="/images/redstone-logo.jpg"
                alt="redstone"
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
              <Image
                src="/images/le-tonkinois-logo.jpg"
                alt="Le Tonkinois"
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
              <Image
                src="/images/oschwald-logo.jpg"
                alt="Oschwald"
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
              Sie haben Fragen zu unseren Produkten?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-base font-light text-white/60 mb-10">
              Wir beraten Sie gerne. Finden Sie einen Fachhändler in Ihrer Nähe
              oder kontaktieren Sie uns direkt.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-greenline text-white px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:bg-greenline/90 min-h-[44px]"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/haendlersuche"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:border-white/40 min-h-[44px]"
              >
                Händlersuche
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
