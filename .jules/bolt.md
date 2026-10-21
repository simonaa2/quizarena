## 2024-06-25 - Layout Thrashing with DocumentFragment
**Learning:** Found multiple instances where DOM elements were iteratively created and inserted in tight loops (e.g., `updateLobbyUI`, `renderLeaderboard`). Since this is a zero-server app that handles realtime sync on the host's main thread, sync performance bottlenecks like layout thrashing are fatal.
**Action:** Always wrap iterative DOM manipulations in a `DocumentFragment` to batch layout recalculations and DOM inserts.

## 2024-07-28 - Main Thread Blocking on Mass Network Events
**Learning:** During mass network events (e.g., 30+ students joining simultaneously), processing each MQTT packet individually triggered an immediate synchronous DOM rebuild (`updateLobbyUI`). This blocked the main thread, causing severe lag and dropped packets.
**Action:** Always debounce rapid, network-triggered DOM rebuilds using `requestAnimationFrame`. This coalesces dozens of rapid data state changes into a single DOM update before the next paint frame.
