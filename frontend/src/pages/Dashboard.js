// import { useEffect, useState } from "react";
// import { getSystemMetrics } from "../api/systemAPI";
// import SystemUsageChart from "../components/charts/SystemUsageChart";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// export default function Dashboard() {
//   const [metrics, setMetrics] = useState(null);
//   const [status, setStatus] = useState("Loading...");
//   const [lastUpdated, setLastUpdated] = useState(null);

//   const fetchMetrics = async () => {
//     try {
//       const data = await getSystemMetrics();
//       setMetrics(data);
//       updateStatus(data);
//       setLastUpdated(new Date().toLocaleTimeString());
//     } catch (error) {
//       console.error("Error fetching system metrics:", error);
//     }
//   };

//   const logMetrics = async () => {
//     try {
//       await fetch("http://127.0.0.1:8000/system/log", { method: "POST" });
//     } catch (error) {
//       console.error("Error logging system metrics:", error);
//     }
//   };

//   const updateStatus = (data) => {
//     const cpu = data.cpu_usage || 0;
//     const memory = data.memory?.percent || 0;
//     const disk = data.disk?.percent || 0;

//     if (cpu > 90 || memory > 90 || disk > 90) setStatus("High Resource Usage");
//     else if (cpu > 80 || memory > 80 || disk > 80) setStatus("Moderate Load");
//     else setStatus("System Stable");
//   };

//   useEffect(() => {
//     fetchMetrics();
//     logMetrics();
//     const interval = setInterval(() => {
//       fetchMetrics();
//       logMetrics();
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex min-h-screen w-full text-purple-800 bg-white overflow-hidden">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
//         <Navbar />
//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-extrabold mb-6 tracking-wide text-purple-800">
//               System Dashboard
//             </h2>

//             {/* Status Banner */}
//             <div className="bg-white rounded-xl p-4 mb-6 shadow border border-gray-300">
//               <p className="text-lg font-semibold text-purple-800">{status}</p>
//               {lastUpdated && (
//                 <p className="text-sm text-purple-400 mt-1">
//                   Last Updated: {lastUpdated}
//                 </p>
//               )}
//             </div>

//             {/* System Info */}
//             {metrics?.system_info && (
//               <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mb-6">
//                 <h4 className="text-purple-800 text-md font-bold uppercase tracking-wide mb-2">
//                   System Information
//                 </h4>
//                 <p className="text-purple-600 font-semibold text-sm">
//                   {`${metrics.system_info.os}, ${metrics.system_info.cpu}, ${metrics.system_info.ram} GB RAM`}
//                 </p>
//               </div>
//             )}

//             {!metrics ? (
//               <p className="text-purple-400">Loading system metrics...</p>
//             ) : (
//               <>
//                 {/* Summary Metrics */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//                   <DetailCard icon="💻" title="CPU Usage" value={`${metrics.cpu_usage || 0}%`} />
//                   <DetailCard icon="🧠" title="Memory Usage" value={`${metrics.memory?.percent || 0}%`} />
//                   <DetailCard icon="💾" title="Disk Usage" value={`${metrics.disk?.percent || 0}%`} />
//                   <DetailCard icon="⏱️" title="System Uptime" value={metrics.uptime || "N/A"} />
//                 </div>

//                 {/* Monitoring Panel */}
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <DetailCard
//                     icon="🗄️"
//                     title="Drives Information"
//                     value={
//                       <div className="overflow-x-auto whitespace-nowrap text-purple-600">
//                         {metrics.drives
//                           ? metrics.drives.map((d) => (
//                               <span key={d.device} className="inline-block mr-4">
//                                 {`${d.device}: ${d.used}/${d.total} GB`}
//                               </span>
//                             ))
//                           : "Not Available"}
//                       </div>
//                     }
//                   />
//                   <DetailCard icon="🌐" title="Network Sent" value={`${metrics.network?.sent_mb?.toFixed(2) || 0} MB`} />
//                   <DetailCard icon="📥" title="Network Received" value={`${metrics.network?.recv_mb?.toFixed(2) || 0} MB`} />
//                   <DetailCard icon="⚙️" title="Active Processes" value={`${metrics.process_count || 0}`} />
//                   <DetailCard icon="🔋" title="Battery" value={metrics.battery?.percent !== null ? `${metrics.battery.percent}% ${metrics.battery.charging ? "(Charging)" : "(Discharging)"}` : "Not Available"} />
//                   <DetailCard icon="📊" title="Disk I/O Stats" value={metrics.disk_io ? Object.entries(metrics.disk_io).map(([disk, io]) => `${disk}: R ${io.read_mb} MB / W ${io.write_mb} MB`).join(" | ") : "Not Available"} />
//                 </div>

