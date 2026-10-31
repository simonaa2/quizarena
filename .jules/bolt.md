## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-07-29 - Network-Triggered Main Thread O(N²) DOM Node Creation During Mass Events
**Learning:** In this zero-server architecture, when many students join simultaneously, network callbacks (e.g., `handleStudentJoin`) are triggered rapidly. This calls UI update functions (like `updateLobbyUI`) synchronously for each event, leading to an O(N²) DOM insertion spike that freezes the main thread and causes severe layout thrashing.
**Action:** Always debounce rapid, network-triggered DOM rebuilds using `requestAnimationFrame`. This coalesces multiple state changes into a single DOM update per frame, preventing synchronous main-thread blocking.
