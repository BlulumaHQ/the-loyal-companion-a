import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Paw, BOOK } from "./Paw";
import { REVIEWS, MAP_EMBED } from "@/content/site";
const B = "font-display";
const h2 = "m-0 font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(38px,7vw,56px)]";
const SCALLOP = "M0 40 V20" + " a40 20 0 0 1 80 0".repeat(18) + " V40 Z";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <Link to="/grooming" className="no-underline" activeProps={{ className: "text-plum" }} onClick={() => setOpen(false)}>Grooming</Link>
      <a href="/#shop" className="no-underline" onClick={() => setOpen(false)}>Shop &amp; Nutrition</a>
      <Link to="/about" className="no-underline" activeProps={{ className: "text-plum" }} onClick={() => setOpen(false)}>The Crew</Link>
      <Link to="/contact" className="no-underline" activeProps={{ className: "text-plum" }} onClick={() => setOpen(false)}>Visit</Link>
    </>
  );
  return (
    <header className="relative z-30 bg-paper">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 py-2.5 md:px-6 md:py-3">
        <Link to="/" className="shrink-0"><img src="/images/logo.png" alt="The Loyal Companion" className="h-[60px] w-auto md:h-[112px]" /></Link>
        <nav className="hidden items-center gap-x-7 text-[15px] font-semibold md:flex">
          {links}
          <a className="cta btn-plum no-underline inline-flex min-h-11 items-center gap-2 rounded-md px-[22px] py-3" href={BOOK} target="_blank" rel="noopener">Book a groom <Paw hover size={15} style={{ fill: "var(--sun)" }} /></a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a className="cta btn-plum no-underline inline-flex h-11 items-center gap-1.5 rounded-md px-4 text-[14px] font-bold" href={BOOK} target="_blank" rel="noopener">Book <Paw size={13} style={{ fill: "var(--sun)" }} /></a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-md border border-ink/15">
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-y border-ink/10 bg-paper px-6 py-4 text-[17px] font-semibold shadow-lg md:hidden [&>*]:py-2.5">
          {links}
          <a href="tel:6085684558" className="no-underline text-plum">Call or text 608-568-4558</a>
        </nav>
      )}
    </header>
  );
}