//                 {/* Chart Section */}
//                 <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mt-10">
//                   <SystemUsageChart
//                     cpu={metrics.cpu_usage || 0}
//                     memory={metrics.memory?.percent || 0}
//                     disk={metrics.disk?.percent || 0}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ---------------------- COMPONENTS ---------------------- */
// function DetailCard({ icon, title, value }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border border-gray-300 shadow hover:shadow-lg transition-all duration-300 min-h-[90px]">
//       <div className="flex items-start space-x-4">
//         <div className="p-3 rounded-full bg-gray-200 text-purple-800 text-2xl shadow">
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h4 className="text-purple-800 text-sm font-bold uppercase tracking-wide">
//             {title}
//           </h4>
//           <p className="text-purple-700 mt-1 break-words font-semibold whitespace-normal text-sm">
//             {value}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";
// import SystemUsageChart from "../components/charts/SystemUsageChart";
// import { collectUserMetrics } from "../utils/metrics_collector"; // new file

// export default function Dashboard() {
//   const [metrics, setMetrics] = useState(null);
//   const [status, setStatus] = useState("Loading...");
//   const [lastUpdated, setLastUpdated] = useState(null);
//   const [aiTips, setAiTips] = useState("Analyzing device performance...");
//   const [efficiencyScore, setEfficiencyScore] = useState(null);

//   // -------------------- COLLECT & SEND METRICS --------------------
//   const sendBrowserMetrics = async () => {
//     try {
//       const browserMetrics = await collectUserMetrics();
//       setMetrics(browserMetrics);

//       const response = await fetch("http://127.0.0.1:8000/api/metrics", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(browserMetrics),
//       });

//       const data = await response.json();
//       setAiTips(data.tips || "No suggestions available.");
//       setEfficiencyScore(data.efficiency_score || "N/A");
//       updateStatus(browserMetrics);
//       setLastUpdated(new Date().toLocaleTimeString());
//     } catch (error) {
//       console.error("Error sending browser metrics:", error);
//       setAiTips("Error analyzing metrics.");
//     }
//   };

//   // -------------------- STATUS LOGIC --------------------
//   const updateStatus = (data) => {
//     const battery = parseFloat(data?.battery?.level) || 0;
//     const memoryUsed = parseFloat(data?.memory?.used) || 0;
//     const memoryTotal = parseFloat(data?.memory?.total) || 1;
//     const usagePercent = (memoryUsed / memoryTotal) * 100;

//     if (usagePercent > 90 || battery < 20) setStatus("High Resource Usage");
//     else if (usagePercent > 70) setStatus("Moderate Load");
//     else setStatus("System Stable");
//   };

//   // -------------------- INTERVAL UPDATE --------------------
//   useEffect(() => {
//     sendBrowserMetrics();
//     const interval = setInterval(sendBrowserMetrics, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   // -------------------- RENDER --------------------
//   return (
//     <div className="flex min-h-screen w-full text-purple-800 bg-white overflow-hidden">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
//         <Navbar />
//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-extrabold mb-6 tracking-wide text-purple-800">
//               Device Performance Dashboard
//             </h2>

//             {/* STATUS BANNER */}
//             <div className="bg-white rounded-xl p-4 mb-6 shadow border border-gray-300">
//               <p className="text-lg font-semibold text-purple-800">{status}</p>
//               {lastUpdated && (
//                 <p className="text-sm text-purple-400 mt-1">
//                   Last Updated: {lastUpdated}
//                 </p>
//               )}
//             </div>

//             {/* AI TIPS & SCORE */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
//               <DetailCard icon="🤖" title="AI Tips" value={aiTips} />
//               <DetailCard
//                 icon="⚡"
//                 title="Efficiency Score"
//                 value={efficiencyScore ? `${efficiencyScore}/100` : "Calculating..."}
//               />
//             </div>

