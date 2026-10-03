## 2026-10-03 - [DocumentFragment for Large DOM Updates]
**Learning:** In a 'Zero-Server' architecture where the browser acts as a real-time host for MQTT/WebRTC, the main thread is easily blocked by synchronous reflows caused by appending to the DOM inside loops (like updating the lobby or leaderboard).
**Action:** Always batch list insertions using a `DocumentFragment` before appending to the live DOM to ensure the O(N) reflows are reduced to O(1), keeping the event loop free for network processing.