const SLIDES = [
  ["/images/hero-1.jpg", "Golden retriever relaxing during a gentle bath", "center 40%"],
  ["/images/hero-2.jpg", "Fluffy pup during bath time", "center 35%"],
  ["/images/hero-3.jpg", "Doodle getting a professional blowout", "center 30%"],
  ["/images/hero-4.jpg", "Yorkie getting a personalized trim", "center 35%"],
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [paused, i]);
  return (
    <section className="relative isolate w-full overflow-hidden bg-plum md:h-[clamp(560px,82vh,780px)] md:bg-ink" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Our happy pups">
      <div className="relative h-[54vh] min-h-[320px] max-h-[520px] md:absolute md:inset-0 md:h-full md:max-h-none">
        {SLIDES.map(([src, alt, pos], n) => (
          <img key={src} src={src} alt={alt} loading={n ? "lazy" : "eager"} aria-hidden={n !== i}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${n === i ? "opacity-100" : "opacity-0"}`} style={{ objectPosition: pos }} />
        ))}
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(30,22,44,0.82)_0%,rgba(30,22,44,0.55)_45%,rgba(30,22,44,0.05)_80%)] md:block" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent md:hidden" />
        <div className="absolute bottom-4 left-5 z-10 flex items-center gap-2 md:left-auto md:bottom-10 md:right-[max(24px,calc((100vw-1240px)/2+24px))]" role="tablist" aria-label="Choose photo">
          {SLIDES.map((_, n) => (
            <button key={n} type="button" role="tab" onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`} aria-selected={n === i} className="group py-3">
              <span className={`block h-[3px] rounded-full transition-all duration-500 ${n === i ? "w-10 bg-white" : "w-5 bg-white/45 group-hover:bg-white/80"}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[1240px] flex-col px-6 pt-9 pb-12 text-white md:h-full md:justify-end md:pb-20 md:pt-0">
        <h1 className={`m-0 ${B} max-w-[820px] font-extrabold leading-[0.95] tracking-[-0.045em] text-[clamp(42px,9vw,96px)]`}>
          More than<br />a groom.<br /><span className="text-sun">It's a feeling</span>
          <Paw size={62} style={{ fill: "var(--sun)", marginLeft: 8, transform: "rotate(18deg)", width: "0.6em", height: "0.6em" }} />
        </h1>
        <p className="m-0 mt-5 max-w-[540px] text-[17px] text-white/90 md:mt-6 md:text-[19px]">Dog grooming, a hand-picked pet shop and real nutrition advice — under one roof at 55 W Main St, Platteville, Wisconsin.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
          <a className="cta btn-sun no-underline inline-flex items-center gap-2.5 rounded-md px-[26px] py-4 text-[16px] font-bold md:px-[30px] md:py-[18px] md:text-[17px]" href={BOOK} target="_blank" rel="noopener">Book a grooming <Paw hover size={18} style={{ fill: "var(--ink)" }} /></a>
          <a href="tel:6085684558" className="no-underline rounded-md border-2 border-white px-6 py-[14px] text-[16px] font-bold !text-white md:px-7 md:py-4 md:text-[17px]">608-568-4558</a>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [["glowup-patch.jpg", "Patch after a full groom", "Patch — Full Groom"], ["bath-time.jpg", "Pup during bath time", "Bath time"], ["glowup-petes.jpg", "Petes after a full groom", "Petes — Full Groom"]];
  return (
    <section className="mx-auto grid max-w-[1240px] gap-4 px-6 pt-20 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
      {items.map(([s, a, c]) => (
        <figure key={s} className="relative m-0">
          <img src={`/images/${s}`} alt={a} className="h-[480px] w-full rounded-md object-cover" />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper px-3.5 py-1.5 text-sm font-semibold">{c}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export function Menu() {
  const rows = [
    ["01", "The Freshen-Up Bath", "Aloe-chamomile bath, towel dry, nail trim, ear cleaning.", "$35+ / $45+ / $55+"],
    ["02", "The Fluff & Finish", "Everything above, plus a professional blowout and deshedding.", "$50+ / $60+ / $70+"],
    ["03", "The Signature Groom", "Bath, blowout, nails, ears and a personalized full-body haircut. Giant breeds $200+.", "$75+ / $95+ / $115+"],
    ["04", "Puppy Pampering", "Puppy Bath (4 months & under) $35+ · Puppy's First Groom $50+.", "from $35+"],
  ];
  return (
    <section id="menu" className="mx-auto max-w-[1240px] px-6 py-24">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-ink pb-4">
        <h2 className={h2}>The grooming menu</h2>
        <span className="text-sm font-semibold text-ink-soft">Small 0–40 lbs · Medium 40–80 · Large 80+</span>
      </div>
      {rows.map(([n, t, d, p]) => (
        <div key={n} className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-line py-7 md:grid-cols-[60px_1fr_auto]">
          <span className={`${B} text-xl text-plum`}>{n}</span>
          <div>
            <h3 className={`m-0 ${B} text-[30px] font-semibold leading-tight`}>{t}{n === "03" && <span className="ml-3 font-hand text-2xl text-rust">← most loved</span>}</h3>
            <p className="m-0 mt-1 text-ink-soft">{d}</p>
          </div>
          <span className="col-start-2 text-lg font-bold md:col-start-3">{p}</span>
        </div>
      ))}
      <Link to="/grooming" className="mt-6 inline-block font-bold text-plum">See the full pampering menu, sizes &amp; spa rituals →</Link>
      <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        <div className="rounded-md bg-plum p-7 text-white">
          <p className={`m-0 mb-2 ${B} text-[26px] font-semibold`}>Spa rituals · $15 each</p>
          <p className="m-0 text-[15px] text-lilac">Sensitive Soul · Silky Coat · Shed-Less · Fresh Face Facial · Nourish &amp; Restore · Bright &amp; Beautiful · Fresh Kisses · Paw &amp; Nose</p>
        </div>
        <div className="rounded-md bg-sun p-7">
          <p className={`m-0 mb-2 ${B} text-[26px] font-semibold`}>Nails &amp; quick refresh</p>
          <p className="m-0 text-[15px]">Nail Trim $15 · Dremel $20 · $5 off two dogs. Face, Feet &amp; Fanny $25+.</p>
        </div>
      </div>
    </section>
  );
}

export function Shop() {
  return (
    <section id="shop" className="bg-plum text-white">
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" className="block h-10 w-full bg-paper"><path d={SCALLOP} style={{ fill: "var(--plum)" }} /></svg>
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 pt-[72px] pb-24 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <div>
          <h2 className={`${h2} mb-4`}>The shop.</h2>
          <p className="m-0 mb-6 text-lg text-lilac">Treats, toys, accessories and wellness products we'd give our own dogs.</p>
          <div className="grid max-w-[460px] grid-cols-2 gap-3">
            {[["brand-fido-vite.png", "Fido Vite", "h-[76px]"], ["brand-adored-beast.png", "Adored Beast Apothecary", "h-[42px]"], ["brand-bark-bistro.png", "Bark Bistro", "h-[92px]"], ["brand-proactive-paws.jpg", "Proactive Paws", "h-[96px] rounded"]].map(([f, a, h]) => (
              <span key={f} className="flex h-[136px] items-center justify-center rounded-md bg-white px-4"><img src={`/images/${f}`} alt={a} className={`${h} w-auto max-w-full object-contain`} /></span>
            ))}
          </div>
        </div>
        <div>
          <h2 className={`${h2} mb-4`}>Nutrition<span className="text-sun">.</span></h2>
          <p className="m-0 mb-6 text-lg text-lilac">Quality food and supplements, with a personal pet nutrition consultant to help you choose.</p>
          <a href="tel:6085684558" className="font-bold !text-sun">Talk nutrition with us →</a>
        </div>
      </div>
    </section>
  );
}

export function Crew() {
  const pics = [["team-ashley", "Ashley"], ["team-brett", "Brett"], ["team-jordan", "Jordan"], ["team-hannah", "Hannah"], ["dexter", "Dexter the Lab"], ["cooper", "Cooper the Lab"]];
  return (
    <section id="crew" className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-6 py-24">
      <div className="min-w-0 flex-[1_1_460px]">
        <h2 className={`${h2} mb-5`}>Meet the<br />Loyal Crew.</h2>
        <p className="m-0 mb-4 text-lg text-ink-soft">Ashley and Brett have been dog parents for over 20 years. Sam has been grooming for 13. Jordan and Hannah pamper every pup like family — and Dexter and Cooper, our Labs, test every treat.</p>
        <Link to="/about" className="font-bold">Meet everyone &amp; read our story →</Link>
      </div>
      <div className="grid min-w-0 flex-[1_1_460px] grid-cols-3 gap-3">
        {pics.map(([s, a]) => <img key={s} src={`/images/${s}.jpg`} alt={a} className="h-[220px] w-full rounded-md object-cover" />)}
      </div>
    </section>
  );
}

export function Review() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, [i]);
  const go = (d: number) => setI((n) => (n + d + REVIEWS.length) % REVIEWS.length);
  return (
    <section className="relative overflow-hidden border-y-2 border-ink px-6 py-20" aria-roledescription="carousel" aria-label="Google reviews">
      <div className="relative mx-auto flex max-w-[1000px] items-center gap-4 md:gap-8">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper text-2xl sm:grid">‹</button>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {REVIEWS.map((r, n) => (
              <figure key={r.name} className="m-0 w-full shrink-0 px-1" aria-hidden={n !== i}>
                <div className="mb-5 flex gap-1.5" role="img" aria-label="5 out of 5">
                  {[0, 1, 2, 3, 4].map((k) => <Paw key={k} size={26} style={{ fill: "var(--gold)" }} />)}
                </div>
                <blockquote className={`m-0 ${B} text-[clamp(22px,3.4vw,34px)] leading-[1.25] tracking-[-0.02em]`}>“{r.text}”</blockquote>
                <figcaption className="mt-5 font-semibold">{r.name} · Google Review</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex gap-2">
            {REVIEWS.map((r, n) => (
              <button key={r.name} type="button" onClick={() => setI(n)} aria-label={`Show review ${n + 1}`} aria-current={n === i}
                className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-plum" : "w-2.5 bg-ink/25"}`} />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper text-2xl sm:grid">›</button>
      </div>
    </section>
  );
}

export function Visit() {
  const hours = [["Wednesday", "9am – 5pm"], ["Thursday – Friday", "9am – 7pm"], ["Saturday", "9am – 3pm"], ["Tuesday", "Grooming only"], ["Sun · Mon", "Closed"]];
  return (
    <section id="visit" className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
      <div>
        <h2 className={`${h2} mb-6`}>Come say hello.</h2>
        <p className="m-0 mb-1.5 text-lg font-semibold">55 W Main St, Platteville, WI 53818</p>
        <p className="m-0 mb-1.5 text-lg"><a href="tel:6085684558">608-568-4558</a> — call or text</p>
        <p className="m-0 mb-7 text-lg"><a href="mailto:theloyalcompanionplatteville@gmail.com">Email us</a></p>
        <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.08em]">Hours</p>
        <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-4">
          {hours.map(([d, h]) => [<span key={d}>{d}</span>, <span key={d + "h"}>{h}</span>])}
        </div>
        <a className="cta btn-plum no-underline inline-flex items-center gap-2.5 rounded-md px-[30px] py-[18px] font-bold" href={BOOK} target="_blank" rel="noopener">Book a grooming <Paw hover size={16} style={{ fill: "var(--sun)" }} /></a>
      </div>
      <div className="flex flex-col gap-4">
        <img src="/images/storefront.jpg" alt="Storefront on Main Street" className="h-[380px] w-full rounded-md object-cover" />
        <iframe title="Map to The Loyal Companion, 55 W Main St, Platteville" src={MAP_EMBED} loading="lazy" className="h-[220px] w-full rounded-md border-0" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-plum px-6 py-8 text-sm text-lilac">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-4 text-center md:flex-row md:flex-wrap md:justify-between md:text-left [&_a]:!text-white">
        <img src="/images/lavender-badge.png" alt="Dogs · People · Community · Belonging" className="h-[104px] w-[104px] rounded-full bg-paper p-1" />
        <p className="m-0">© 2026 The Loyal Companion. Website by <a href="https://swiftlift.app" target="_blank" rel="noopener">SwiftLift</a></p>
        <p className="m-0 flex flex-wrap justify-center gap-x-2">
          <a href="https://facebook.com/theloyalcompanionplatteville" target="_blank" rel="noopener">Facebook</a> ·
          <a href="https://instagram.com/theloyalcompanionplatteville" target="_blank" rel="noopener">Instagram</a> ·
          <a href="https://tiktok.com/@theloyalcompanionwi" target="_blank" rel="noopener">TikTok</a> ·
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </footer>
  );
}