//             {/* DEVICE INFO */}
//             {metrics ? (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//                   <DetailCard
//                     icon="🔋"
//                     title="Battery"
//                     value={
//                       metrics.battery
//                         ? `${metrics.battery.level} ${
//                             metrics.battery.charging ? "(Charging)" : "(Discharging)"
//                           }`
//                         : "Unavailable"
//                     }
//                   />
//                   <DetailCard
//                     icon="🧠"
//                     title="Memory Used"
//                     value={
//                       metrics.memory
//                         ? `${metrics.memory.used} / ${metrics.memory.total}`
//                         : "Unavailable"
//                     }
//                   />
//                   <DetailCard
//                     icon="🌐"
//                     title="Network"
//                     value={
//                       metrics.network
//                         ? `${metrics.network.speed}, ${metrics.network.type}`
//                         : "Unavailable"
//                     }
//                   />
//                   <DetailCard
//                     icon="💻"
//                     title="System Info"
//                     value={metrics.system ? metrics.system.platform : "Unavailable"}
//                   />
//                 </div>

//                 {/* CHART AREA (Optional Visualization) */}
//                 <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mt-10">
//                   <SystemUsageChart
//                     cpu={efficiencyScore || 0}
//                     memory={metrics.memory?.used || 0}
//                     disk={0} // no local disk info via browser
//                   />
//                 </div>
//               </>
//             ) : (
//               <p className="text-purple-400">Collecting browser metrics...</p>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ---------------------- DETAIL CARD ---------------------- */
// function DetailCard({ icon, title, value }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border border-gray-300 shadow hover:shadow-lg transition-all duration-300 min-h-[90px]">
//       <div className="flex items-start space-x-4">
//         <div className="p-3 rounded-full bg-gray-200 text-purple-800 text-2xl shadow">
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h4 className="text-purple-800 text-sm font-bold uppercase tracking-wide">
//             {title}
//           </h4>
//           <p className="text-purple-700 mt-1 break-words font-semibold whitespace-normal text-sm">
//             {value}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getSystemMetrics } from "../api/systemAPI";
// import SystemUsageChart from "../components/charts/SystemUsageChart";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// export default function Dashboard() {
//   const [metrics, setMetrics] = useState(null);
//   const [status, setStatus] = useState("Loading...");
//   const [lastUpdated, setLastUpdated] = useState(null);

//   // NEW STATES FOR PHASE 2
//   const [efficiencyScore, setEfficiencyScore] = useState(null);
//   const [aiTips, setAiTips] = useState([]);

//   const fetchMetrics = async () => {
//     try {
//       const data = await getSystemMetrics();
//       setMetrics(data);
//       updateStatus(data);
//       setLastUpdated(new Date().toLocaleTimeString());
//     } catch (error) {
//       console.error("Error fetching system metrics:", error);
//     }
//   };

//   const logMetrics = async () => {
//     try {
//       await fetch("http://127.0.0.1:8000/system/log", { method: "POST" });
//     } catch (error) {
//       console.error("Error logging system metrics:", error);
//     }
//   };

//   // 🌐 NEW FUNCTION — collect browser metrics and get AI tips
//   const sendBrowserMetrics = async () => {
//     try {
//       const battery = await navigator.getBattery();
//       const memory = performance.memory || {};
//       const network = navigator.connection || {};

//       const userMetrics = {
//         battery: { level: battery.level },
//         memory: {
//           usedJSHeapSize: memory.usedJSHeapSize || 0,
//           totalJSHeapSize: memory.totalJSHeapSize || 1,
//         },
//         network: {
//           downlink: network.downlink || 0,
//           effectiveType: network.effectiveType || "unknown",
//         },
//       };

//       const response = await fetch("http://127.0.0.1:8000/api/metrics", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userMetrics),
//       });

//       const result = await response.json();
//       setEfficiencyScore(result.efficiency_score);
//       setAiTips(result.ai_tips);
//     } catch (err) {
//       console.error("Error sending browser metrics:", err);
//     }
//   };

//   const updateStatus = (data) => {
//     const cpu = data.cpu_usage || 0;
//     const memory = data.memory?.percent || 0;
//     const disk = data.disk?.percent || 0;

//     if (cpu > 90 || memory > 90 || disk > 90) setStatus("High Resource Usage");
//     else if (cpu > 80 || memory > 80 || disk > 80) setStatus("Moderate Load");
//     else setStatus("System Stable");
//   };

