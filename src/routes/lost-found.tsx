import { createFileRoute } from "@tanstack/react-router";
import { SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, PendingNotice, SearchBar } from "@/components/common/page-parts";

export const Route = createFileRoute("/lost-found")({
  head: () => ({
    meta: [
      { title: "Lost & Found — CampusExist" },
      { name: "description", content: "Report lost belongings or help return found items on campus." },
      { property: "og:title", content: "Lost & Found — CampusExist" },
      { property: "og:description", content: "Report lost belongings or help return found items on campus." },
    ],
  }),
  component: LostFound,
});

function LostFound() {
  return (
    <>
      <PageHeader
        title="Lost & Found"
        description="Lost something in the library or canteen? Report it, or post what you found."
        action={<div className="flex gap-2"><Button disabled variant="destructive">I lost something</Button><Button disabled variant="outline">I found something</Button></div>}
      />
      <PendingNotice>reports and matching need the database and sign-in.</PendingNotice>
      <SearchBar placeholder="Search by item or location…" filters={["All", "Lost", "Found", "Returned"]} />
      <EmptyState icon={SearchCheck} title="No reports yet" text="Lost and found reports will show here with location, date and status." />
    </>
  );
}
