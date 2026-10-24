import { Home, Store, SearchCheck, Repeat, Package, LifeBuoy, type LucideIcon } from "lucide-react";

export type NavItem = {
  to: "/" | "/marketplace" | "/lost-found" | "/borrowing" | "/belongings" | "/help";
  label: string;
  icon: LucideIcon;
};

// Single source of truth for navigation (desktop header + mobile bottom bar).
export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/marketplace", label: "Marketplace", icon: Store },
  { to: "/lost-found", label: "Lost & Found", icon: SearchCheck },
  { to: "/borrowing", label: "Borrowing", icon: Repeat },
  { to: "/belongings", label: "Belongings", icon: Package },
  { to: "/help", label: "Help", icon: LifeBuoy },
];
