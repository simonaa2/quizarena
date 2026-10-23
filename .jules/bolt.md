## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-07-29 - Main Thread Debouncing for Mass Join Events
**Learning:** In the zero-server architecture where WebRTC and MQTT network events fire synchronously on the host, `updateLobbyUI` was thrashing the layout on every single connection. This could lock up the browser when large classes (30+ students) scan the QR code and join concurrently.
**Action:** Always wrap `updateLobbyUI` and other list-rendering logic attached to network event callbacks in a `requestAnimationFrame` debouncer to coalesce rapid updates into a single frame.
