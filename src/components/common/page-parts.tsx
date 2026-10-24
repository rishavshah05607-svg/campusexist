import type { ReactNode } from "react";
import { Database, Search, type LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function PageHeader({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h1>
        <p className="mt-1 max-w-2xl text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}

/** Honest banner: marks a feature that still needs the database connected. */
export function PendingNotice({ children }: { children: ReactNode }) {
  return (
    <div role="note" className="mb-6 flex gap-3 rounded-lg border border-warning/40 bg-warning/10 p-4 text-sm text-foreground">
      <Database className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
      <p><strong>Not connected yet:</strong> {children}</p>
    </div>
  );
}

export function SearchBar({ placeholder, filters }: { placeholder: string; filters?: string[] }) {
  return (
    <div className="mb-6 space-y-3">
      <label className="relative block">
        <span className="sr-only">{placeholder}</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input placeholder={placeholder} className="h-11 bg-card pl-9" disabled />
      </label>
      {filters && (
        <div className="flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <span
              key={f}
              className={cn(
                "rounded-full border px-3 py-1 text-sm",
                i === 0 ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
              )}
            >
              {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function EmptyState({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed bg-card px-6 py-14 text-center">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

const STATUS_STYLES = {
  available: "bg-success/15 text-success",
  pending: "bg-warning/20 text-accent-foreground",
  lost: "bg-destructive/15 text-destructive",
  found: "bg-info/15 text-info",
  returned: "bg-muted text-muted-foreground",
} as const;

export function StatusBadge({ status }: { status: keyof typeof STATUS_STYLES }) {
  return <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", STATUS_STYLES[status])}>{status}</span>;
}
