## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2025-01-20 - Debouncing rapid network events
**Learning:** In the zero-server architecture, when many students join concurrently, rapid network events trigger UI updates synchronously on the main thread, causing severe layout thrashing because `updateLobbyUI` clears and recreates DOM elements linearly for every join event.
**Action:** Always debounce rapid, network-triggered DOM rebuilds (e.g. `updateLobbyUI`) using `requestAnimationFrame` to coalesce multiple state changes into a single DOM update and prevent synchronous main-thread blocking.
