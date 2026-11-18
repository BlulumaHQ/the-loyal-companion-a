import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Gallery, Menu, Shop, Crew, Review, Visit, Footer } from "@/components/site/Sections";

export const SITE_URL = "https://theloyalcompanion.com";
const title = "Dog Grooming in Platteville, WI | The Loyal Companion";
const description = "Locally owned dog grooming salon and pet shop on Main Street in Platteville, WI. Baths from $35, full grooms from $75. Book online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: SITE_URL }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans leading-[1.6] text-ink">
      <Header /><Hero /><Gallery /><Menu /><Shop /><Crew /><Review /><Visit /><Footer />
    </div>
  );
}
