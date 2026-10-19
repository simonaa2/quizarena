## 2024-05-24 - Layout Thrashing in Zero-Server Architecture
**Learning:** The application uses a 'Zero-Server Real-Time Sync' architecture where the host browser acts as the central server handling concurrent student connections. The main thread is highly sensitive to synchronous performance bottlenecks. Repeatedly using `appendChild` in a loop triggers layout thrashing and degrades performance, particularly under high connection volumes.
**Action:** Always use `DocumentFragment` to batch DOM node creations and insertions instead of iterative DOM manipulation to prevent layout thrashing.
