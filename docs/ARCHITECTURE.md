# CampusExist — Architecture

## Stack
- TanStack Start (React 19 + TypeScript), Vite, Tailwind CSS v4, shadcn/ui
- Backend: Lovable Cloud (Supabase: Postgres, Auth, Storage) — not yet connected

## Structure
- `src/routes/` — one file per page
- `src/components/layout/` — AppShell (header + mobile bottom nav), nav items
- `src/components/common/` — PageHeader, SearchBar, EmptyState, StatusBadge, PendingNotice
- `src/components/ui/` — shadcn primitives

## Pages
| Route | Page | Status |
|---|---|---|
| `/` | Home dashboard | UI done |
| `/marketplace` | Marketplace | UI only, needs DB |
| `/lost-found` | Lost & Found | UI only, needs DB |
| `/borrowing` | Borrowing Requests | UI only, needs DB + auth |
| `/belongings` | My Belongings (private) | UI only, needs DB + auth |
| `/auth` | Sign in / Sign up | UI only, needs auth |
| `/profile` | User Profile | UI only, needs auth |
| `/help` | Help & Safety | Complete (static) |

## Planned database tables
- `profiles` (id → auth.users, full_name, course, hostel, phone, avatar_url)
- `listings` (owner_id, title, description, category, type: sell/rent/lend, price, condition, image_url, status)
- `lost_found_reports` (reporter_id, kind: lost/found, title, location, date, image_url, status)
- `borrow_requests` (listing_id, requester_id, owner_id, start_date, end_date, status: pending/approved/declined/returned)
- `belongings` (owner_id, name, category, serial_or_note, image_url) — RLS: owner only
- Storage bucket `item-images`

## Implementation order
1. Frontend + navigation (done)
2. Enable Lovable Cloud, email sign-in, `profiles`
3. Marketplace listings (create, list, search, filter, image upload)
4. Lost & Found reports
5. My Belongings (private)
6. Borrowing requests linking listings and users
7. Testing, publish, GitHub sync
