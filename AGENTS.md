<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Architecture, page status and planned tables live in docs/ARCHITECTURE.md — keep it updated as features move from UI-only to working.
- Navigation is defined once in src/components/layout/nav-items.ts and shared by desktop and mobile nav.
- Features without a backend must show PendingNotice and disabled controls — never fake data or fake success.
