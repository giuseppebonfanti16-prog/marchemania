# Marche Mania — Tema Shopify

Tema e-commerce custom basato su **Dawn** per [Marche Mania](https://marchemania.shop), outlet di grandi firme (Nike, Adidas, Tommy Hilfiger, Max Mara, Liu Jo e altre).

## Caratteristiche

- Design bold arancione/nero/bianco ispirato al negozio fisico
- Mobile-first con animazioni scroll e countdown saldi
- Pagina prodotto ricca: urgenza, trust badges, tab informativi, recensioni, FAQ
- Pagine brand: Chi siamo, La nostra storia, Spedizioni, Garanzia, Saldi, FAQ, Contatti
- Spedizione gratuita, pagamento alla consegna, garanzia reso in evidenza

## Installazione

1. Comprimere la cartella del tema in un file `.zip`
2. In Shopify Admin → **Online Store → Themes → Add theme → Upload zip**
3. Creare le pagine con i template corrispondenti:

| Pagina | Handle | Template |
|--------|--------|----------|
| Chi siamo | `chi-siamo` | `page.chi-siamo` |
| La nostra storia | `la-nostra-storia` | `page.la-nostra-storia` |
| Spedizioni e pagamenti | `spedizioni-pagamenti` | `page.spedizioni-pagamenti` |
| Garanzia e resi | `garanzia-resi` | `page.garanzia-resi` |
| Saldi | `saldi` | `page.saldi` |
| FAQ | `faq` | `page.faq` |
| Contatti | `contatti` | `page.contatti` |

4. Configurare il menu principale con link alle pagine e alle collezioni
5. Abilitare il **pagamento alla consegna** in Settings → Payments

## Sezioni custom (prefisso MM)

- `mm-marquee` — ticker offerte scorrevole
- `mm-hero` — hero homepage
- `mm-trust-bar` — barra fiducia (spedizione, COD, garanzia)
- `mm-brand-logos` — griglia brand partner
- `mm-countdown` — countdown saldi
- `mm-brand-story` — storia del brand
- `mm-store-banner` — foto negozio fisico
- `mm-features-grid` — griglia vantaggi
- `mm-reviews` — recensioni clienti
- `mm-faq` — domande frequenti
- `mm-product-rich` — dettagli prodotto extra
- `mm-newsletter` — iscrizione newsletter
- `mm-deal-banner` — banner offerta urgente
- `mm-page-content` — hero pagine istituzionali

## Sviluppo locale

```bash
shopify theme dev --store=marchemania-shop.myshopify.com
```

## Brand

**Storia:** Marche Mania nasce nel 2018 nelle Marche come outlet di famiglia. Oggi porta online la stessa selezione di grandi firme a prezzi outlet, con la passione e l'energia del negozio fisico.

**Colori:** `#FE5D01` (arancione), `#0A0A0A` (nero), `#FFFFFF` (bianco)
