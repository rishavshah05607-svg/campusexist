import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/components/layout/nav-items";
import { StatusBadge } from "@/components/common/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusExist — Your campus essentials hub" },
      { name: "description", content: "Buy, sell, borrow and recover college essentials with students at IILM University." },
      { property: "og:title", content: "CampusExist — Your campus essentials hub" },
      { property: "og:description", content: "Buy, sell, borrow and recover college essentials with fellow students." },
    ],
  }),
  component: Home,
});

const DESCRIPTIONS: Record<string, string> = {
  "/marketplace": "Buy, sell or rent books, calculators, lab coats and more.",
  "/lost-found": "Report lost items or help return found ones.",
  "/borrowing": "Request items and track who has borrowed what.",
  "/belongings": "A private list of the things you own.",
  "/help": "Safety tips for meeting and trading on campus.",
};

function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-14">
        <p className="text-sm font-medium opacity-80">IILM University · Greater Noida</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-semibold md:text-5xl">Everything your campus already owns, shared smarter.</h1>
        <p className="mt-3 max-w-xl opacity-90">List, borrow, rent and recover college essentials — only with verified students.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="lg"><Link to="/marketplace">Browse marketplace <ArrowRight /></Link></Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/lost-found">Report lost item</Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="features">
        <h2 id="features" className="mb-4 text-2xl font-semibold">What you can do</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_ITEMS.filter((n) => n.to !== "/").map((item) => (
            <Link key={item.to} to={item.to} className="group rounded-xl border bg-card p-5 transition-shadow hover:shadow-md">
              <item.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{DESCRIPTIONS[item.to]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-xl border bg-card p-5 sm:flex-row sm:items-center">
        <ShieldCheck className="h-6 w-6 text-success" aria-hidden />
        <p className="text-sm text-muted-foreground">Item status at a glance:</p>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="available" /><StatusBadge status="pending" /><StatusBadge status="lost" /><StatusBadge status="found" /><StatusBadge status="returned" />
        </div>
      </section>
    </div>
  );
}
