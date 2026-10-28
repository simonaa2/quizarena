## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-10-27 - Debouncing Network-Triggered DOM Rebuilds
**Learning:** In zero-server architectures where the host browser acts as the central server, synchronous DOM rebuilds (like `updateLobbyUI`) triggered by mass network events (e.g., many students joining concurrently) can block the main thread and cause layout thrashing.
**Action:** Always debounce rapid, network-triggered DOM rebuilds using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update.
