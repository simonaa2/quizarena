
## 2026-10-04 - [Main-Thread Contention in Zero-Server Architecture]
**Learning:** In a "Zero-Server Real-Time Sync" architecture where the host browser acts as the server handling WebRTC, MQTT, and BroadcastChannels for multiple clients, the main thread is highly sensitive to synchronous performance bottlenecks like iterative DOM manipulation (calling `appendChild` inside large loops).
**Action:** Use `DocumentFragment` to batch DOM updates into a single main-thread operation to reduce reflows/repaints and keep network ingestion real-time processing unblocked.