//   useEffect(() => {
//     fetchMetrics();
//     logMetrics();
//     sendBrowserMetrics(); // fetch browser-based data on load
//     const interval = setInterval(() => {
//       fetchMetrics();
//       logMetrics();
//       sendBrowserMetrics(); // also refresh tips
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex min-h-screen w-full text-purple-800 bg-white overflow-hidden">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
//         <Navbar />
//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-extrabold mb-6 tracking-wide text-purple-800">
//               System Dashboard
//             </h2>

//             {/* Status Banner */}
//             <div className="bg-white rounded-xl p-4 mb-6 shadow border border-gray-300">
//               <p className="text-lg font-semibold text-purple-800">{status}</p>
//               {lastUpdated && (
//                 <p className="text-sm text-purple-400 mt-1">
//                   Last Updated: {lastUpdated}
//                 </p>
//               )}
//             </div>

//             {/* NEW: AI Efficiency and Tips Section */}
//             {efficiencyScore !== null && (
//               <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow mb-8">
//                 <h3 className="text-xl font-bold text-purple-800 mb-3">
//                    AI Efficiency Insights
//                 </h3>
//                 <p className="text-lg font-semibold text-purple-700">
//                   Efficiency Score:{" "}
//                   <span className="text-purple-900 text-2xl font-bold">
//                     {efficiencyScore}%
//                   </span>
//                 </p>
//                 {/* <ul className="list-disc list-inside mt-3 space-y-2 text-purple-700">
//                   {aiTips.map((tip, index) => (
//                     <li key={index}>{tip}</li>
//                   ))}
//                 </ul> */}

//                 {Array.isArray(aiTips) && aiTips.length > 0 ? (
//   <ul className=" list-inside mt-3 space-y-2 text-purple-700">
//     {aiTips.map((tip, index) => (
//       <li key={index}>{tip}</li>
//     ))}
//   </ul>
// ) : (
//   <p className="text-purple-500 mt-2">No AI tips available yet...</p>
// )}

//               </div>
//             )}

//             {/* System Info */}
//             {metrics?.system_info && (
//               <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mb-6">
//                 <h4 className="text-purple-800 text-md font-bold uppercase tracking-wide mb-2">
//                   System Information
//                 </h4>
//                 <p className="text-purple-600 font-semibold text-sm">
//                   {`${metrics.system_info.os}, ${metrics.system_info.cpu}, ${metrics.system_info.ram} GB RAM`}
//                 </p>
//               </div>
//             )}

//             {!metrics ? (
//               <p className="text-purple-400">Loading system metrics...</p>
//             ) : (
//               <>
//                 {/* Summary Metrics */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//                   <DetailCard icon="💻" title="CPU Usage" value={`${metrics.cpu_usage || 0}%`} />
//                   <DetailCard icon="🧠" title="Memory Usage" value={`${metrics.memory?.percent || 0}%`} />
//                   <DetailCard icon="💾" title="Disk Usage" value={`${metrics.disk?.percent || 0}%`} />
//                   <DetailCard icon="⏱️" title="System Uptime" value={metrics.uptime || "N/A"} />
//                 </div>

//                 {/* Monitoring Panel */}
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <DetailCard
//                     icon="🗄️"
//                     title="Drives Information"
//                     value={
//                       <div className="overflow-x-auto whitespace-nowrap text-purple-600">
//                         {/* {metrics.drives
//                           ? metrics.drives.map((d) => (
//                               <span key={d.device} className="inline-block mr-4">
//                                 {`${d.device}: ${d.used}/${d.total} GB`}
//                               </span>
//                             ))
//                           : "Not Available"} */}

//                           {Array.isArray(metrics.drives) && metrics.drives.length > 0 ? (
//   metrics.drives.map((d) => (
//     <span key={d.device} className="inline-block mr-4">
//       {`${d.device}: ${d.used}/${d.total} GB`}
//     </span>
//   ))
// ) : (
//   <span>Not Available</span>
// )}

//                       </div>
//                     }
//                   />
//                   <DetailCard icon="🌐" title="Network Sent" value={`${metrics.network?.sent_mb?.toFixed(2) || 0} MB`} />
//                   <DetailCard icon="📥" title="Network Received" value={`${metrics.network?.recv_mb?.toFixed(2) || 0} MB`} />
//                   <DetailCard icon="⚙️" title="Active Processes" value={`${metrics.process_count || 0}`} />
//                   <DetailCard icon="🔋" title="Battery" value={metrics.battery?.percent !== null ? `${metrics.battery.percent}% ${metrics.battery.charging ? "(Charging)" : "(Discharging)"}` : "Not Available"} />
//                   <DetailCard icon="📊" title="Disk I/O Stats" value={metrics.disk_io ? Object.entries(metrics.disk_io).map(([disk, io]) => `${disk}: R ${io.read_mb} MB / W ${io.write_mb} MB`).join(" | ") : "Not Available"} />
//                 </div>

