import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn, FadeIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";
import { categories, getProductBySlug } from "@/lib/products";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { category: string; product: string }[] = [];
  for (const category of categories) {
    for (const product of category.products) {
      params.push({
        category: category.slug,
        product: product.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, product: productSlug } = await params;
  const result = getProductBySlug(categorySlug, productSlug);

  if (!result) {
    return { title: "Produkt nicht gefunden" };
  }

  return {
    title: `${result.product.name} — ${result.category.name} | greenline`,
    description: result.product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const result = getProductBySlug(categorySlug, productSlug);

  if (!result) {
    notFound();
  }

  const { category, product } = result;

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <AnimateIn>
          <nav className="flex items-center gap-2 text-sm font-light text-muted-foreground">
            <Link
              href="/produkte"
              className="transition-colors duration-300 hover:text-foreground min-h-[44px] inline-flex items-center"
            >
              Produkte
            </Link>
            <span>/</span>
            <Link
              href={`/produkte/${category.slug}`}
              className="transition-colors duration-300 hover:text-foreground min-h-[44px] inline-flex items-center"
            >
              {category.name}
            </Link>
          </nav>
        </AnimateIn>
      </section>

      {/* Product Detail */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image */}
          <FadeIn>
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-muted sticky top-[85px]">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
          </FadeIn>

          {/* Content */}
          <div className="space-y-8 md:pt-4">
            <AnimateIn delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {category.name}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-foreground">
                {product.name}
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="border-t border-border/50 pt-8">
                <p className="text-base md:text-lg font-light leading-relaxed text-foreground/60">
                  {product.description}
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="border-t border-border/50 pt-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Interesse an diesem Produkt?
                </p>
                <p className="text-sm font-light text-foreground/60 mb-6 leading-relaxed">
                  greenline Produkte erhalten Sie bei ausgewählten Fachhändlern.
                  Finden Sie einen Händler in Ihrer Nähe.
                </p>
                <Link
                  href="/haendlersuche"
                  className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-3.5 text-sm font-light tracking-wide transition-all duration-300 hover:bg-foreground/80 min-h-[44px]"
                >
                  Händler finden
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <div className="pt-4">
                <Link
                  href={`/produkte/${category.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors duration-300 hover:text-foreground group min-h-[44px]"
                >
                  <ArrowLeft
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Zurück zu {category.name}
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
