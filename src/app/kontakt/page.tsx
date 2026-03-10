"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { Send, CheckCircle } from "lucide-react";

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      telefon: formData.get("telefon"),
      betreff: formData.get("betreff"),
      nachricht: formData.get("nachricht"),
    };
    console.log("Kontaktformular abgesendet:", data);
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <AnimateIn delay={0.2}>
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Anschrift
                </p>
                <div className="text-base md:text-lg font-light leading-relaxed text-foreground/70">
                  <p className="text-foreground">
                    greenline Naturprodukte GmbH
                  </p>
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
              </div>
            </AnimateIn>
          </div>

          {/* Contact Form */}
          <AnimateIn delay={0.3}>
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Nachricht senden
              </p>

              {submitted ? (
                <div className="border border-greenline/30 bg-greenline/5 p-8 text-center space-y-4">
                  <CheckCircle
                    size={32}
                    className="text-greenline mx-auto"
                  />
                  <p className="text-lg font-light text-foreground">
                    Vielen Dank für Ihre Nachricht!
                  </p>
                  <p className="text-sm font-light text-foreground/60">
                    Wir werden uns so schnell wie möglich bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-light text-foreground/70"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-border/50 bg-transparent px-4 py-3 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-light text-foreground/70"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-border/50 bg-transparent px-4 py-3 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="telefon"
                      className="text-sm font-light text-foreground/70"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="w-full border border-border/50 bg-transparent px-4 py-3 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground"
                      placeholder="+49 ..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="betreff"
                      className="text-sm font-light text-foreground/70"
                    >
                      Betreff *
                    </label>
                    <input
                      type="text"
                      id="betreff"
                      name="betreff"
                      required
                      className="w-full border border-border/50 bg-transparent px-4 py-3 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground"
                      placeholder="Betreff Ihrer Anfrage"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="nachricht"
                      className="text-sm font-light text-foreground/70"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      required
                      rows={5}
                      className="w-full border border-border/50 bg-transparent px-4 py-3 text-sm font-light text-foreground outline-none transition-colors duration-300 focus:border-greenline placeholder:text-muted-foreground resize-y"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:bg-foreground/80 min-h-[44px]"
                  >
                    Nachricht senden
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
