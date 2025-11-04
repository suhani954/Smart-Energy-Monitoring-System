// metrics_collector.js

export async function collectUserMetrics() {
  const metrics = {};

  try {
    // 🔋 Battery
    if (navigator.getBattery) {
      const battery = await navigator.getBattery();
      metrics.battery = {
        level: (battery.level * 100).toFixed(0) + "%",
        charging: battery.charging,
      };
    }

    // 🧠 Memory (only works in Chrome)
    if (performance.memory) {
      const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
      metrics.memory = {
        used: (usedJSHeapSize / 1048576).toFixed(2) + " MB",
        total: (totalJSHeapSize / 1048576).toFixed(2) + " MB",
      };
    }

    // 🌐 Network
    if (navigator.connection) {
      const { downlink, effectiveType, rtt } = navigator.connection;
      metrics.network = {
        speed: downlink + " Mbps",
        type: effectiveType,
        latency: rtt + " ms",
      };
    }

    // 🕒 System info
    metrics.system = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

  } catch (error) {
    console.error("Error collecting metrics:", error);
  }

  return metrics;
}
