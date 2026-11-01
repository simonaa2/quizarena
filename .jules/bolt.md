## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2026-11-01 - [Debouncing Network-Triggered DOM Rebuilds]
**Learning:** During mass network events in a zero-server architecture (like multiple students joining), synchronous and repetitive DOM rebuilds block the main thread and cause layout thrashing.
**Action:** Use requestAnimationFrame to debounce and coalesce rapid, network-triggered DOM state changes (e.g. updateLobbyUI) into a single, efficient update loop.
