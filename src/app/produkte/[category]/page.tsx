import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn, FadeIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { categories, getCategoryBySlug } from "@/lib/products";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Kategorie nicht gefunden" };
  }

  return {
    title: `${category.name} — Produkte`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <AnimateIn>
          <Link
            href="/produkte"
            className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors duration-300 hover:text-foreground min-h-[44px]"
          >
            <ArrowLeft size={14} />
            Alle Produktwelten
          </Link>
        </AnimateIn>
      </section>

      {/* Category Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
          </FadeIn>
          <AnimateIn delay={0.15}>
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Produktwelt
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-foreground">
                {category.name}
              </h1>
              <p className="text-base font-light leading-relaxed text-foreground/60">
                {category.description}
              </p>
              <p className="text-xs font-light text-muted-foreground">
                {category.products.length}{" "}
                {category.products.length === 1 ? "Produkt" : "Produkte"}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-border/50" />
      </div>

      {/* Products Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Produkte in dieser Kategorie
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.products.map((product, i) => (
            <AnimateIn key={product.slug} delay={i * 0.08}>
              <Link
                href={`/produkte/${category.slug}/${product.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-muted mb-5">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-base font-light tracking-wide text-foreground group-hover:text-greenline transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="mt-1.5 text-sm font-light text-muted-foreground line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="mt-1 shrink-0 text-foreground/20 transition-all duration-300 group-hover:text-greenline group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Back CTA */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateIn>
            <Link
              href="/produkte"
              className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:border-foreground/40 min-h-[44px]"
            >
              <ArrowLeft size={14} />
              Alle Produktwelten
            </Link>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
