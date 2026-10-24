import { createFileRoute } from "@tanstack/react-router";
import { Repeat } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState, PageHeader, PendingNotice } from "@/components/common/page-parts";

export const Route = createFileRoute("/borrowing")({
  head: () => ({
    meta: [
      { title: "Borrowing Requests — CampusExist" },
      { name: "description", content: "Track items you have requested and requests from other students." },
      { property: "og:title", content: "Borrowing Requests — CampusExist" },
      { property: "og:description", content: "Track borrowing requests between students." },
    ],
  }),
  component: Borrowing,
});

function Borrowing() {
  return (
    <>
      <PageHeader title="Borrowing Requests" description="See what you asked to borrow and who wants to borrow from you." />
      <PendingNotice>requests and approve/decline actions require sign-in and the database.</PendingNotice>
      <Tabs defaultValue="sent">
        <TabsList>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="received">Received</TabsTrigger>
        </TabsList>
        <TabsContent value="sent" className="mt-4">
          <EmptyState icon={Repeat} title="No requests sent" text="Requests you send will show status: pending, approved, returned." />
        </TabsContent>
        <TabsContent value="received" className="mt-4">
          <EmptyState icon={Repeat} title="No requests received" text="When someone asks to borrow your item, you can approve or decline here." />
        </TabsContent>
      </Tabs>
    </>
  );
}
