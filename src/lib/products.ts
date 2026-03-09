export interface Product {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image?: string;
  products: Product[];
}

export const categories: ProductCategory[] = [
  {
    slug: "teppichboeden",
    name: "Teppichböden",
    description:
      "Erinnern Sie sich an das Gefühl, wenn Sie – womöglich gar barfüßig – über weichen Waldboden, grüne, saftige Wiesen oder sandige Strände laufen?",
    image: "/images/rhodos_0.jpg",
    products: [
      {
        slug: "rhodos",
        name: "Rhodos",
        description:
          "Schurwollteppich ohne chemische Ausrüstung – schadstoffkontrolliert und volldeklariert.",
        image: "/images/rhodos_0.jpg",
      },
      {
        slug: "pessoa",
        name: "Pessoa",
        description:
          "Natürlicher Schurwollteppich für anspruchsvolle Wohnräume.",
        image: "/images/rhodos_0.jpg",
      },
      {
        slug: "condos",
        name: "Condos",
        description:
          "Sisalteppich – robust, natürlich und baubiologisch unbedenklich.",
        image: "/images/slider_condos_01_0.png",
      },
      {
        slug: "kettelservice",
        name: "Kettelservice",
        description:
          "Individueller Kettelservice für maßgeschneiderte Teppichlösungen.",
        image: "/images/rhodos_0.jpg",
      },
    ],
  },
  {
    slug: "korkparkett",
    name: "Korkparkett",
    description:
      "Von der Korkeichenrinde bis hin zum Korkparkett ist es ein langer Weg. Unser Korkparkett ist massiv und besteht durch und durch aus 100% Naturharz-gebundenem Korkgranulat.",
    image: "/images/Kork.jpg",
    products: [
      {
        slug: "unbehandelt",
        name: "Korkparkett Unbehandelt",
        description:
          "Massives Korkparkett aus 100% naturharzgebundenem Korkgranulat – unbehandelt für individuelle Veredelung.",
        image: "/images/Kork.jpg",
      },
    ],
  },
  {
    slug: "wandgestaltung",
    name: "Wandgestaltung",
    description:
      "Der individuellen Wandgestaltung sind keine Grenzen gesetzt. Die Wände sind naturgemäß die größten Flächen Ihrer Wohnung – gestalten Sie sie mit hochwertigen Naturprodukten.",
    image: "/images/wand.jpg",
    products: [
      {
        slug: "lehmfarbe",
        name: "Lehmfarbe",
        description:
          "Inhaltlich voll deklarierte Lehmfarbe für natürliche, behagliche Wandgestaltung.",
        image: "/images/lehmfarbe-10l-web.png",
      },
      {
        slug: "lehmstreichputz",
        name: "Lehmstreichputz fein",
        description:
          "Lehmstreichputz für lebendig-sinnliche Strukturen und wunderschöne Farben.",
        image: "/images/lehmstreichputz-web.png",
      },
      {
        slug: "natur-wandfarbe",
        name: "Natur-Wandfarbe",
        description:
          "Natürliche Wandfarbe für ein gesundes Raumklima.",
        image: "/images/natur-wandfarbe-web.png",
      },
      {
        slug: "wohlfuehl-weiss",
        name: "Wohlfühl-Weiß",
        description:
          "Wohngesunde, natürlich weiße Wandfarbe für ein Wohlfühlambiente.",
        image: "/images/natur-wandfarbe-web.png",
      },
      {
        slug: "silikatgrund",
        name: "Silikatgrundierung",
        description:
          "Mineralische Grundierung für optimale Haftung von Silikatfarben.",
        image: "/images/Silikatgrundierung-10l.png",
      },
      {
        slug: "mineralfarbe",
        name: "Mineral-Silikatfarbe",
        description:
          "Hochwertige Mineral-Silikatfarbe für langlebige, atmungsaktive Wandgestaltung.",
        image: "/images/Mineralfarbe-10l.png",
      },
    ],
  },
  {
    slug: "innendaemmung",
    name: "Innendämmung",
    description:
      "Kalte, ungedämmte Außenwände erhöhen die Heizkosten enorm und verhindern ein gemütliches Wohlempfinden. Innendämmung mit natürlichen Materialien leicht gemacht.",
    image: "/images/innendaemmung-img_2327.jpg",
    products: [
      {
        slug: "innendaemmsysteme-komplett",
        name: "Innendämmsystem Komplett",
        description:
          "Komplette Innendämmsysteme mit aufeinander abgestimmten Naturmaterialien.",
        image: "/images/innendaemmung-img_2331.jpg",
      },
      {
        slug: "interna-plus-strohfaser-daemmplatte",
        name: "Strohdämmplatte Interna Plus",
        description:
          "Innovative Strohfaser-Dämmplatte für effektive, natürliche Innendämmung.",
        image: "/images/strohfaserdaemmung-img_2338.jpg",
      },
      {
        slug: "interna-strohfaser-daemmplatte",
        name: "Holzweichfaserdämmplatte Interna",
        description:
          "Holzweichfaserdämmplatte für baubiologisch einwandfreie Innendämmung.",
        image: "/images/holzweichfaserdaemmplatte.jpg",
      },
      {
        slug: "redstone-mineralschaum-daemmplatten",
        name: "redstone Mineralschaum-Dämmplatten",
        description:
          "Mineralschaum-Dämmplatten für diffusionsoffene Innendämmung.",
        image: "/images/redstone-pura.jpg",
      },
      {
        slug: "haga-daemmputze",
        name: "HAGA-Dämmputze",
        description:
          "Schweizer Qualitäts-Dämmputze für natürliche Wärmedämmung.",
        image: "/images/haga-daemmputze.jpg",
      },
    ],
  },
  {
    slug: "trockenbau-und-altbausanierung",
    name: "Trockenbau & Altbausanierung",
    description:
      "Die Altbausanierung ist eine anspruchsvolle Aufgabe, die oft mit vielen Herausforderungen verbunden ist.",
    image: "/images/altbausanierung-dsc_2398.jpg",
    products: [
      {
        slug: "construkt-strohfaser-daemmplatte",
        name: "Construkt Strohfaser-Dämmplatte",
        description:
          "Strohfaser-Dämmplatte für Trockenbau und Altbausanierung.",
        image: "/images/strohfaserdaemmung-img_2338.jpg",
      },
      {
        slug: "haga-kalkputze-und-spezialprodukte",
        name: "HAGA Kalkputze und Spezialprodukte",
        description:
          "Schweizer Kalkputze für gesundes Raumklima und Schimmelprävention.",
        image: "/images/altbausanierung-dsc_2398.jpg",
      },
    ],
  },
  {
    slug: "putze-und-moertel",
    name: "Putze und Mörtel",
    description:
      "Putze und Mörtel zur Wandgestaltung z. B. bei der Verbesserung der Innendämmung im Zusammenhang mit den greenline Dämmsystemen zur Altbausanierung.",
    image: "/images/DSC1785-Lehm.jpg",
    products: [
      {
        slug: "lehmklebe-und-armierungsmoertel",
        name: "Lehmklebe- und Armierungsmörtel",
        description:
          "Vielseitiger Lehmklebe- und Armierungsmörtel für natürliche Putzsysteme.",
        image: "/images/lehmklebe-und-armierungsmoertel.jpg",
      },
      {
        slug: "lehm-universalputz",
        name: "Lehm-Universalputz",
        description:
          "Universell einsetzbarer Lehmputz für Innenräume.",
        image: "/images/DSC1785-Lehm.jpg",
      },
      {
        slug: "lehmoberputz-fein",
        name: "Lehmoberputz Fein",
        description:
          "Feiner Lehmoberputz für glatte, elegante Wandoberflächen.",
        image: "/images/DSC1785-Lehm.jpg",
      },
    ],
  },
  {
    slug: "oele-und-wachse",
    name: "Öle & Wachse",
    description:
      "Das Verlangen nach Individualität und Natürlichkeit in der eigenen Wohnung lässt den Wunsch entstehen, Bodenbeläge aus Holz zu verlegen und natürlich zu veredeln.",
    image: "/images/hartwachsoele01.jpg",
    products: [
      {
        slug: "hartoel",
        name: "Hartöl",
        description:
          "Natürliches Hartöl für strapazierfähige, wohngesunde Holzoberflächen.",
        image: "/images/hartoel-075l.png",
      },
      {
        slug: "color-hartoel",
        name: "Color-Hartöl",
        description:
          "Farbiges Hartöl für individuelle Holzgestaltung mit natürlichen Pigmenten.",
        image: "/images/color-hartoel-075l.png",
      },
      {
        slug: "hartwachsoel-neo",
        name: "Hartwachsöl Neo",
        description:
          "Die neue Generation: offenporig, atmungsaktiv, trittfest und dauerhaft belastbar.",
        image: "/images/hartwachsoel-neo-075l.jpg",
      },
      {
        slug: "profi-kompaktoel-360",
        name: "Profi Kompaktöl 360",
        description:
          "Professionelles Kompaktöl für höchste Beanspruchung.",
        image: "/images/profi-kompaktoel-360.png",
      },
      {
        slug: "arbeitsplattenoel",
        name: "Arbeitsplattenöl",
        description:
          "Speziell für Küchenarbeitsplatten – lebensmittelecht und wohngesund.",
        image: "/images/arbeitsplattenoel-075l.jpg",
      },
      {
        slug: "wachslasur",
        name: "Wachslasur",
        description:
          "Natürliche Wachslasur für sanfte Farbgebung und seidigen Glanz.",
        image: "/images/wachslasur-075l.png",
      },
      {
        slug: "outdoor-klarlack",
        name: "Outdoor Klarlack",
        description:
          "Wetterfester Klarlack für Holz im Außenbereich.",
        image: "/images/outdoor-klarlack-075l.png",
      },
    ],
  },
  {
    slug: "schutz-und-pflege",
    name: "Schutz & Pflege",
    description:
      "Die Lebensdauer und Qualität aller Bodenbeläge geht immer mit der Reinigung und Pflege einher.",
    image: "/images/_dsc6505_parkettpflege-slider.jpg",
    products: [
      {
        slug: "pflanzenseife",
        name: "Pflanzenseife",
        description:
          "Milde Pflanzenseife für die schonende Reinigung natürlicher Bodenbeläge.",
        image: "/images/pflanzenseife-DSC_2299_0.jpg",
      },
      {
        slug: "bodenmilch",
        name: "Bodenmilch",
        description:
          "Pflegende Bodenmilch für Glanz und Schutz natürlicher Oberflächen.",
        image: "/images/_dsc6505_parkettpflege-slider.jpg",
      },
      {
        slug: "refresher",
        name: "Refresher",
        description:
          "Auffrischt und belebt strapazierte Holzoberflächen.",
        image: "/images/_dsc6505_parkettpflege-slider.jpg",
      },
      {
        slug: "pflegeoel",
        name: "Profi Pflegeöl 380",
        description:
          "Professionelles Pflegeöl für die Langzeitpflege von Holzböden.",
        image: "/images/_dsc6505_parkettpflege-slider.jpg",
      },
    ],
  },
  {
    slug: "verlegezubehoer",
    name: "Verlegezubehör",
    description:
      "Zubehör für die fachgerechte Verlegung natürlicher Bodenbeläge.",
    image: "/images/bodenkleber_anwendung_0.jpg",
    products: [
      {
        slug: "universal-bodenkleber",
        name: "Universal-Bodenkleber",
        description:
          "Umweltfreundlicher Universal-Bodenkleber für die feste Verklebung natürlicher Bodenbeläge.",
        image: "/images/universal-bodenkleber.png",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(
  categorySlug: string,
  productSlug: string
): { category: ProductCategory; product: Product } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}
