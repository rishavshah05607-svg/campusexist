# CampusExist — GitHub safety review

## Existing project preserved

No application code, dependencies, entry points or pages were replaced.

- Framework: TanStack Start v1, React 19, TypeScript, Vite **8.1.5**, Tailwind CSS v4.
- Libraries: TanStack Router and Query, shadcn/Radix UI, Lucide, React Hook Form, Zod, Sonner; Vitest and Testing Library for tests.
- All **67 declared direct packages** resolve locally within their declared version ranges.
- `bunx vitest run`: **one test file, one test passed**. Coverage is limited.
- Available observability logs reported no build/runtime errors; the dev server reports ready. No manual production build or typecheck was run, so production compilation remains unverified.
- A basic scan of tracked working-tree files found no obvious private-key blocks, known provider-token patterns or hardcoded sensitive assignments. This is not a full secret audit or a scan of Git history.
- Authentication and database features are not connected; dependent controls remain pending.

## Entry points and pages

| File | Purpose |
|---|---|
| `vite.config.ts` | Tooling configuration and server entry selection |
| `src/server.ts` | Server rendering entry and error wrapper |
| `src/start.ts` | Request/CSRF middleware |
| `src/router.tsx` | Router and Query client |
| `src/routes/__root.tsx` | Document, shared layout and page outlet |
| `src/routes/index.tsx` | Home dashboard |
| `src/components/layout/nav-items.ts` | Shared desktop/mobile navigation |

Pages: `/`, `/marketplace`, `/lost-found`, `/borrowing`, `/belongings`, `/auth`, `/profile`, `/help`. All eight have their own title, description and Open Graph title/description; the root supplies website and Twitter card metadata. `src/routeTree.gen.ts` is generated, not manually edited.

## GitHub connection: unverified

The agent cannot read Lovable's Git sync connection/status. Sandbox Git storage does not establish a GitHub connection. No intended GitHub owner/repository was supplied, so repository correctness cannot be confirmed.

### Verify the latest backup

1. Desktop: Project settings → Git → GitHub, also reachable from More → Git. Mobile: Chat mode → bottom-right `...` → Settings → Git.
2. Choose **View on GitHub** and verify the owner/organization and repository name.
3. Note Lovable's synced branch and select that same branch on GitHub; do not assume `main`.
4. After saving finishes, choose **Re-check** and confirm **In sync with GitHub** with a recent status-check/sync time. Re-check compares versions; it does not push/pull.
5. Open the latest GitHub commit and inspect actual changes. For this review, confirm `docs/GITHUB_SAFETY.md` and the updated `roadmap.md` exist. Compare the commit shown by both services if available.
6. Unaccepted drafts do not automatically reach the synced repository; accept the draft or use its pull-request workflow first.

### If not connected

1. A workspace owner/admin opens Workspace settings → Git → GitHub → **Add connection**.
2. Authorize the Lovable GitHub App for the intended GitHub account/organization and grant repository access.
3. A project/workspace owner/admin opens Project settings → Git → GitHub → **Connect** beside that connection.
4. Lovable creates a **new private repository**; Git sync cannot attach this project to an existing repository. Verify the new repository using the checklist above.

For a broken connection, follow the Git panel's **Reconnect** prompt and restore GitHub App access. Do not disconnect a working connection merely to test it: connecting after disconnection creates a different repository.

For divergence, preserve both versions and review/merge the newest `lovable-sync*` branch into the synced branch before further pushes. Do not force-push, reset or rewrite history to troubleshoot.

## Secret protection — outstanding limitation

The existing `.gitignore` excludes dependencies, build output, `*.local` and `.dev.vars`, but **does not exclude `.env`, `.env.production`, or ordinary private `.pem`/`.key` files**. This was verified using synthetic filenames, without creating secrets.

The environment refused edits to `.gitignore` because it is protected. No bypass was attempted. When Git configuration is editable, add:

```gitignore
# Private configuration and credentials
.env
.env.*
!.env.example
*.pem
*.key
*.p12
*.pfx
credentials.json
service-account*.json
*.tsbuildinfo
```

Until those exclusions are applied, do not create private credential files in the project. Use Lovable Secrets for private server keys; never place private keys or service-role keys in browser-visible `VITE_*` variables. `.env.example`, if added, must contain placeholders only.

Ignore rules do not remove files already committed. If a secret is committed, revoke/rotate it immediately, then arrange careful history cleanup; deleting the current file is insufficient. Private repositories are not secret stores.

## Coding fundamentals and commands

- `.gitignore` is a list of filename patterns Git should skip for new untracked files; it is not application code.
- `package.json` declares package requirements and commands; `bun.lock` records resolved versions. Keep both tracked.
- `bun install --frozen-lockfile` installs locked versions locally (not needed during this review).
- `bun run dev` starts local development; `bunx vitest run` runs tests (the latter was used).
- `git status --short` and `git log -1` inspect changes and the latest local commit without changing history.
- Work locally on a feature branch, then merge reviewed changes into the synced branch. Avoid force pushes/rebases of published history.
- Do not share raw remote URLs; some environments include credentials in them.

Only this guide and the roadmap changed. Repository/sync verification and protected ignore-rule updates remain outstanding.