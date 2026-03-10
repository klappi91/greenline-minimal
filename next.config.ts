import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      // Underscore → Hyphen redirects for category pages
      {
        source: "/produkte/oele_und_wachse",
        destination: "/produkte/oele-und-wachse",
        permanent: true,
      },
      {
        source: "/produkte/schutz_und_pflege",
        destination: "/produkte/schutz-und-pflege",
        permanent: true,
      },
      {
        source: "/produkte/reinigung_und_zubehoer",
        destination: "/produkte/reinigung-und-zubehoer",
        permanent: true,
      },
      // Underscore → Hyphen redirects for product pages under oele_und_wachse
      {
        source: "/produkte/oele_und_wachse/:slug",
        destination: "/produkte/oele-und-wachse/:slug",
        permanent: true,
      },
      // Underscore → Hyphen redirects for product pages under schutz_und_pflege
      {
        source: "/produkte/schutz_und_pflege/:slug",
        destination: "/produkte/schutz-und-pflege/:slug",
        permanent: true,
      },
      // Underscore → Hyphen redirects for product pages under reinigung_und_zubehoer
      {
        source: "/produkte/reinigung_und_zubehoer/:slug",
        destination: "/produkte/reinigung-und-zubehoer/:slug",
        permanent: true,
      },
      // Wandgestaltung: wohlfuehl_weiss → wohlfuehl-weiss
      {
        source: "/produkte/wandgestaltung/wohlfuehl_weiss",
        destination: "/produkte/wandgestaltung/wohlfuehl-weiss",
        permanent: true,
      },
      // AGB long URL → short URL
      {
        source: "/allgemeine-geschaeftsbedingungen",
        destination: "/agb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
