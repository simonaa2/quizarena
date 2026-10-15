## 2024-10-15 - DocumentFragment for DOM Batching
**Learning:** The application acts as a Zero-Server host in the browser and the main thread is highly sensitive to synchronous performance bottlenecks like iterative DOM manipulation.
**Action:** Always use DocumentFragment to batch DOM node creations and insertions instead of appending directly to the live DOM in loops to prevent layout thrashing.
