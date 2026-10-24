import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/common/page-parts";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help & Safety — CampusExist" },
      { name: "description", content: "Safety tips and answers for trading and borrowing on campus." },
      { property: "og:title", content: "Help & Safety — CampusExist" },
      { property: "og:description", content: "Safety tips for trading and borrowing on campus." },
    ],
  }),
  component: Help,
});

const TIPS: [string, string][] = [
  ["Meet in public campus spots", "Exchange items in the library, canteen or near security desks — never in isolated places."],
  ["Inspect before you pay", "Check the item works before handing over money. Pay in person or via UPI only after inspection."],
  ["Never share passwords or OTPs", "CampusExist will never ask for your OTP, bank details or ID card photo."],
  ["Return borrowed items on time", "Agree on a return date and condition upfront. Report damage honestly."],
  ["Hand found items to security", "If you find a valuable item (wallet, ID, phone), also inform campus security."],
  ["Report suspicious behaviour", "Contact your student council or campus security if something feels wrong."],
];

function Help() {
  return (
    <div className="max-w-3xl">
      <PageHeader title="Help & Safety" description="Simple rules to keep every trade and loan safe and friendly." />
      <Accordion type="single" collapsible className="rounded-xl border bg-card px-5">
        {TIPS.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
