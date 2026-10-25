## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-07-02 - Debouncing Mass Network Events
**Learning:** During mass network events in this zero-server architecture (e.g., many students joining concurrently), event handlers can trigger synchronous DOM rebuilds multiple times in a single frame. This blocks the main thread, causing severe layout thrashing and stuttering.
**Action:** Always debounce rapid, network-triggered DOM rebuilds (like `updateLobbyUI`) using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update.
