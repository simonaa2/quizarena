## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2026-10-29 - Debouncing Layout Thrashing with requestAnimationFrame
**Learning:** In this zero-server application, rapid concurrent student joins trigger synchronous DOM rebuilds on the host's main thread, potentially causing layout thrashing and freezing the UI (e.g., in `updateLobbyUI`).
**Action:** When handling UI updates driven by mass network events, always debounce the updates by wrapping the DOM manipulation logic within a `requestAnimationFrame` block to coalesce rapid changes into a single DOM update.
