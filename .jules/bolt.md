## 2024-05-24 - Mass-join UI Thread Locking
**Learning:** During mass-network events (like an entire classroom joining a lobby simultaneously), synchronous DOM redrawing in a tight loop can lock the UI thread and degrade the user experience.
**Action:** Use `requestAnimationFrame` to debounce rendering calls and construct the updated UI inside a `DocumentFragment` before appending it to the DOM to avoid multiple reflows and repaints.
