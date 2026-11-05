# Black Friday sale

The Black Friday campaign replaces the retired Halloween theme. It uses charcoal, white, and gold accents, a site-wide announcement bar, three homepage carousel photographs, sale messaging, and a footer consultation link.

The campaign uses **Black Friday Sale** wording with benefit-led product headlines, short descriptions, and a consistent **GET MY FREE QUOTE** call to action. Quote links go directly to `/contact#quote`; collection links keep their existing destinations. Existing free quote, measuring, and fitting services are promoted as reassurance, not as exclusive Black Friday discounts.

No percentage discount, coupon, countdown, or start/end date has been configured. Before advertising a specific offer, confirm the discount or bundle, eligible products, any minimum order or exclusions, and the real end date. Add those details consistently to the announcement, hero copy, quote page, and terms when supplied.

## Copy and customer journey

| Banner | Headline | Supporting benefit |
| --- | --- | --- |
| Made-to-measure blinds | Refresh Your Home. Start This Black Friday. | A beautiful finish with expert measuring and fitting |
| Wooden blinds | Bring Home the Warmth. Choose Wooden Blinds. | Rich finishes and flexible light control |
| Every style | A Fresh Look. For Every Room. | Roman fabrics and roller styles tailored to each window |

The announcement, desktop/mobile header buttons, hero buttons, footer, and lower contact panel point to the quote form. During the campaign, the form appears before the address map. Its button and success message explain that the customer is requesting a quote, and quote emails use a Black Friday subject so the team can recognise campaign enquiries.

The lower contact panel explains the three steps from enquiry to fitted blinds, replacing the newsletter signup while the campaign is active. Turning off the switch restores the regular newsletter panel, consultation wording, original contact-page order, form copy, and email subject.

## Campaign switch and rollback

The single switch is in `src/config/seasonal.ts`:

```ts
export const BLACK_FRIDAY_THEME: boolean = true;
```

To end the campaign:

1. Set `BLACK_FRIDAY_THEME` to `false`.
2. Run `npm run lint` and `npm run build`.
3. Redeploy the updated build using the website's normal deployment process. For a self-hosted server, restart it with the new build.
4. Confirm the announcement bar and footer sale line are gone, all three homepage slides use the regular photographs and copy, and the primary hero/header buttons are blue again. Confirm regular consultation buttons, newsletter panel, contact-page order, and form wording are restored. Check both a narrow mobile viewport and desktop.

This restores the regular site, including `/home/home-img1.webp`, `/home/hero-bg.webp`, and `/home/home-img2.webp`. It does not re-enable Halloween. To activate Black Friday again, set the switch to `true` and rebuild/redeploy. This is a source-code switch, not an `.env` setting, and there is no automatic expiry.

## Files

- `src/config/seasonal.ts`: switch, campaign image paths, shared quote URL, and CTA label.
- `src/components/black-friday-decor.tsx`: announcement bar, sale tag icon, and decorative hero corners.
- `src/app/layout.tsx`: conditional site-wide announcement.
- `src/components/home/hero-section.tsx`: conditional photographs, sale headlines, badge, overlay, gold buttons, and decorations. Existing rotation, keyboard navigation, touch controls, focus/hover pause, and reduced-motion support are retained.
- `src/components/site-footer.tsx`: conditional sale line and consultation link.
- `src/components/site-header.tsx`: desktop and mobile quote buttons.
- `src/components/contact-section.tsx`: campaign contact copy and three-step explanation.
- `src/app/contact/page.tsx`: quote form anchor, campaign copy, and conditional section order.
- `src/components/contact-form.tsx`: campaign quote button, message prompt, success wording, and email subject.

Retired Halloween photographs remain as unused archived assets; the Halloween component and configuration have been removed. Historical image prompts are in `docs/halloween-banner-prompts.md`.

## Campaign images

Generated with the built-in imagegen tool. Source images are 1672 × 941 pixels; project assets are converted to WebP quality 95 without upscaling. The carousel retains Next.js quality 90, preloading of the first slide, and responsive image sizing. Image positions favor the windows in narrow crops. Text is rendered as HTML, not embedded in the photographs.

| Slide | Project asset | Resolution |
| --- | --- | --- |
| Made-to-measure blinds | `public/home/hero-black-friday.webp` | 1672 × 941 |
| Wooden blinds | `public/home/hero-black-friday-wooden.webp` | 1672 × 941 |
| Blinds for every style | `public/home/hero-black-friday-roman.webp` | 1672 × 941 |

## Generation prompts

### Made-to-measure blinds

Use case: ads-marketing. Asset type: homepage carousel background photo for Priceless Blinds, a Dublin window blinds company, Black Friday campaign. Create one photorealistic premium architectural interior photograph, wide landscape 16:9, high resolution. Palette: charcoal, warm neutrals, natural wood, understated brass/gold. Blinds must be the primary product and appear precisely fitted with realistic geometry and material detail. Wide composition: quiet dark charcoal wall across left 40 percent for white HTML headline overlay, windows and blinds center-right, recognizable window treatment within the right-center area for a portrait mobile crop. Rich but well-exposed light, sophisticated late-autumn Irish interior, realistic professional interior photography, no text or lettering, no logos, no watermarks, no collages, no people, no pumpkins, no bats, no cobwebs, no Halloween or Christmas decorations. Scene: contemporary living room, tall windows on right with beautifully fitted soft ivory roller blinds, charcoal sofa, small black side table, warm brass reading lamp, subtle golden evening sunlight. Clean upscale comfortable room, natural linen and oak textures.

### Wooden blinds

Use case: ads-marketing. Asset type: homepage carousel background photo for Priceless Blinds, a Dublin window blinds company, Black Friday campaign. Create one photorealistic premium architectural interior photograph, wide landscape 16:9, high resolution. Palette: charcoal, warm neutrals, natural wood, understated brass/gold. Blinds must be the primary product and appear precisely fitted with realistic geometry and material detail. Wide composition: quiet dark charcoal wall across left 40 percent for white HTML headline overlay, windows and blinds center-right, recognizable window treatment within the right-center area for a portrait mobile crop. Rich but well-exposed light, sophisticated late-autumn Irish interior, realistic professional interior photography, no text or lettering, no logos, no watermarks, no collages, no people, no pumpkins, no bats, no cobwebs, no Halloween or Christmas decorations. Scene: elegant reading corner, large right-side windows with warm oak Venetian wooden blinds and clearly defined horizontal slats, oatmeal armchair, dark wood side table, restrained brass vase, late afternoon light filtering naturally between slats. Luxurious warm wood grain, precise perspective.

### Roman blinds

Use case: ads-marketing. Asset type: homepage carousel background photo for Priceless Blinds, a Dublin window blinds company, Black Friday campaign. Create one photorealistic premium architectural interior photograph, wide landscape 16:9, high resolution. Palette: charcoal, warm neutrals, natural wood, understated brass/gold. Blinds must be the primary product and appear precisely fitted with realistic geometry and material detail. Wide composition: quiet dark charcoal wall across left 40 percent for white HTML headline overlay, windows and blinds center-right, recognizable window treatment within the right-center area for a portrait mobile crop. Rich but well-exposed light, sophisticated late-autumn Irish interior, realistic professional interior photography, no text or lettering, no logos, no watermarks, no collages, no people, no pumpkins, no bats, no cobwebs, no Halloween or Christmas decorations. Scene: refined dining and living space, right-side tall windows with warm grey linen Roman blinds with soft precise horizontal folds, dark oak console, upholstered dining chair, brass lamp, neutral ceramic vase. Soft winter daylight with warm interior lighting, richly detailed woven fabric.

