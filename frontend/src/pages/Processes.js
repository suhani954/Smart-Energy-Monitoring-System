// // import React, { useEffect, useState } from "react";
// // import { Bar } from "react-chartjs-2";
// // import "chart.js/auto";
// // import { motion } from "framer-motion";
// // import axios from "axios";
// // import Sidebar from "../components/layout/Sidebar";
// // import Navbar from "../components/layout/Navbar";

// // export default function Processes() {
// //   const [processes, setProcesses] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [batteryData, setBatteryData] = useState([]);

// //   const fetchProcesses = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.get("http://localhost:8000/processes/latest");
// //       if (response.data.processes) {
// //         setProcesses(response.data.processes);
// //         setMessage("Latest process data fetched successfully!");
// //       } else {
// //         setMessage("No process data available.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching process data:", error);
// //       setMessage("Error fetching process data from backend.");
// //       setProcesses([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const logNewProcesses = async () => {
// //     setLoading(true);
// //     try {
// //       await axios.post("http://localhost:8000/processes/log");
// //       setMessage("New process data logged successfully!");
// //       fetchProcesses();
// //     } catch (error) {
// //       console.error("Error logging processes:", error);
// //       setMessage("Error logging new process data.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProcesses();
// //   }, []);

// //   const getStatus = (usage) => {
// //     if (usage > 80) return "Overload";
// //     if (usage > 50) return "Active";
// //     return "Idle";
// //   };

// //   const getStatusColor = (usage) => {
// //     if (usage > 80) return "bg-red-500";
// //     if (usage > 50) return "bg-green-500";
// //     return "bg-yellow-400";
// //   };

// //   const getRecommendation = (usage, efficiency) => {
// //     if (usage > 85 && efficiency < 60)
// //       return "High load with low efficiency — consider maintenance or load balancing.";
// //     if (efficiency > 80)
// //       return "Excellent efficiency — system performing well.";
// //     if (usage < 40)
// //       return "Process underutilized — check scheduling or usage pattern.";
// //     return "Normal operating conditions.";
// //   };

// //   const processNames = processes.map((p) => p.name || "Unknown");
// //   const processUsages = processes.map((p) => p.cpu_percent || 0);

