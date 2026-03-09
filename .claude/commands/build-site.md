# Website bauen — Variante Minimal

Baue eine komplette Website fuer das Unternehmen.
Stil: Elegant, reduziert, premium. Weniger ist mehr.

## Daten
- Content, Bilder, Brand: `../scraped-data/`
- Design-Richtung: `./specs/design.md`
- Analyse: `../scraped-data/analysis.md`

Lies zuerst alle Datenquellen bevor du anfaengst.

## Vorgaben
- Texte und Seitenstruktur 1:1 aus scraped-data uebernehmen
- Bilder uebernehmen, Hero-Bild neu generieren (Gemini-Skill)
- Unternehmensfarben aus brand/colors.json
- Logo einbinden aus brand/
- Impressum und Datenschutz 1:1 uebernehmen
- Mobile-first: Alle Komponenten zuerst fuer 390px bauen, dann Desktop
- Hamburger-Menu fuer Mobile Navigation
- Touch-Targets mindestens 44x44px
- Bilder responsive mit sizes und srcSet
- Keine horizontalen Scrollbalken auf Mobile

## Stack
Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui

## Skills nutzen
- frontend-design Plugin fuer Design-Qualitaet
- motion-framer fuer elegante Micro-Interactions
- ui-styling fuer shadcn Komponenten (radikal vereinfacht)
- web-design-guidelines fuer Accessibility und UX
- gemini-image fuer Hero-Bild Generierung

## Design-Regeln
- Extrem viel Weissraum
- Einspaltig wo moeglich
- Grosse Bilder, wenig drum herum
- Typografie IST das Design
- Elegante Serif oder moderne Sans-Serif
- Headlines eher leicht (Light/Regular) statt Bold
- Fast monochrom: Schwarz/Weiss als Basis
- Primaerfarbe NUR als einzelner Akzent (ein Button, ein Link)
- Framer Motion mit langen Durationen (0.6-1s), ease-out
- Ghost-Buttons, feine Linien statt Flaechen
- KEIN Parallax, KEIN ScrollTrigger, KEIN GSAP
- KEINE Karusselle, KEINE Slider

## Am Ende
1. `npm run build` muss durchlaufen
2. `git add -A && git commit -m "Build complete"`

Nutze Agent-Teams fuer parallele Arbeit. Entscheide selbst
welche Agents du brauchst und in welcher Reihenfolge.
