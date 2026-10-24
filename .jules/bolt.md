## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2025-02-12 - Mass Network Events Sync Main Thread Blocking
**Learning:** In this zero-server real-time sync architecture, processing mass network events (e.g., many students joining concurrently, submitting answers) triggers synchronous state changes which rebuilds DOM structures iteratively leading to main thread freezing and frame drops.
**Action:** Always debounce rapid, network-triggered UI updates using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update, preventing synchronous layout thrashing.
