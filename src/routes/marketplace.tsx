import { createFileRoute } from "@tanstack/react-router";
import { Plus, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, PendingNotice, SearchBar } from "@/components/common/page-parts";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — CampusExist" },
      { name: "description", content: "Buy, sell and rent college essentials from fellow students." },
      { property: "og:title", content: "Marketplace — CampusExist" },
      { property: "og:description", content: "Buy, sell and rent college essentials from fellow students." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
  return (
    <>
      <PageHeader
        title="Marketplace"
        description="Buy, sell or rent books, gadgets, lab gear and hostel essentials."
        action={<Button disabled><Plus /> List an item</Button>}
      />
      <PendingNotice>listings, search and posting will work once the database is connected.</PendingNotice>
      <SearchBar placeholder="Search books, calculators, lab coats…" filters={["All", "For sale", "For rent", "Books", "Electronics", "Lab gear"]} />
      <EmptyState icon={Store} title="No listings yet" text="Real listings from students will appear here as item cards with price, condition and status." />
    </>
  );
}
