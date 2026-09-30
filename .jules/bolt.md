## 2024-05-19 - Batching DOM Updates in Zero-Server Sync
**Learning:** In a peer-to-peer real-time architecture, iterative DOM manipulation inside high-frequency event handlers (like students joining concurrently) severely blocks the main thread, causing missed packets and jank.
**Action:** Always batch DOM updates. Use `requestAnimationFrame` to debounce frequent updates and `DocumentFragment` to build UI in memory before appending to the DOM in a single paint operation.