//                 {/* Chart Section */}
//                 <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mt-10">
//                   <SystemUsageChart
//                     cpu={metrics.cpu_usage || 0}
//                     memory={metrics.memory?.percent || 0}
//                     disk={metrics.disk?.percent || 0}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ---------------------- COMPONENTS ---------------------- */
// function DetailCard({ icon, title, value }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border border-gray-300 shadow hover:shadow-lg transition-all duration-300 min-h-[90px]">
//       <div className="flex items-start space-x-4">
//         <div className="p-3 rounded-full bg-gray-200 text-purple-800 text-2xl shadow">
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h4 className="text-purple-800 text-sm font-bold uppercase tracking-wide">
//             {title}
//           </h4>
//           <p className="text-purple-700 mt-1 break-words font-semibold whitespace-normal text-sm">
//             {value}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { getSystemMetrics } from "../api/systemAPI";
import SystemUsageChart from "../components/charts/SystemUsageChart";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [status, setStatus] = useState("Loading...");
  const [lastUpdated, setLastUpdated] = useState(null);

  // NEW STATES
  const [efficiencyScore, setEfficiencyScore] = useState(null);
  const [aiTips, setAiTips] = useState([]);
  const [agentConnected, setAgentConnected] = useState(false); // NEW

  const fetchMetrics = async () => {
    try {
      const data = await getSystemMetrics();
      setMetrics(data);
      updateStatus(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Error fetching system metrics:", error);
    }
  };

  // const checkLocalAgent = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/system/log", { method: "POST" });
  //     if (response.ok) {
  //       setAgentConnected(true);
  //     } else {
  //       setAgentConnected(false);
  //     }
  //   } catch {
  //     setAgentConnected(false);
  //   }
  // };

   const checkLocalAgent = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/system/log");
      if (!response.ok) throw new Error("Bad response");
      const data = await response.json();
      if (data.agent_detected === true) {
        setAgentConnected(true);
      } else {
        setAgentConnected(false);
      }
    } catch {
      setAgentConnected(false);
    }
  };

  const sendBrowserMetrics = async () => {
    try {
      const battery = await navigator.getBattery();
      const memory = performance.memory || {};
      const network = navigator.connection || {};

      const userMetrics = {
        source: "browser",
        battery: { level: battery.level },
        memory: {
          usedJSHeapSize: memory.usedJSHeapSize || 0,
          totalJSHeapSize: memory.totalJSHeapSize || 1,
        },
        network: {
          downlink: network.downlink || 0,
          effectiveType: network.effectiveType || "unknown",
        },
      };

      const response = await fetch("http://127.0.0.1:8000/api/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userMetrics),
      });

      const result = await response.json();
      setEfficiencyScore(result.efficiency_score);
      setAiTips(result.ai_tips);
    } catch (err) {
      console.error("Error sending browser metrics:", err);
    }
  };

  const updateStatus = (data) => {
    const cpu = data.cpu_usage || 0;
    const memory = data.memory?.percent || 0;
    const disk = data.disk?.percent || 0;

    if (cpu > 90 || memory > 90 || disk > 90) setStatus("High Resource Usage");
    else if (cpu > 80 || memory > 80 || disk > 80) setStatus("Moderate Load");
    else setStatus("System Stable");
  };

  useEffect(() => {
    fetchMetrics();
    checkLocalAgent(); // 🟣 detect agent
    sendBrowserMetrics();

    const interval = setInterval(() => {
      fetchMetrics();
      checkLocalAgent();
      sendBrowserMetrics();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full text-purple-800 bg-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
        <Navbar />
        <main className="flex-1 pt-12 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6 tracking-wide text-purple-800">
              System Dashboard
            </h2>

            {/* Status Banner */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow border border-gray-300">
              <p className="text-lg font-semibold text-purple-800">{status}</p>
              {lastUpdated && (
                <p className="text-sm text-purple-400 mt-1">
                  Last Updated: {lastUpdated}
                </p>
              )}
            </div>

            {/* NEW: Local Agent Connection Status */}
            <div
              className={`rounded-xl p-4 mb-6 shadow border ${
                agentConnected
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              <p
                className={`text-lg font-semibold ${
                  agentConnected ? "text-green-700" : "text-red-700"
                }`}
              >
                {agentConnected
                  ? "✅ Local Agent Connected"
                  : "❌ Local Agent Not Detected"}
              </p>
              {!agentConnected && (
                <p className="text-sm text-gray-500 mt-1">
                  Run the local agent script to fetch detailed system metrics.
                </p>
              )}
            </div>

            {/* AI Efficiency Section */}
            {efficiencyScore !== null && (
              <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow mb-8">
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  AI Efficiency Insights
                </h3>
                <p className="text-lg font-semibold text-purple-700">
                  Efficiency Score:{" "}
                  <span className="text-purple-900 text-2xl font-bold">
                    {efficiencyScore}%
                  </span>
                </p>
                {Array.isArray(aiTips) && aiTips.length > 0 ? (
                  <ul className="list-inside mt-3 space-y-2 text-purple-700">
                    {aiTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-purple-500 mt-2">No AI tips available yet...</p>
                )}
              </div>
            )}

            {/* Existing sections remain unchanged */}
            {metrics?.system_info && (
              <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mb-6">
                <h4 className="text-purple-800 text-md font-bold uppercase tracking-wide mb-2">
                  System Information
                </h4>
                <p className="text-purple-600 font-semibold text-sm">
                  {`${metrics.system_info.os}, ${metrics.system_info.cpu}, ${metrics.system_info.ram} GB RAM`}
                </p>
              </div>
            )}

            {!metrics ? (
              <p className="text-purple-400">Loading system metrics...</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  <DetailCard icon="💻" title="CPU Usage" value={`${metrics.cpu_usage || 0}%`} />
                  <DetailCard icon="🧠" title="Memory Usage" value={`${metrics.memory?.percent || 0}%`} />
                  <DetailCard icon="💾" title="Disk Usage" value={`${metrics.disk?.percent || 0}%`} />
                  <DetailCard icon="⏱️" title="System Uptime" value={metrics.uptime || "N/A"} />
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <DetailCard
                    icon="🗄️"
                    title="Drives Information"
                    value={
                      <div className="overflow-x-auto whitespace-nowrap text-purple-600">
                        {Array.isArray(metrics.drives) && metrics.drives.length > 0 ? (
                          metrics.drives.map((d) => (
                            <span key={d.device} className="inline-block mr-4">
                              {`${d.device}: ${d.used}/${d.total} GB`}
                            </span>
                          ))
                        ) : (
                          <span>Not Available</span>
                        )}
                      </div>
                    }
                  />
                  <DetailCard icon="🌐" title="Network Sent" value={`${metrics.network?.sent_mb?.toFixed(2) || 0} MB`} />
                  <DetailCard icon="📥" title="Network Received" value={`${metrics.network?.recv_mb?.toFixed(2) || 0} MB`} />
                  <DetailCard icon="⚙️" title="Active Processes" value={`${metrics.process_count || 0}`} />
                  <DetailCard icon="🔋" title="Battery" value={metrics.battery?.percent !== null ? `${metrics.battery.percent}% ${metrics.battery.charging ? "(Charging)" : "(Discharging)"}` : "Not Available"} />
                  <DetailCard icon="📊" title="Disk I/O Stats" value={metrics.disk_io ? Object.entries(metrics.disk_io).map(([disk, io]) => `${disk}: R ${io.read_mb} MB / W ${io.write_mb} MB`).join(" | ") : "Not Available"} />
                </div>

                <div className="bg-white p-5 rounded-xl shadow border border-gray-300 mt-10 mb-20">
                  <SystemUsageChart
                    cpu={metrics.cpu_usage || 0}
                    memory={metrics.memory?.percent || 0}
                    disk={metrics.disk?.percent || 0}
                  />
                </div>
              </>
            )}


            {/* Footer */}
            <footer className="border-t border-purple-200 pt-8 text-center text-sm text-purple-400">
              © 2025 Smart Energy Monitoring System. Built by Suhani.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

function DetailCard({ icon, title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-300 shadow hover:shadow-lg transition-all duration-300 min-h-[90px]">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-gray-200 text-purple-800 text-2xl shadow">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-purple-800 text-sm font-bold uppercase tracking-wide">
            {title}
          </h4>
          <p className="text-purple-700 mt-1 break-words font-semibold whitespace-normal text-sm">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
