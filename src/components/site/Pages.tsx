import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import type { Member } from "@/content/site";
import { Paw, BOOK } from "./Paw";
import { Header, Footer } from "./Sections";
import {
  GROOMING_INTRO, EXPERIENCE, PRICES, UPGRADES, UPGRADES_INTRO, UPGRADES_SUB, UPGRADES_HELP, GLOWUPS,
  POLICY, ABOUT_SERVICES, ABOUT_INTRO, CREW, CONTACT_INTRO, HOURS, ADDRESS, PHONE, PHONE_HREF, EMAIL, MAP_EMBED, SOCIAL,
} from "@/content/site";

const D = "font-display";
const h2 = "m-0 font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(34px,6vw,52px)]";
const SCALLOP = "M0 40 V20" + " a40 20 0 0 1 80 0".repeat(18) + " V40 Z";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper font-sans leading-[1.6] text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function PageHero({ kicker, title, accent, intro }: { kicker: string; title: string; accent?: string; intro?: string }) {
  return (
    <section className="px-6 pt-10 pb-16">
      <div className="mx-auto max-w-[1240px]">
        <p className="m-0 mb-3 font-hand text-[28px] text-plum">{kicker}</p>
        <h1 className={`m-0 ${D} font-extrabold leading-[0.95] tracking-[-0.045em] text-[clamp(46px,9vw,88px)]`}>
          {title}
          {accent && <><br /><span className="text-plum">{accent}</span></>}
          <Paw size={48} style={{ fill: "var(--gold)", marginLeft: 8, transform: "rotate(18deg)", width: "0.55em", height: "0.55em" }} />
        </h1>
        {intro && <p className="m-0 mt-7 max-w-[640px] text-[19px] text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}

function BookBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-plum text-white">
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" className="block h-10 w-full bg-paper"><path d={SCALLOP} style={{ fill: "var(--plum)" }} /></svg>
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-6 pt-12 pb-16">
        <div>
          <h2 className={h2}>{title}</h2>
          <p className="m-0 mt-3 text-lg text-lilac">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="cta btn-sun no-underline inline-flex items-center gap-2.5 rounded-md px-[30px] py-[18px] text-[17px] font-bold" href={BOOK} target="_blank" rel="noopener">Book a grooming <Paw hover size={18} style={{ fill: "var(--ink)" }} /></a>
          <a href={PHONE_HREF} className="no-underline rounded-md border-2 border-white px-7 py-4 text-[17px] font-bold !text-white">{PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Grooming ---------------- */
export function GroomingPage() {
  return (
    <PageShell>
      <PageHero kicker="Grooming" title="More Than a Groom." accent="It's a Feeling." intro={GROOMING_INTRO} />

      <section className="mx-auto max-w-[1240px] px-6 pb-20">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-ink pb-4">
          <h2 className={h2}>The grooming experience</h2>
          <a className="cta btn-plum no-underline inline-flex items-center gap-2 rounded-md px-[22px] py-3 font-semibold" href={BOOK} target="_blank" rel="noopener">Book Your Grooming Appointment <Paw hover size={15} style={{ fill: "var(--sun)" }} /></a>
        </div>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
          {EXPERIENCE.map((e) => (
            <article key={e.name} className="overflow-hidden rounded-md border border-line bg-white">
              <img src={e.img} alt={e.name} className="h-[230px] w-full object-cover" />
              <div className="p-6">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-plum">{e.tier}</p>
                <h3 className={`m-0 mt-1 ${D} text-[28px] font-semibold leading-tight`}>{e.name}</h3>
                <p className="m-0 font-semibold text-ink-soft">{e.sub}</p>
                <p className="m-0 mt-3 text-[15px] text-ink-soft">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="border-t-2 border-ink px-6 py-20">
        <div className="mx-auto max-w-[1240px]">
          <h2 className={h2}>The Loyal Companion Pampering Menu</h2>
          <p className="m-0 mt-3 font-hand text-[26px] text-rust">Thoughtful touches. A little extra luxury. A whole lot of love.</p>
          <p className="m-0 mt-2 max-w-[680px] text-ink-soft">Every loyal companion deserves a little TLC! Explore our grooming services, thoughtfully tailored to your pup's size, coat, and individual needs.</p>
          <div className="mt-10 grid gap-x-12 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
            {PRICES.map((g, i) => (
              <div key={g.title}>
                <div className="flex items-baseline gap-3 border-b-2 border-ink pb-2">
                  <span className={`${D} text-xl text-plum`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={`m-0 ${D} text-[26px] font-semibold leading-tight`}>{g.title}</h3>
                </div>
                {g.sub && <p className="m-0 mt-2 font-semibold text-ink-soft">{g.sub}</p>}
                {g.desc && <p className="m-0 mt-2 text-[15px] text-ink-soft">{g.desc}</p>}
                <dl className="m-0 mt-3">
                  {g.rows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 border-b border-line py-2.5">
                      <dt className="flex items-baseline gap-2"><Paw size={12} style={{ fill: "var(--plum)", flex: "none" }} />{k}</dt>
                      <dd className="m-0 whitespace-nowrap text-lg font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
                {g.notes?.map((n) => <p key={n} className="m-0 mt-2 text-sm text-ink-soft">{n}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="upgrades" className="bg-plum text-white">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" className="block h-10 w-full bg-paper"><path d={SCALLOP} style={{ fill: "var(--plum)" }} /></svg>
        <div className="mx-auto max-w-[1240px] px-6 pt-14 pb-20">
          <p className="m-0 max-w-[720px] text-lg text-lilac">{UPGRADES_INTRO}</p>
          <h2 className={`${h2} mt-8`}>Specialty Upgrades <span className="text-sun">· $15 each</span></h2>
          <p className="m-0 mt-3 max-w-[720px] text-lilac">{UPGRADES_SUB}</p>
          <div className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(270px,100%),1fr))]">
            {UPGRADES.map(([t, d]) => (
              <div key={t} className="rounded-md bg-white/10 p-6">
                <Paw size={22} style={{ fill: "var(--sun)" }} />
                <h3 className={`m-0 mt-3 ${D} text-[22px] font-semibold leading-tight`}>{t}</h3>
                <p className="m-0 mt-2 text-[15px] text-lilac">{d}</p>
              </div>
            ))}
          </div>
          <p className="m-0 mt-10 max-w-[720px] font-hand text-[26px] leading-snug text-sun">{UPGRADES_HELP}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <h2 className={h2}>The Loyal Companion Glow-Ups</h2>
        <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
          {GLOWUPS.map(([src, n, t]) => (
            <figure key={n} className="relative m-0">
              <img src={src} alt={`${n} after a ${t.toLowerCase()}`} className="h-[440px] w-full rounded-md object-cover" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper px-3.5 py-1.5 text-sm font-semibold">{n} — {t}</figcaption>
            </figure>
          ))}
          <figure className="relative m-0">
            <img src="/images/bath-time.jpg" alt="Pup during bath time" className="h-[440px] w-full rounded-md object-cover" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper px-3.5 py-1.5 text-sm font-semibold">Bath time</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t-2 border-ink px-6 py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
          <div>
            <h2 className={h2}>A little about our grooming services</h2>
          </div>
          <div className="text-lg text-ink-soft">
            {ABOUT_SERVICES.map((p) => <p key={p} className="m-0 mb-4">{p}</p>)}
            <p className="m-0 mt-6 rounded-md bg-sand p-5 text-[15px] text-ink">{POLICY}</p>
          </div>
        </div>
      </section>

      <BookBand title="Ready to treat your companion to a little TLC?" text={`Call or text ${PHONE} to schedule — or book online. Because They're Family.`} />
    </PageShell>
  );
}

/* ---------------- About ---------------- */
function CrewCard({ m }: { m: Member }) {
  const [open, setOpen] = useState(false);
  const isLogo = m.img?.includes("logo-circle");
  const [first, ...rest] = m.bio;
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-line bg-white">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
        <img src={m.img} alt={isLogo ? "The Loyal Companion logo" : m.name}
          className={`absolute inset-0 h-full w-full ${isLogo ? "object-contain p-10" : "object-cover"}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`m-0 ${D} text-[34px] font-extrabold leading-none tracking-[-0.03em]`}>{m.name}</h3>
        <p className="m-0 mt-2 font-hand text-[24px] leading-tight text-rust">{m.role}</p>
        <div className="mt-3 text-[15px] text-ink-soft">
          <p className="m-0">{first}</p>
          {open && rest.map((p) => <p key={p.slice(0, 24)} className="m-0 mt-3">{p}</p>)}
        </div>
        {rest.length > 0 && (
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-4 self-start font-bold text-plum underline-offset-4 hover:underline">
            {open ? "Show less" : `Read ${m.name}'s full story →`}
          </button>
        )}
      </div>
    </article>
  );
}

export function AboutPage() {
  const people = CREW.filter((m) => !["Dexter", "Cooper"].includes(m.name));
  const dogs = CREW.filter((m) => ["Dexter", "Cooper"].includes(m.name));
  const grid = "grid items-start gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),1fr))]";
  return (
    <PageShell>
      <PageHero kicker="About us" title="The Heart Behind" accent="The Loyal Companion" intro={ABOUT_INTRO} />
      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <div className="mb-8 border-b-2 border-ink pb-4"><h2 className={h2}>Meet the Loyal Crew.</h2></div>
        <div className={grid}>{people.map((m) => <CrewCard key={m.name} m={m} />)}</div>
      </section>
      <section className="mx-auto max-w-[1240px] px-6 pb-20">
        <div className="mb-8 border-b-2 border-ink pb-4"><h2 className={h2}>Our chief testers.</h2></div>
        <div className={grid}>{dogs.map((m) => <CrewCard key={m.name} m={m} />)}</div>
      </section>
      <BookBand title="Come meet the crew." text="We can't wait to welcome you and your four-legged family to The Loyal Companion!" />
    </PageShell>
  );
}

/* ---------------- Contact ---------------- */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const field = "mt-1 block w-full rounded-md border border-line bg-white px-3.5 py-3 text-base";
  return (
    <PageShell>
      <PageHero kicker="Contact us" title="Come Say Hello." intro={CONTACT_INTRO} />
      <section className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 pb-20 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
        <div>
          <p className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.08em]">Location</p>
          <p className="m-0 mb-5 text-lg font-semibold">{ADDRESS}</p>
          <p className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.08em]">Phone</p>
          <p className="m-0 mb-5 text-lg"><a href={PHONE_HREF}>{PHONE}</a> — call or text</p>
          <p className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.08em]">Email</p>
          <p className="m-0 mb-7 text-lg break-all"><a href={`mailto:${EMAIL}?subject=Website%20Inquiry`}>{EMAIL}</a></p>
          <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.08em]">Store hours</p>
          <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-4">
            {HOURS.map(([d, h]) => [<span key={d}>{d}</span>, <span key={d + "h"} className="font-semibold">{h}</span>])}
          </div>
          <p className="m-0 flex flex-wrap gap-x-3 font-semibold">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener">Facebook</a>·
            <a href={SOCIAL.instagram} target="_blank" rel="noopener">Instagram</a>·
            <a href={SOCIAL.tiktok} target="_blank" rel="noopener">TikTok</a>
          </p>
        </div>
        <form
          className="rounded-md border border-line bg-white p-7"
          onSubmit={(e) => { e.preventDefault(); /* TODO: wire form submission in the repo */ setSent(true); }}
        >
          <h2 className={`m-0 ${D} text-3xl font-extrabold`}>Send us a message</h2>
          {sent ? (
            <p className="m-0 mt-6 text-lg font-semibold text-plum">Thanks for submitting!</p>
          ) : (
            <div className="mt-5 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">First Name<input required name="first" className={field} /></label>
                <label className="text-sm font-semibold">Last Name<input name="last" className={field} /></label>
              </div>
              <label className="text-sm font-semibold">Email<input required type="email" name="email" className={field} /></label>
              <label className="text-sm font-semibold">Message<textarea required name="message" rows={5} className={field} /></label>
              <button type="submit" className="cta min-h-11 rounded-md bg-plum px-6 py-3.5 font-bold text-white">Send</button>
            </div>
          )}
        </form>
      </section>
      <section className="mx-auto grid max-w-[1240px] gap-4 px-6 pb-20 [grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))]">
        <img src="/images/storefront.jpg" alt="The Loyal Companion storefront on Main Street" className="h-[420px] w-full rounded-md object-cover" />
        <iframe title="Map to The Loyal Companion, 55 W Main St, Platteville" src={MAP_EMBED} loading="lazy" className="h-[420px] w-full rounded-md border-0" />
      </section>
      <BookBand title="Ready for a fresh pup?" text="Grooming is by appointment — book online or give us a call." />
    </PageShell>
  );
}