// //   const chartData = {
// //     labels: processNames,
// //     datasets: [
// //       {
// //         label: "CPU Usage (%)",
// //         data: processUsages,
// //         backgroundColor: "rgba(143, 20, 209, 0.7)",
// //         borderColor: "rgba(143, 20, 209, 0.7)",
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const chartOptions = {
// //     indexAxis: "y",
// //     responsive: true,
// //     plugins: {
// //       legend: { display: false },
// //       title: { display: true, text: "Process CPU Usage Comparison", font: { size: 16 }, color: "#000" },
// //     },
// //     scales: {
// //       x: { max: 100, ticks: { color: "#000" } },
// //       y: { ticks: { color: "#000" } },
// //     },
// //   };

// //   return (
// //     <div className="flex min-h-screen w-full overflow-hidden text-gray-100">
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className={"flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto"}>
// //         <Navbar />

// //       <main className="flex-1 pt-12 overflow-y-auto">  
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-3xl font-extrabold tracking-tight text-white text-center mb-6">
// //           Energy Processes Dashboard
// //         </h1>

// //         {/* Log Data Button */}
// //         <div className="flex justify-center mb-6">
// //           <button
// //             onClick={logNewProcesses}
// //             disabled={loading}
// //             className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
// //               loading ? "bg-gray-400 cursor-not-allowed text-white" : "bg-white text-indigo-800 hover:scale-105"
// //             }`}
// //           >
// //             {loading ? "Processing..." : "Log New Data"}
// //           </button>
// //         </div>

// //         {/* Status Message */}
// //         {message && (
// //           <p className="text-center text-white mb-6 bg-white/10 py-2 rounded-md">
// //             {message}
// //           </p>
// //         )}

// //         {/* Cards Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
// //           {processes.map((process, index) => (
// //             <motion.div
// //               key={index}
// //               className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:shadow-lg transition-all"
// //               whileHover={{ scale: 1.03 }}
// //             >
// //               <h2 className="text-lg font-semibold text-white">{process.name || "Unknown"}</h2>
// //               <p className="text-sm text-indigo-200">CPU Usage: {process.cpu_percent ?? 0}%</p>
// //               <p
// //                 className={`text-sm font-medium mt-1 ${getStatusColor(process.cpu_percent)} text-white inline-block px-3 py-1 rounded-full`}
// //               >
// //                 {getStatus(process.cpu_percent)}
// //               </p>

// //               {/* Memory Usage */}
// //               <div className="mt-2">
// //                 <p className="text-sm text-indigo-200 mb-1">
// //                   Memory Usage: {process.memory_percent ?? 0}%
// //                 </p>
// //                 <div className="w-full bg-white/10 rounded-full h-2.5">
// //                   <div
// //                     className={`h-2.5 rounded-full ${
// //                       process.memory_percent > 80
// //                         ? "bg-red-500"
// //                         : process.memory_percent > 50
// //                         ? "bg-yellow-400"
// //                         : "bg-green-500"
// //                     }`}
// //                     style={{ width: `${process.memory_percent ?? 0}%` }}
// //                   ></div>
// //                 </div>
// //               </div>

// //               <p className="text-xs text-indigo-200 mt-3">
// //                 {getRecommendation(process.cpu_percent, process.memory_percent)}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Comparison Chart */}
// //         <div className="bg-white/6 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/10">
// //         <div className="bg-white/100 backdrop-blur-sm rounded-2xl shadow-lg p-6">
// //           <Bar data={chartData} options={chartOptions} />
// //         </div>
// //         </div>
// //       </div>
// //       </main>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import { motion } from "framer-motion";
// import axios from "axios";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// export default function Processes() {
//   const [processes, setProcesses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [batteryData, setBatteryData] = useState([]);

//   const fetchProcesses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8000/processes/latest");
//       if (response.data.processes) {
//         setProcesses(response.data.processes);
//         setMessage("Latest process data fetched successfully!");
//       } else {
//         setMessage("No process data available.");
//       }
//     } catch (error) {
//       console.error("Error fetching process data:", error);
//       setMessage("Error fetching process data from backend.");
//       setProcesses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logNewProcesses = async () => {
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:8000/processes/log");
//       setMessage("New process data logged successfully!");
//       fetchProcesses();
//     } catch (error) {
//       console.error("Error logging processes:", error);
//       setMessage("Error logging new process data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProcesses();
//   }, []);

//   const getStatus = (usage) => {
//     if (usage > 80) return "Overload";
//     if (usage > 50) return "Active";
//     return "Idle";
//   };

//   const getStatusColor = (usage) => {
//     if (usage > 80) return "bg-red-500";
//     if (usage > 50) return "bg-green-500";
//     return "bg-yellow-400";
//   };

//   const getRecommendation = (usage, efficiency) => {
//     if (usage > 85 && efficiency < 60)
//       return "High load with low efficiency — consider maintenance or load balancing.";
//     if (efficiency > 80) return "Excellent efficiency — system performing well.";
//     if (usage < 40) return "Process underutilized — check scheduling or usage pattern.";
//     return "Normal operating conditions.";
//   };

//   const processNames = processes.map((p) => p.name || "Unknown");
//   const processUsages = processes.map((p) => p.cpu_percent || 0);

//   const chartData = {
//     labels: processNames,
//     datasets: [
//       {
//         label: "CPU Usage (%)",
//         data: processUsages,
//         backgroundColor: "rgba(143, 20, 209, 0.7)",
//         borderColor: "rgba(143, 20, 209, 0.7)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       title: { display: true, text: "Process CPU Usage Comparison", font: { size: 16 }, color: "#8F14D1" },
//     },
//     scales: {
//       x: { max: 100, ticks: { color: "#8F14D1" } },
//       y: { ticks: { color: "#8F14D1" } },
//     },
//   };

//   return (
//     <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 overflow-y-auto">
//         <Navbar />

//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
//               Energy Processes Dashboard
//             </h1>

//             {/* Log Data Button */}
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={logNewProcesses}
//                 disabled={loading}
//                 className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed text-white"
//                     : "bg-purple-700 text-white hover:scale-105"
//                 }`}
//               >
//                 {loading ? "Processing..." : "Log New Data"}
//               </button>
//             </div>

//             {/* Status Message */}
//             {message && (
//               <p className="text-center mb-6 bg-purple-50 text-purple-800 py-2 rounded-md">
//                 {message}
//               </p>
//             )}

//             {/* Cards Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//               {processes.map((process, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md hover:shadow-lg transition-all"
//                   whileHover={{ scale: 1.03 }}
//                 >
//                   <h2 className="text-lg font-semibold text-purple-800">{process.name || "Unknown"}</h2>
//                   <p className="text-sm text-purple-600">CPU Usage: {process.cpu_percent ?? 0}%</p>
//                   <p
//                     className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full text-white ${getStatusColor(
//                       process.cpu_percent
//                     )}`}
//                   >
//                     {getStatus(process.cpu_percent)}
//                   </p>

//                   {/* Memory Usage */}
//                   <div className="mt-2">
//                     <p className="text-sm text-purple-600 mb-1">
//                       Memory Usage: {process.memory_percent ?? 0}%
//                     </p>
//                     <div className="w-full bg-purple-50 rounded-full h-2.5">
//                       <div
//                         className={`h-2.5 rounded-full ${
//                           process.memory_percent > 80
//                             ? "bg-red-500"
//                             : process.memory_percent > 50
//                             ? "bg-yellow-400"
//                             : "bg-green-500"
//                         }`}
//                         style={{ width: `${process.memory_percent ?? 0}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   <p className="text-xs text-purple-600 mt-3">
//                     {getRecommendation(process.cpu_percent, process.memory_percent)}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Comparison Chart */}
//             <div className="bg-purple-50 p-5 rounded-xl shadow-lg border border-purple-200">
//               <div className="bg-white rounded-2xl shadow-md p-6">
//                 <Bar data={chartData} options={chartOptions} />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import { motion } from "framer-motion";
// import axios from "axios";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// export default function Processes() {
//   const [processes, setProcesses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [agentConnected, setAgentConnected] = useState(null);

//   // ✅ Check Local Agent connection first
//   const checkAgentStatus = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/system/agent-status");
//       if (res.data.agent_connected) {
//         setAgentConnected(true);
//         fetchProcesses();
//       } else {
//         setAgentConnected(false);
//         setMessage("⚠️ Local Agent not detected — unable to fetch processes.");
//       }
//     } catch (error) {
//       console.error("Error checking agent status:", error);
//       setAgentConnected(false);
//       setMessage("❌ Backend not reachable or Local Agent offline.");
//     }
//   };

//   // ✅ Fetch processes only if agent connected
//   const fetchProcesses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8000/processes/latest");
//       if (response.data.processes && response.data.processes.length > 0) {
//         setProcesses(response.data.processes);
//         setMessage("✅ Latest process data fetched successfully!");
//       } else {
//         setMessage("ℹ️ No process data available.");
//       }
//     } catch (error) {
//       console.error("Error fetching process data:", error);
//       setMessage("❌ Error fetching process data from backend.");
//       setProcesses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Log new process data
//   const logNewProcesses = async () => {
//     if (!agentConnected) {
//       setMessage("⚠️ Cannot log new data — Local Agent is not connected.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post("http://localhost:8000/processes/log");
//       setMessage("✅ New process data logged successfully!");
//       fetchProcesses();
//     } catch (error) {
//       console.error("Error logging processes:", error);
//       setMessage("❌ Error logging new process data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     checkAgentStatus();
//   }, []);

//   // ---------- UI Helper Functions ----------
//   const getStatus = (usage) => {
//     if (usage > 80) return "Overload";
//     if (usage > 50) return "Active";
//     return "Idle";
//   };

//   const getStatusColor = (usage) => {
//     if (usage > 80) return "bg-red-500";
//     if (usage > 50) return "bg-green-500";
//     return "bg-yellow-400";
//   };

//   const getRecommendation = (usage, efficiency) => {
//     if (usage > 85 && efficiency < 60)
//       return "High load with low efficiency — consider maintenance or load balancing.";
//     if (efficiency > 80)
//       return "Excellent efficiency — system performing well.";
//     if (usage < 40)
//       return "Process underutilized — check scheduling or usage pattern.";
//     return "Normal operating conditions.";
//   };

//   const processNames = processes.map((p) => p.name || "Unknown");
//   const processUsages = processes.map((p) => p.cpu_percent || 0);

//   const chartData = {
//     labels: processNames,
//     datasets: [
//       {
//         label: "CPU Usage (%)",
//         data: processUsages,
//         backgroundColor: "rgba(143, 20, 209, 0.7)",
//         borderColor: "rgba(143, 20, 209, 0.7)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "Process CPU Usage Comparison",
//         font: { size: 16 },
//         color: "#8F14D1",
//       },
//     },
//     scales: {
//       x: { max: 100, ticks: { color: "#8F14D1" } },
//       y: { ticks: { color: "#8F14D1" } },
//     },
//   };

//   // ---------- MAIN RENDER ----------
//   return (
//     <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 overflow-y-auto">
//         <Navbar />

//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
//               Energy Processes Dashboard
//             </h1>

//             {/* Log Data Button */}
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={logNewProcesses}
//                 disabled={loading || !agentConnected}
//                 className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
//                   loading || !agentConnected
//                     ? "bg-gray-400 cursor-not-allowed text-white"
//                     : "bg-purple-700 text-white hover:scale-105"
//                 }`}
//               >
//                 {loading
//                   ? "Processing..."
//                   : agentConnected
//                   ? "Log New Data"
//                   : "Agent Offline"}
//               </button>
//             </div>

//             {/* Status Message */}
//             {message && (
//               <p className="text-center mb-6 bg-purple-50 text-purple-800 py-2 rounded-md">
//                 {message}
//               </p>
//             )}

//             {/* Cards Section */}
//             {agentConnected && processes.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//                   {processes.map((process, index) => (
//                     <motion.div
//                       key={index}
//                       className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md hover:shadow-lg transition-all"
//                       whileHover={{ scale: 1.03 }}
//                     >
//                       <h2 className="text-lg font-semibold text-purple-800">
//                         {process.name || "Unknown"}
//                       </h2>
//                       <p className="text-sm text-purple-600">
//                         CPU Usage: {process.cpu_percent ?? 0}%
//                       </p>
//                       <p
//                         className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full text-white ${getStatusColor(
//                           process.cpu_percent
//                         )}`}
//                       >
//                         {getStatus(process.cpu_percent)}
//                       </p>

//                       {/* Memory Usage */}
//                       <div className="mt-2">
//                         <p className="text-sm text-purple-600 mb-1">
//                           Memory Usage: {process.memory_percent ?? 0}%
//                         </p>
//                         <div className="w-full bg-purple-50 rounded-full h-2.5">
//                           <div
//                             className={`h-2.5 rounded-full ${
//                               process.memory_percent > 80
//                                 ? "bg-red-500"
//                                 : process.memory_percent > 50
//                                 ? "bg-yellow-400"
//                                 : "bg-green-500"
//                             }`}
//                             style={{ width: `${process.memory_percent ?? 0}%` }}
//                           ></div>
//                         </div>
//                       </div>

//                       <p className="text-xs text-purple-600 mt-3">
//                         {getRecommendation(
//                           process.cpu_percent,
//                           process.memory_percent
//                         )}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Comparison Chart */}
//                 <div className="bg-purple-50 p-5 rounded-xl shadow-lg border border-purple-200">
//                   <div className="bg-white rounded-2xl shadow-md p-6">
//                     <Bar data={chartData} options={chartOptions} />
//                   </div>
//                 </div>
//               </>
//             ) : (
//               !loading &&
//               agentConnected && (
//                 <p className="text-center text-purple-700 mt-10">
//                   No process data available.
//                 </p>
//               )
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { motion } from "framer-motion";
import axios from "axios";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Processes() {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [agentConnected, setAgentConnected] = useState(false);

  // ✅ 1. Check if Local Agent is running
  const checkAgentStatus = async () => {
    try {
      const res = await axios.get("http://localhost:8000/system/log");
      if (res.data.agent_detected) {
        setAgentConnected(true);
        fetchProcesses();
      } else {
        setAgentConnected(false);
        setMessage("⚠️ Local Agent not detected — cannot fetch process data.");
      }
    } catch (error) {
      console.error("Error checking agent status:", error);
      setAgentConnected(false);
      setMessage("❌ Backend not reachable or Local Agent offline.");
    }
  };

  // ✅ 2. Fetch logged process data from MongoDB
  const fetchProcesses = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/processes/latest");
      if (res.data.processes && res.data.processes.length > 0) {
        setProcesses(res.data.processes);
        setMessage("✅ Latest logged process data fetched successfully!");
      } else {
        setMessage("ℹ️ No logged process data found. Please log data first.");
        setProcesses([]);
      }
    } catch (error) {
      console.error("Error fetching process data:", error);
      setMessage("❌ Failed to fetch process data from backend.");
      setProcesses([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 3. Manually log new process data via Local Agent
  const logNewProcesses = async () => {
    if (!agentConnected) {
      setMessage("⚠️ Cannot log new data — Local Agent is not connected.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/processes/log");
      setMessage(res.data.message || "✅ New process data logged successfully!");
      fetchProcesses();
    } catch (error) {
      console.error("Error logging processes:", error);
      setMessage("❌ Error logging new process data.");
    } finally {
      setLoading(false);
    }
  };

  // // Initial load
  // useEffect(() => {
  //   checkAgentStatus();
  // }, []);


  // Initial load + Auto-detect agent connection/disconnection in real time
useEffect(() => {
  checkAgentStatus(); // first run immediately

  const interval = setInterval(() => {
    checkAgentStatus();
  }, 5000); // check every 5 seconds

  return () => clearInterval(interval);
}, []);







  // ---------- UI Helper Functions ----------
  const getStatus = (usage) => {
    if (usage > 80) return "Overload";
    if (usage > 50) return "Active";
    return "Idle";
  };

  const getStatusColor = (usage) => {
    if (usage > 80) return "bg-red-500";
    if (usage > 50) return "bg-green-500";
    return "bg-yellow-400";
  };

  const getRecommendation = (usage, efficiency) => {
    if (usage > 85 && efficiency < 60)
      return "High load with low efficiency — consider maintenance or load balancing.";
    if (efficiency > 80)
      return "Excellent efficiency — system performing well.";
    if (usage < 40)
      return "Process underutilized — check scheduling or usage pattern.";
    return "Normal operating conditions.";
  };

  // Chart data setup
  const processNames = processes.map((p) => p.name || "Unknown");
  const processUsages = processes.map((p) => p.cpu_percent || 0);

  const chartData = {
    labels: processNames,
    datasets: [
      {
        label: "CPU Usage (%)",
        data: processUsages,
        backgroundColor: "rgba(143, 20, 209, 0.7)",
        borderColor: "rgba(143, 20, 209, 0.7)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Process CPU Usage Comparison",
        font: { size: 16 },
        color: "#8F14D1",
      },
    },
    scales: {
      x: { max: 100, ticks: { color: "#8F14D1" } },
      y: { ticks: { color: "#8F14D1" } },
    },
  };

  // ---------- MAIN RENDER ----------
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
      <Sidebar />

      <div className="flex-1 p-6 ml-56 overflow-y-auto">
        <Navbar />

        <main className="flex-1 pt-12 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
              Energy Processes Dashboard
            </h1>


            <div className="text-center mb-4">
  <span
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
      agentConnected ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
    }`}
  >
    {agentConnected ? "🟢 Local Agent Connected" : "🔴 Local Agent Disconnected"}
  </span>
</div>



            {/* Log Data Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={logNewProcesses}
                disabled={loading || !agentConnected}
                className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
                  loading || !agentConnected
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-purple-700 text-white hover:scale-105"
                }`}
              >
                {loading
                  ? "Processing..."
                  : agentConnected
                  ? "Log New Data"
                  : "Agent Offline"}
              </button>
            </div>

            {/* Status Message */}
            {message && (
              <p className="text-center mb-6 bg-purple-50 text-purple-800 py-2 rounded-md">
                {message}
              </p>
            )}

            {/* Data Cards & Chart */}
            {agentConnected && processes.length > 0 ? (
              <>
                {/* Process Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {processes.map((process, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.03 }}
                    >
                      <h2 className="text-lg font-semibold text-purple-800">
                        {process.name || "Unknown"}
                      </h2>
                      <p className="text-sm text-purple-600">
                        CPU Usage: {process.cpu_percent ?? 0}%
                      </p>
                      <p
                        className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full text-white ${getStatusColor(
                          process.cpu_percent
                        )}`}
                      >
                        {getStatus(process.cpu_percent)}
                      </p>

                      {/* Memory Usage */}
                      <div className="mt-2">
                        <p className="text-sm text-purple-600 mb-1">
                          Memory Usage: {process.memory_percent ?? 0}%
                        </p>
                        <div className="w-full bg-purple-50 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              process.memory_percent > 80
                                ? "bg-red-500"
                                : process.memory_percent > 50
                                ? "bg-yellow-400"
                                : "bg-green-500"
                            }`}
                            style={{
                              width: `${process.memory_percent ?? 0}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <p className="text-xs text-purple-600 mt-3">
                        {getRecommendation(
                          process.cpu_percent,
                          process.memory_percent
                        )}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-purple-50 p-5 rounded-xl shadow-lg border border-purple-200">
                  <div className="bg-white rounded-2xl shadow-md p-6">
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                </div>
              </>
            ) : (
              !loading &&
              agentConnected && (
                <p className="text-center text-purple-700 mt-10">
                  No logged process data available. Please log data first.
                </p>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
