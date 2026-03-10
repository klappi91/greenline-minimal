"use client";

import { useState, type FormEvent } from "react";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { MapPin, Search, Phone, Mail } from "lucide-react";

export default function HaendlersuchePage() {
  const [searched, setSearched] = useState(false);
  const [plz, setPlz] = useState("");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Händlersuche PLZ:", plz);
    setSearched(true);
  }

  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
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
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/60 mb-12 md:mb-16">
            greenline Produkte erhalten Sie bei ausgewählten Fachhändlern in
            ganz Deutschland. Geben Sie Ihre Postleitzahl ein, um einen
            Händler in Ihrer Nähe zu finden.
          </p>
        </AnimateIn>

        {/* PLZ Search */}
        <AnimateIn delay={0.3}>
          <form onSubmit={handleSearch} className="mb-12">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  placeholder="PLZ oder Ort eingeben"
                  className="w-full border border-border/50 bg-transparent pl-11 pr-4 py-3.5 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground"
                  maxLength={5}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:bg-foreground/80 min-h-[44px] shrink-0"
              >
                <Search size={14} />
                Suchen
              </button>
            </div>
          </form>
        </AnimateIn>

        {/* Search Result / Info */}
        <AnimateIn delay={0.4}>
          {searched ? (
            <div className="border border-border/50 p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-greenline/10 shrink-0 mt-0.5">
                  <MapPin size={18} className="text-greenline" />
                </div>
                <div className="space-y-3">
                  <p className="text-base font-light leading-relaxed text-foreground">
                    Für die PLZ <span className="font-medium">{plz}</span>{" "}
                    empfehlen wir Ihnen gerne persönlich einen Fachhändler.
                  </p>
                  <p className="text-sm font-light text-foreground/60">
                    Unser Vertriebsteam kennt die Fachhändler in Ihrer Region
                    und vermittelt Ihnen den passenden Ansprechpartner. Rufen
                    Sie uns an oder schreiben Sie uns eine E-Mail.
                  </p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+4944136107710"
                  className="flex items-center gap-3 p-4 border border-border/50 transition-colors duration-300 hover:border-greenline/50 hover:bg-greenline/5 group"
                >
                  <Phone
                    size={16}
                    className="text-muted-foreground group-hover:text-greenline transition-colors"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Telefon
                    </p>
                    <p className="text-sm font-light text-foreground">
                      +49 (0)441 - 36 10 77 -10
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@greenline-online.de"
                  className="flex items-center gap-3 p-4 border border-border/50 transition-colors duration-300 hover:border-greenline/50 hover:bg-greenline/5 group"
                >
                  <Mail
                    size={16}
                    className="text-muted-foreground group-hover:text-greenline transition-colors"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      E-Mail
                    </p>
                    <p className="text-sm font-light text-foreground">
                      info@greenline-online.de
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <div className="border border-border/50 p-8 md:p-12 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <MapPin size={20} className="text-greenline" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Persönliche Beratung
              </p>
              <p className="text-base font-light leading-relaxed text-foreground/70">
                Sie können auch direkt Kontakt mit uns aufnehmen — wir nennen
                Ihnen gerne einen Fachhändler in Ihrer Region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href="tel:+4944136107710"
                  className="flex items-center gap-3 p-4 border border-border/50 transition-colors duration-300 hover:border-greenline/50 hover:bg-greenline/5 group"
                >
                  <Phone
                    size={16}
                    className="text-muted-foreground group-hover:text-greenline transition-colors"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Telefon
                    </p>
                    <p className="text-sm font-light text-foreground">
                      +49 (0)441 - 36 10 77 -10
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@greenline-online.de"
                  className="flex items-center gap-3 p-4 border border-border/50 transition-colors duration-300 hover:border-greenline/50 hover:bg-greenline/5 group"
                >
                  <Mail
                    size={16}
                    className="text-muted-foreground group-hover:text-greenline transition-colors"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      E-Mail
                    </p>
                    <p className="text-sm font-light text-foreground">
                      info@greenline-online.de
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </AnimateIn>
      </section>
    </PageLayout>
  );
}
