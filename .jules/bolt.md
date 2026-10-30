## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2026-10-30 - Debouncing Network-Triggered DOM Rebuilds
**Learning:** During mass network events (e.g., many students joining concurrently) in this zero-server architecture, rapid successive calls to UI update functions (like `updateLobbyUI`) can cause synchronous main-thread blocking and layout thrashing, even if using `DocumentFragment`.
**Action:** Always debounce rapid, network-triggered DOM rebuilds using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update.
