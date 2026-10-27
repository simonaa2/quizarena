## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-10-27 - Debouncing Mass Network Events
**Learning:** In a zero-server architecture where the host browser handles many concurrent connections, rapid and simultaneous network events (like students joining or answering questions) cause tight loops of DOM rebuilds. This blocks the main thread synchronously.
**Action:** Always debounce rapid, network-triggered DOM rebuilds (e.g., lobby rosters, answer counters) using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update without layout thrashing.
