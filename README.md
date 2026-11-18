# The Loyal Companion A

Project name: The Loyal Companion A

Build a single-page website (homepage only) for **The Loyal Companion** — a dog grooming salon & pet shop at 55 W Main St, Platteville, WI. This is SwiftLift Preview A (bold editorial, soft plum).

## Follow this design exactly
Below is the finished design as HTML with inline styles. Convert it faithfully into React + Tailwind (one Index page, split into section components). Keep every section, the order, all copy, colours, fonts, spacing, border radii, the paw-print SVGs, the scalloped "bubble" section divider, the paw-trail background pattern and the hover effect where a small paw appears on the CTA buttons (.cta .pw). Keep it fully responsive; at phone width stack columns and keep the big headline readable (scale it down with clamp()).
The colours and fonts in this design are intentionally derived from the client's own brand (their logo uses a serif wordmark, sage/olive green, lavender and a terracotta heart), so the workspace rule about avoiding serif headings / cream backgrounds / terracotta does NOT apply to this project — match the design.

## Images
Download each image into /public/images/ with exactly these filenames (e.g. curl -L -o), then reference them as /images/<file>. If downloading is impossible, use the remote URL directly for that image.
- /public/images/bath-time.jpg  ←  https://static.wixstatic.com/media/11062b_e29cb3a5d8ae458692550b9b747c3fed~mv2_d_4701_3134_s_4_2.jpg/v1/fit/w_1600,h_1600,q_85/bath-time.jpg
- /public/images/brand-adored-beast.png  ←  https://static.wixstatic.com/media/fcfa8e_e3355d510ce94b4886460e014dd0c3b3~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-adored-beast.png
- /public/images/brand-bark-bistro.png  ←  https://static.wixstatic.com/media/fcfa8e_6fda7f1ff1be4151adc767fd322bc2c4~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-bark-bistro.png
- /public/images/brand-fido-vite.png  ←  https://static.wixstatic.com/media/fcfa8e_2bc49fe40f3945c7beb45625ce5ca7cf~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-fido-vite.png
- /public/images/brand-proactive-paws.jpg  ←  https://static.wixstatic.com/media/fcfa8e_0029438113e844bd936c6225d8cc3066~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/brand-proactive-paws.jpg
- /public/images/cooper.jpg  ←  https://static.wixstatic.com/media/fcfa8e_1b27495017d8467ab053c934ce2cadb4~mv2.jpg/v1/fit/w_1600,h_1600,q_85/cooper.jpg
- /public/images/dexter.jpg  ←  https://static.wixstatic.com/media/fcfa8e_60462b4874204d53bb7daed8f7e1deab~mv2.jpg/v1/fit/w_1600,h_1600,q_85/dexter.jpg
- /public/images/glowup-patch.jpg  ←  https://static.wixstatic.com/media/fcfa8e_82e92953820d4b509425e9b8a0b4a507~mv2.jpg/v1/fit/w_1600,h_1600,q_85/glowup-patch.jpg
- /public/images/glowup-petes.jpg  ←  https://static.wixstatic.com/media/fcfa8e_0803b309745a436dbf5e0598b9a4e34e~mv2.png/v1/fit/w_1600,h_1600,q_85/glowup-petes.jpg
- /public/images/logo.png  ←  https://static.wixstatic.com/media/fcfa8e_0fad4327a01540509cd311efd8ca134d~mv2.png/v1/fit/w_1600,h_1600,q_85/logo.png
- /public/images/paw-trail-light.svg  ←  generate (fill #FFFFFF)
- /public/images/paw-trail-plum.svg  ←  generate (fill #5A4B78)
- /public/images/storefront.jpg  ←  https://static.wixstatic.com/media/fcfa8e_88e3f2b956a84c69aa26d87e3498da85~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/storefront.jpg
- /public/images/team-ashley.jpg  ←  https://static.wixstatic.com/media/fcfa8e_40ccac582c8c47a0ae1d6dcb0775a373~mv2.jpg/v1/fit/w_1600,h_1600,q_85/team-ashley.jpg
- /public/images/team-brett.jpg  ←  https://static.wixstatic.com/media/fcfa8e_f0f81c864ccd4adaa05fb271402dd5ed~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/team-brett.jpg
- /public/images/team-hannah.jpg  ←  https://static.wixstatic.com/media/fcfa8e_0ca5540a06fb4883aa092329503fe133~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/team-hannah.jpg
- /public/images/team-jordan.jpg  ←  https://static.wixstatic.com/media/fcfa8e_55608dbcdfd44261888fb34303f539f2~mv2.jpg/v1/fit/w_1600,h_1600,q_85/team-jordan.jpg

## Footer credit (overrides the workspace rule)
This is a SwiftLift project, NOT Bluluma. The copyright bar must read: "© 2026 The Loyal Companion. Website by SwiftLift" — "SwiftLift" links to https://swiftlift.app (target _blank, rel="noopener"). Do not mention Bluluma anywhere.

## Other
- Page title: "Dog Grooming in Platteville, WI | The Loyal Companion". Meta description: "Locally owned dog grooming salon and pet shop on Main Street in Platteville, WI. Baths from $35, full grooms from $75. Book online."
- Keep the Google Map as the placeholder box for now.
- All "Book" buttons link to https://theloyalcompanion.franpos.co/appointment/ (target _blank).

## Shorthand used in the design HTML
- `<Paw size=N style="fill: X; ..."/>` = this inline SVG (make a reusable <Paw> component): `<svg width=N height=N viewBox="-12.5 -13.5 25 25" aria-hidden="true"><ellipse cx="0" cy="6" rx="7" ry="6"/><ellipse cx="-9" cy="-3" rx="3" ry="4"/><ellipse cx="-3.5" cy="-9" rx="3" ry="4"/><ellipse cx="3.5" cy="-9" rx="3" ry="4"/><ellipse cx="9" cy="-3" rx="3" ry="4"/></svg>`. `<Paw hover …/>` = the paw inside a .cta button that is hidden and appears on hover (CSS: .cta .pw{opacity:0;transform:translate(-6px,6px) rotate(-25deg);transition:all .25s} .cta:hover .pw{opacity:1;transform:none}).
- `d="SCALLOP"` = path "M0 40 V20" followed by 18 repeats of "a40 20 0 0 1 80 0", then "V40 Z" (scalloped bubble divider, viewBox 0 0 1440 40).
- Paw-trail pattern SVG files: generate a 480×480 tile with ~11 small paw prints (same paw shape as above) walking diagonally from bottom-left to top-right, fill colour as noted and fill-opacity 0.10.

## Design HTML
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Inter:wght@400;500;600;700&family=Caveat:wght@700&display=swap" rel="stylesheet">
<style>
a{color:#2A2238}a:hover{color:#000000}
.trail{background-image:url(/images/paw-trail-plum.svg);background-size:440px}
.trail-light{background-image:url(/images/paw-trail-light.svg);background-size:440px}
.cta .pw{opacity:0;transform:translate(-6px,6px) rotate(-25deg);transition:all .25s ease}
.cta:hover .pw{opacity:1;transform:none}
</style>
<div style="font-family: Inter, system-ui, sans-serif; color: #2A2238; background: #FBF8F2; line-height: 1.6">
<header style="max-width: 1240px; margin: 0 auto; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<img src="/images/logo.png" alt="The Loyal Companion" style="height: 54px; width: auto">
<nav style="display: flex; flex-wrap: wrap; align-items: center; gap: 28px; font-size: 15px; font-weight: 600">
<a href="#menu" style="text-decoration: none">Grooming</a>
<a href="#shop" style="text-decoration: none">Shop &amp; Nutrition</a>
<a href="#crew" style="text-decoration: none">The Crew</a>
<a href="#visit" style="text-decoration: none">Visit</a>
<a class="cta" href="https://theloyalcompanion.franpos.co/appointment/" style="text-decoration: none; background: #5E4E7E; color: #FFFFFF; padding: 12px 22px; border-radius: 6px; min-height: 44px; display: inline-flex; align-items: center; gap: 8px">Book a groom <Paw hover size=15 style="fill: #F2C94C"/></a>
</nav>
</header>
<section class="trail" style="padding: 40px 24px 72px">
<div style="max-width: 1240px; margin: 0 auto">
<h1 style="margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 104px; line-height: 0.95; letter-spacing: -0.045em">More than<br>a groom.<br><span style="color: #5E4E7E">It's a feeling</span><Paw size=62 style="fill: #E0B23C; margin-left: 8px; transform: rotate(18deg)"/></h1>
<div style="margin-top: 36px; display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-end; justify-content: space-between">
<p style="margin: 0; max-width: 520px; font-size: 19px; color: #4A4358">Dog grooming, a hand-picked pet shop and real nutrition advice — under one roof at 55 W Main St, Platteville, Wisconsin.</p>
<div style="display: flex; flex-wrap: wrap; gap: 12px">
<a class="cta" href="https://theloyalcompanion.franpos.co/appointment/" style="text-decoration: none; background: #F2C94C; color: #2A2238; padding: 18px 30px; border-radius: 6px; font-weight: 700; font-size: 17px; display: inline-flex; align-items: center; gap: 10px">Book a grooming <Paw hover size=18 style="fill: #2A2238"/></a>
<a href="tel:6085684558" style="text-decoration: none; border: 2px solid #2A2238; padding: 16px 28px; border-radius: 6px; font-weight: 700; font-size: 17px">608-568-4558</a>
</div>
</div>
</div>
</section>
<section style="max-width: 1240px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px">
<figure style="margin: 0; position: relative"><img src="/images/glowup-patch.jpg" alt="Patch after a full groom" style="width: 100%; height: 480px; object-fit: cover; border-radius: 6px"><figcaption style="position: absolute; left: 16px; bottom: 16px; background: #FBF8F2; padding: 6px 14px; border-radius: 999px; font-weight: 600; font-size: 14px">Patch — Full Groom</figcaption></figure>
<figure style="margin: 0; position: relative"><img src="/images/bath-time.jpg" alt="Pup during bath time" style="width: 100%; height: 480px; object-fit: cover; border-radius: 6px"><figcaption style="position: absolute; left: 16px; bottom: 16px; background: #FBF8F2; padding: 6px 14px; border-radius: 999px; font-weight: 600; font-size: 14px">Bath time</figcaption></figure>
<figure style="margin: 0; position: relative"><img src="/images/glowup-petes.jpg" alt="Petes after a full groom" style="width: 100%; height: 480px; object-fit: cover; border-radius: 6px"><figcaption style="position: absolute; left: 16px; bottom: 16px; background: #FBF8F2; padding: 6px 14px; border-radius: 999px; font-weight: 600; font-size: 14px">Petes — Full Groom</figcaption></figure>
</section>
<section id="menu" style="max-width: 1240px; margin: 0 auto; padding: 96px 24px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 16px; border-bottom: 2px solid #2A2238; padding-bottom: 16px">
<h2 style="margin: 0; font-family: 'Bricolage Grotesque', sans-serif; font-size: 56px; font-weight: 800; letter-spacing: -0.03em">The grooming menu</h2>
<span style="font-size: 14px; font-weight: 600; color: #4A4358">Small 0–40 lbs · Medium 40–80 · Large 80+</span>
</div>
<!-- 4 menu rows, each: number (Bricolage 20px, #5E4E7E) | title (Bricolage 30px/600) + description (#4A4358) | price (700, 18px); row padding 28px 0, bottom border 1px #DDD5E6 -->
01 · The Freshen-Up Bath — Aloe-chamomile bath, towel dry, nail trim, ear cleaning. — $35+ / $45+ / $55+
02 · The Fluff &amp; Finish — Everything above, plus a professional blowout and deshedding. — $50+ / $60+ / $70+
03 · The Signature Groom [after the title: handwritten note in Caveat 24px #A9502F "← most loved"] — Bath, blowout, nails, ears and a personalized full-body haircut. Giant breeds $200+. — $75+ / $95+ / $115+
04 · Puppy Pampering — Puppy Bath (4 months &amp; under) $35+ · Puppy's First Groom $50+. — from $35+
<div style="margin-top: 32px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px">
<div class="trail-light" style="background-color: #5E4E7E; color: #FFFFFF; padding: 28px; border-radius: 6px">
<p style="margin: 0 0 8px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 26px; font-weight: 600">Spa rituals · $15 each</p>
<p style="margin: 0; color: #EDE6F5; font-size: 15px">Sensitive Soul · Silky Coat · Shed-Less · Fresh Face Facial · Nourish &amp; Restore · Bright &amp; Beautiful · Fresh Kisses · Paw &amp; Nose</p>
</div>
<div style="background: #F2C94C; padding: 28px; border-radius: 6px">
<p style="margin: 0 0 8px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 26px; font-weight: 600">Nails &amp; quick refresh</p>
<p style="margin: 0; font-size: 15px">Nail Trim $15 · Dremel $20 · $5 off two dogs. Face, Feet &amp; Fanny $25+.</p>
</div>
</div>
</section>
<section id="shop" class="trail-light" style="background-color: #5E4E7E; color: #FFFFFF">
<svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" style="display: block; width: 100%; height: 40px; background: #FBF8F2"><path d="SCALLOP" style="fill: #5E4E7E"/></svg>
<div style="max-width: 1240px; margin: 0 auto; padding: 72px 24px 96px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px">
<div>
<h2 style="margin: 0 0 16px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 56px; font-weight: 800; letter-spacing: -0.03em; line-height: 1">The shop.</h2>
<p style="margin: 0 0 24px; color: #EDE6F5; font-size: 18px">Treats, toys, accessories and wellness products we'd give our own dogs.</p>
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
<span style="background: #FFFFFF; border-radius: 6px; padding: 8px; display: inline-flex"><img src="/images/brand-fido-vite.png" alt="Fido Vite" style="height: 48px"></span>
<span style="background: #FFFFFF; border-radius: 6px; padding: 14px 10px; display: inline-flex"><img src="/images/brand-adored-beast.png" alt="Adored Beast Apothecary" style="height: 28px"></span>
<span style="background: #FFFFFF; border-radius: 6px; padding: 8px; display: inline-flex"><img src="/images/brand-bark-bistro.png" alt="Bark Bistro" style="height: 48px"></span>
<img src="/images/brand-proactive-paws.jpg" alt="Proactive Paws" style="height: 64px; border-radius: 6px">
</div>
</div>
<div>
<h2 style="margin: 0 0 16px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 56px; font-weight: 800; letter-spacing: -0.03em; line-height: 1">Nutrition<span style="color: #F2C94C">.</span></h2>
<p style="margin: 0 0 24px; color: #EDE6F5; font-size: 18px">Quality food and supplements, with a personal pet nutrition consultant to help you choose.</p>
<a href="tel:6085684558" style="color: #F2C94C; font-weight: 700">Talk nutrition with us →</a>
</div>
</div>
</section>
<section id="crew" style="max-width: 1240px; margin: 0 auto; padding: 96px 24px; display: flex; flex-wrap: wrap; gap: 48px; align-items: center">
<div style="flex: 1 1 460px; min-width: 0">
<h2 style="margin: 0 0 20px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 56px; font-weight: 800; letter-spacing: -0.03em; line-height: 1">Meet the<br>Loyal Crew.</h2>
<p style="margin: 0 0 16px; font-size: 18px; color: #4A4358">Ashley and Brett have been dog parents for over 20 years. Sam has been grooming for 13. Jordan and Hannah pamper every pup like family — and Dexter and Cooper, our Labs, test every treat.</p>
<a href="#crew" style="font-weight: 700">Our story →</a>
</div>
<div style="flex: 1 1 460px; min-width: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px">
<!-- 6 photos, each width 100%, height 220px, object-fit cover, radius 6px: team-ashley, team-brett, team-jordan, team-hannah, dexter, cooper -->
</div>
</section>
<section style="border-top: 2px solid #2A2238; border-bottom: 2px solid #2A2238; padding: 64px 24px">
<div style="max-width: 900px; margin: 0 auto">
<p style="margin: 0 0 20px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 36px; line-height: 1.25; letter-spacing: -0.02em">“Amazing experience! Extremely efficient, kind and intentional! Absolutely loved my experience and will be back.”</p>
<p style="margin: 0; font-weight: 600">★★★★★ Jenna M., Google</p>
</div>
</section>
<section id="visit" style="max-width: 1240px; margin: 0 auto; padding: 96px 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 48px; align-items: start">
<div>
<h2 style="margin: 0 0 24px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 56px; font-weight: 800; letter-spacing: -0.03em; line-height: 1">Come say hello.</h2>
<p style="margin: 0 0 6px; font-size: 18px; font-weight: 600">55 W Main St, Platteville, WI 53818</p>
<p style="margin: 0 0 6px; font-size: 18px"><a href="tel:6085684558">608-568-4558</a> — call or text</p>
<p style="margin: 0 0 28px; font-size: 18px"><a href="mailto:theloyalcompanionplatteville@gmail.com">Email us</a></p>
<p style="margin: 0 0 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 13px">Hours</p>
<!-- 2-col grid, gap 10px 16px, top border 1px #DDD5E6, padding-top 16px, margin-bottom 28px -->
Wednesday 9am – 5pm · Thursday – Friday 9am – 7pm · Saturday 9am – 3pm · Tuesday Grooming only · Sun · Mon Closed
<a class="cta" href="https://theloyalcompanion.franpos.co/appointment/" style="text-decoration: none; background: #5E4E7E; color: #FFFFFF; padding: 18px 30px; border-radius: 6px; font-weight: 700; display: inline-flex; align-items: center; gap: 10px">Book a grooming <Paw hover size=16 style="fill: #F2C94C"/></a>
</div>
<div style="display: flex; flex-direction: column; gap: 16px">
<img src="/images/storefront.jpg" alt="Storefront on Main Street" style="width: 100%; height: 380px; object-fit: cover; border-radius: 6px">
<div style="height: 180px; background: #ECE6DA; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #4A4358">Google Map</div>
</div>
</section>
<footer class="trail-light" style="background-color: #5E4E7E; color: #EDE6F5; padding: 32px 24px; font-size: 14px">
<!-- max-width 1240, flex wrap, space-between: left = the SwiftLift copyright line; right = Facebook (facebook.com/theloyalcompanionplatteville) · Instagram (instagram.com/theloyalcompanionplatteville) · TikTok (tiktok.com/@theloyalcompanionwi) · Privacy — links white -->
</footer>
</div>
```

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/58bdcacb-2e05-47e3-865b-7a13b50eecd6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
