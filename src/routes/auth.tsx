import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PendingNotice } from "@/components/common/page-parts";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — CampusExist" },
      { name: "description", content: "Sign in or create your CampusExist student account." },
      { property: "og:title", content: "Sign in — CampusExist" },
      { property: "og:description", content: "Sign in or create your CampusExist student account." },
    ],
  }),
  component: AuthPage,
});

function Field({ id, label, type = "text", placeholder }: { id: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} disabled />
    </div>
  );
}

function AuthPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-1 text-3xl font-semibold">Welcome to CampusExist</h1>
      <p className="mb-6 text-muted-foreground">Use your college email to join.</p>
      <PendingNotice>sign in and sign up are not active until authentication is connected.</PendingNotice>
      <Tabs defaultValue="signin" className="rounded-xl border bg-card p-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-4 space-y-4">
          <Field id="si-email" label="College email" type="email" placeholder="you@iilm.edu" />
          <Field id="si-pass" label="Password" type="password" />
          <Button className="w-full" disabled>Sign in</Button>
        </TabsContent>
        <TabsContent value="signup" className="mt-4 space-y-4">
          <Field id="su-name" label="Full name" />
          <Field id="su-email" label="College email" type="email" placeholder="you@iilm.edu" />
          <Field id="su-pass" label="Password" type="password" />
          <Button className="w-full" disabled>Create account</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
