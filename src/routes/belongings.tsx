import { createFileRoute } from "@tanstack/react-router";
import { Lock, Package, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader, PendingNotice } from "@/components/common/page-parts";

export const Route = createFileRoute("/belongings")({
  head: () => ({
    meta: [
      { title: "My Belongings — CampusExist" },
      { name: "description", content: "Privately keep track of the things you own on campus." },
      { property: "og:title", content: "My Belongings — CampusExist" },
      { property: "og:description", content: "Privately keep track of the things you own on campus." },
    ],
  }),
  component: Belongings,
});

function Belongings() {
  return (
    <>
      <PageHeader
        title="My Belongings"
        description="A private inventory only you can see. Mark items to lend or sell later."
        action={<Button disabled><Plus /> Add belonging</Button>}
      />
      <PendingNotice>this private list will be saved to your account after sign-in is added.</PendingNotice>
      <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><Lock className="h-4 w-4" aria-hidden /> Visible only to you.</p>
      <EmptyState icon={Package} title="Nothing here yet" text="Add your laptop, charger, books or ID card to keep a record of them." />
    </>
  );
}
