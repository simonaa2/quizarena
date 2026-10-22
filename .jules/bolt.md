## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2026-10-22 - Debouncing Network-Triggered DOM Rebuilds
**Learning:** Network-triggered rapid DOM updates during mass concurrent connections (e.g., when many students join simultaneously) can block the main thread and cause layout thrashing, which is especially critical in this zero-server architecture.
**Action:** Always debounce these mass UI update functions (like `updateLobbyUI`) using `requestAnimationFrame` to coalesce synchronous layout recalculations and DOM inserts into a single frame.
