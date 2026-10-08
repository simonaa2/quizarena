## 2024-05-24 - Prevent Layout Thrashing in Zero-Server Setup
**Learning:** In the 'Zero-Server Real-Time Sync' architecture where the host browser acts as the central server, the main thread is highly sensitive to synchronous performance bottlenecks. Iterative DOM manipulation (appending elements one by one) causes layout thrashing and severely degrades performance.
**Action:** Always use `DocumentFragment` to batch DOM node creations and insertions instead of iterative DOM manipulation.
