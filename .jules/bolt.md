## 2024-10-12 - Layout Thrashing in Zero-Server Architecture
**Learning:** Due to the application's unique 'Zero-Server' real-time sync architecture, the host browser acts as the central server and handles all concurrent student connections. This makes the main thread highly sensitive to synchronous performance bottlenecks like layout thrashing caused by iterative DOM node insertions in loops.
**Action:** Always batch DOM creations and insertions using `DocumentFragment` rather than appending elements one-by-one directly to the live DOM within loops to minimize repaints and reflows.
