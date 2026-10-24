import { createFileRoute } from "@tanstack/react-router";
import { UserCircle2 } from "lucide-react";
import { EmptyState, PageHeader, PendingNotice } from "@/components/common/page-parts";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — CampusExist" },
      { name: "description", content: "Your CampusExist student profile, listings and activity." },
      { property: "og:title", content: "My Profile — CampusExist" },
      { property: "og:description", content: "Your CampusExist student profile and activity." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <>
      <PageHeader title="My Profile" description="Your name, course, hostel/block and contact preferences." />
      <PendingNotice>profile details will load after you sign in.</PendingNotice>
      <EmptyState icon={UserCircle2} title="You're not signed in" text="Sign in to see your profile, your listings and your borrowing history." />
    </>
  );
}
