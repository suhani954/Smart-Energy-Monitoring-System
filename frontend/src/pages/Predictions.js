// import { useEffect, useState } from "react";
// import { predictBatteryLife, detectHighConsumers } from "../api/predictAPI";
// import BatteryChart from "../components/charts/BatteryChart";
// import HighConsumersChart from "../components/charts/HighConsumersChart";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// const getBatteryStatusText = (value, charging) => {
//   if (value == null) return "Battery data unavailable";

//   if (charging) {
//     if (value >= 90) return "Charging complete — battery almost full";
//     if (value >= 80) return "Charging — nearly topped up";
//     if (value >= 70) return "Charging — good battery health";
//     if (value >= 60) return "Charging — battery improving";
//     if (value >= 50) return "Charging — half charged";
//     if (value >= 40) return "Charging — recovering from low levels";
//     if (value >= 30) return "Charging — battery low";
//     if (value >= 20) return "Charging — still very low";
//     if (value >= 10) return "Charging started — critically low";
//     return "Battery critically low — charging initiated";
//   } else {
//     if (value >= 90) return "Battery full — running efficiently";
//     if (value >= 80) return "Battery excellent — smooth performance";
//     if (value >= 70) return "Battery good — sufficient backup";
//     if (value >= 60) return "Battery moderate — consider charging soon";
//     if (value >= 50) return "Battery getting low — recharge recommended";
//     if (value >= 40) return "Battery low — performance may reduce";
//     if (value >= 30) return "Battery very low — plug in soon";
//     if (value >= 20) return "Battery critical — plug in urgently";
//     if (value >= 10) return "Battery dangerously low — almost empty";
//     return "Battery nearly dead — charge immediately";
//   }
// };

// export default function Predictions() {
//   const [batteryLife, setBatteryLife] = useState(null);
//   const [predictedBattery, setPredictedBattery] = useState(null);
//   const [batteryStats, setBatteryStats] = useState({});
//   const [topN, setTopN] = useState(5);
//   const [topCPU, setTopCPU] = useState([]);
//   const [topMemory, setTopMemory] = useState([]);
//   const [avgCPU, setAvgCPU] = useState(0);
//   const [avgMemory, setAvgMemory] = useState(0);
//   const [warnings, setWarnings] = useState([]);
//   const [tips, setTips] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     fetchPredictions();
//     const interval = setInterval(fetchPredictions, 10000);
//     return () => clearInterval(interval);
//   }, [topN]);

//   const fetchPredictions = async () => {
//     try {
//       const batteryData = await predictBatteryLife();
//       const consumerData = await detectHighConsumers();
//       const latestConsumers = consumerData.high_consumers ?? [];

//       const actual = batteryData.actual_battery_level ?? 0;
//       const predicted =
//         batteryData.predicted_battery ?? batteryData.predicted_battery_life ?? 0;

//       setBatteryLife(actual);
//       setPredictedBattery(predicted);

//       const delta = actual - predicted;
//       const avgDischargeRatePerHour = Math.abs(delta * 360);
//       const nextHourPrediction = Math.max(actual - avgDischargeRatePerHour, 0);

//       const isCharging = batteryData.charging_status === "Charging";
//       const statusMessage = getBatteryStatusText(actual, isCharging);

//       setBatteryStats({
//         statusMessage,
//         batteryHealth:
//           actual >= 90 ? "Excellent" : actual >= 70 ? "Good" : actual >= 50 ? "Moderate" : "Poor",
//         avgDischargeRatePerHour: avgDischargeRatePerHour.toFixed(1),
//         nextHourPrediction: nextHourPrediction.toFixed(1),
//         efficiencyMessage:
//           Math.abs(actual - predicted) < 2
//             ? "Battery efficiency stable."
//             : "Noticeable change detected — monitor load.",
//         comparisonMessage:
//           predicted < actual
//             ? "Predicted to discharge slightly."
//             : "Predicted to remain stable or increase.",
//         recommendations:
//           actual < 40
//             ? ["Reduce non-critical loads to extend run-time.", "Schedule charging during solar peak hours (2–4 PM)."]
//             : ["Battery performance normal.", "Continue monitoring every 10s."],
//       });

//       // === High Consumers ===
//       const filteredCPU = latestConsumers.filter(c => c.cpu_percent !== undefined && c.name !== "System Idle Process");
//       const filteredMemory = latestConsumers.filter(c => c.memory_percent !== undefined && c.name !== "System Idle Process");

//       const sortedCPU = filteredCPU
//         .sort((a, b) => b.cpu_percent - a.cpu_percent)
//         .slice(0, topN)
//         .map(c => ({ ...c, cpu_percent: Number(c.cpu_percent.toFixed(1)) }));

//       const sortedMemory = filteredMemory
//         .sort((a, b) => b.memory_percent - a.memory_percent)
//         .slice(0, topN)
//         .map(c => ({ ...c, memory_percent: Number(c.memory_percent.toFixed(1)) }));

//       const padArray = (arr, metric) => {
//         const result = [...arr];
//         while (result.length < topN) {
//           const empty = { name: "-", cpu_percent: 0, memory_percent: 0 };
//           if (metric === "cpu") empty.memory_percent = undefined;
//           if (metric === "memory") empty.cpu_percent = undefined;
//           result.push(empty);
//         }
//         return result.slice(0, topN);
//       };

//       setTopCPU(padArray(sortedCPU, "cpu"));
//       setTopMemory(padArray(sortedMemory, "memory"));

//       const avgCpuVal = sortedCPU.reduce((sum, c) => sum + (c.cpu_percent ?? 0), 0) / (sortedCPU.length || 1);
//       const avgMemVal = sortedMemory.reduce((sum, c) => sum + (c.memory_percent ?? 0), 0) / (sortedMemory.length || 1);
//       setAvgCPU(Number(avgCpuVal.toFixed(1)));
//       setAvgMemory(Number(avgMemVal.toFixed(1)));

//       setWarnings([
//         ...sortedCPU.filter(c => c.cpu_percent > 100),
//         ...sortedMemory.filter(c => c.memory_percent > 80),
//       ]);

//       const generatedTips = [...sortedCPU, ...sortedMemory]
//         .map(c => {
//           let tip = "";
//           if (c.cpu_percent > 80) tip += `CPU high (${c.cpu_percent}%) `;
//           if (c.memory_percent > 60) tip += `Memory high (${c.memory_percent}%)`;
//           return tip ? `Check ${c.name} — ${tip}` : null;
//         })
//         .filter(Boolean);
//       setTips(generatedTips);

//       setLastUpdated(new Date());
//     } catch (error) {
//       console.error("Error fetching predictions:", error);
//     }
//   };

//   const formatTime = date => (date ? date.toLocaleTimeString() : "");

//   const downloadPDF = async () => {
//     try {
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pageWidth = 210;
//       const margin = 12;
//       const title = "AI Energy Advisor Report";
//       const timestamp = new Date().toLocaleString();

//       const nodes = [
//         document.querySelector(".battery-card-container"),
//         document.querySelector(".high-consumer-report")
//       ];

//       for (const node of nodes) {
//         if (!node) continue;
//         const canvas = await html2canvas(node, { scale: 2 });
//         const imgData = canvas.toDataURL("image/png");
//         const imgWidth = pageWidth - margin * 2;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;
//         pdf.addImage(imgData, "PNG", margin, 25, imgWidth, imgHeight);
//         pdf.addPage();
//       }

//       const totalPages = pdf.getNumberOfPages();
//       for (let i = 1; i <= totalPages; i++) {
//         pdf.setPage(i);
//         pdf.setFontSize(12);
//         pdf.setTextColor(40);
//         pdf.setFont("helvetica", "bold");
//         pdf.text(title, margin, 12);
//         pdf.setFontSize(9);
//         pdf.setFont("helvetica", "normal");
//         pdf.text(`Generated: ${timestamp}`, pageWidth - margin, 12, { align: "right" });
//         pdf.setFontSize(8);
//         pdf.setTextColor(120);
//         pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, 287, { align: "right" });
//       }

//       pdf.save(`Predictions_Report_${new Date().toISOString()}.pdf`);
//     } catch (err) {
//       console.error("PDF generation error:", err);
//     }
//   };

//   return (
//     <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 overflow-y-auto">
//         <Navbar />

//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-3xl font-extrabold tracking-tight text-purple-800">Predictions</h1>
//                 <p className="text-sm text-purple-600 mt-1">Real-time battery & system consumer insights — auto-refresh every 10s</p>
//               </div>
//               <div className="text-sm text-purple-600">
//                 Last updated: <span className="font-medium">{formatTime(lastUpdated)}</span>
//               </div>
//             </div>

//             {/* Battery Card + Chart */}
//             <div className="battery-card-container bg-white rounded-2xl shadow-md p-6 mb-6">
//               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
//                 <div className="flex-1">
//                   <h2 className="text-xl font-semibold text-purple-800 mb-2">Battery Insights</h2>
//                   <p className="text-sm text-purple-600 mb-4">Live actual and predicted battery values synced with the chart.</p>

//                   <div className="flex flex-wrap gap-3 mb-4">
//                     <DetailInfo title="Actual" value={`${batteryLife ?? "--"}%`} />
//                     <DetailInfo title="Predicted" value={`${predictedBattery ?? "--"}%`} />
//                     <DetailInfo title="Health" value={batteryStats.batteryHealth} />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
//                     <InfoCard title="Status" value={batteryStats.statusMessage} />
//                     <InfoCard title="Efficiency" value={batteryStats.efficiencyMessage} />
//                     <InfoCard title="Comparison" value={batteryStats.comparisonMessage} />
//                   </div>

//                   <div className="p-3 bg-purple-50 rounded-lg mb-5">
//                     <p className="text-sm font-semibold mb-2">Recommendations</p>
//                     <ul className="list-disc ml-5 text-sm space-y-1">
//                       {batteryStats.recommendations?.map((r, idx) => <li key={idx}>{r}</li>)}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="w-36 flex-shrink-0 flex flex-col items-center justify-center mt-4 lg:mt-0">
//                   <div className="w-28 h-28 rounded-full flex items-center justify-center bg-purple-100 p-1 shadow-inner transform transition-transform duration-500">
//                     <div className="w-full h-full rounded-full bg-white/20 flex flex-col items-center justify-center">
//                       <div className="text-sm text-purple-800">Battery</div>
//                       <div className="text-2xl font-extrabold text-purple-800">{batteryLife ?? "--"}%</div>
//                       <div className="text-xs text-purple-600 mt-1">Pred: {predictedBattery ?? "--"}%</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <BatteryChart 
//                 actualBattery={batteryLife} 
//                 predictedBattery={predictedBattery}
//                 isCharging={batteryStats.statusMessage?.includes("Charging")} />
//             </div>

//             {/* High Consumers */}
//             <div className="high-consumer-report bg-white rounded-2xl shadow-md p-5 text-purple-800">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold">High Consumers</h3>
//                 <div>
//                   <label className="text-xs mr-2">Show Top</label>
//                   <select value={topN} onChange={e => setTopN(Number(e.target.value))}
//                     className="bg-white/10 text-purple-800 px-2 py-1 rounded transition-colors">
//                     {[3,5,10].map(n => <option key={n} value={n}>{n}</option>)}
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
//                 <InfoCard title="Avg CPU" value={`${avgCPU}%`} />
//                 <InfoCard title="Avg Memory" value={`${avgMemory}%`} />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
//                 <TopCard title={`Top ${topN} CPU`} items={topCPU} metric="cpu_percent" />
//                 <TopCard title={`Top ${topN} Memory`} items={topMemory} metric="memory_percent" />
//               </div>

//               {warnings.length > 0 && (
//                 <div className="mb-3 p-3 bg-red-100 rounded-lg">
//                   <p className="text-sm font-semibold text-red-600">⚠ Warnings</p>
//                   {warnings.map((w,i) => <p key={i} className="text-xs">{w.name} — CPU: {w.cpu_percent ?? 0}%, Mem: {w.memory_percent ?? 0}%</p>)}
//                 </div>
//               )}

//               {tips.length > 0 && (
//                 <div className="mb-3 p-3 bg-green-100 rounded-lg">
//                   <p className="text-sm font-semibold text-green-700">💡 Tips</p>
//                   {tips.map((t,i) => <p key={i} className="text-xs">{t}</p>)}
//                 </div>
//               )}

//               <div className="mt-3">
//                 <HighConsumersChart consumers={[...topCPU, ...topMemory]} />
//               </div>
//             </div>

//             <div className="mt-8 flex justify-center">
//               <button onClick={downloadPDF}
//                 className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
//                 Export Full Report (PDF)
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// // Helper Components
// const InfoCard = ({ title, value }) => (
//   <div className="p-3 bg-purple-50 rounded-lg">
//     <p className="text-xs text-purple-600">{title}</p>
//     <p className="text-sm font-medium">{value}</p>
//   </div>
// );

// const DetailInfo = ({ title, value }) => (
//   <div className="px-3 py-2 bg-purple-50 rounded-lg">
//     <p className="text-xs text-purple-600">{title}</p>
//     <p className="text-lg font-bold">{value}</p>
//   </div>
// );

// const TopCard = ({ title, items, metric }) => (
//   <div>
//     <h4 className="text-sm font-semibold text-purple-600 mb-2">{title}</h4>
//     <div className="flex flex-col gap-2">
//       {items.map((c,i) => (
//         <div key={i} className="bg-purple-50 rounded-lg p-2 flex justify-between text-purple-800 text-sm">
//           <span>{c.name}</span>
//           <span>{c[metric] ?? 0}%</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );


// import { useEffect, useState } from "react";
// import { predictBatteryLife, detectHighConsumers } from "../api/predictAPI";
// import axios from "axios";
// import BatteryChart from "../components/charts/BatteryChart";
// import HighConsumersChart from "../components/charts/HighConsumersChart";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";

// const getBatteryStatusText = (value, charging) => {
//   if (value == null) return "Battery data unavailable";
//   if (charging) {
//     if (value >= 90) return "Charging complete — battery almost full";
//     if (value >= 80) return "Charging — nearly topped up";
//     if (value >= 70) return "Charging — good battery health";
//     if (value >= 60) return "Charging — battery improving";
//     if (value >= 50) return "Charging — half charged";
//     if (value >= 40) return "Charging — recovering from low levels";
//     if (value >= 30) return "Charging — battery low";
//     if (value >= 20) return "Charging — still very low";
//     if (value >= 10) return "Charging started — critically low";
//     return "Battery critically low — charging initiated";
//   } else {
//     if (value >= 90) return "Battery full — running efficiently";
//     if (value >= 80) return "Battery excellent — smooth performance";
//     if (value >= 70) return "Battery good — sufficient backup";
//     if (value >= 60) return "Battery moderate — consider charging soon";
//     if (value >= 50) return "Battery getting low — recharge recommended";
//     if (value >= 40) return "Battery low — performance may reduce";
//     if (value >= 30) return "Battery very low — plug in soon";
//     if (value >= 20) return "Battery critical — plug in urgently";
//     if (value >= 10) return "Battery dangerously low — almost empty";
//     return "Battery nearly dead — charge immediately";
//   }
// };

// export default function Predictions() {
//   const [batteryLife, setBatteryLife] = useState(null);
//   const [predictedBattery, setPredictedBattery] = useState(null);
//   const [batteryStats, setBatteryStats] = useState({});
//   const [topN, setTopN] = useState(5);
//   const [topCPU, setTopCPU] = useState([]);
//   const [topMemory, setTopMemory] = useState([]);
//   const [avgCPU, setAvgCPU] = useState(0);
//   const [avgMemory, setAvgMemory] = useState(0);
//   const [warnings, setWarnings] = useState([]);
//   const [tips, setTips] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   useEffect(() => {
//     fetchPredictions();
//     const interval = setInterval(fetchPredictions, 10000);
//     return () => clearInterval(interval);
//   }, [topN]);

//   const fetchPredictions = async () => {
//     try {
//       // -----------------------
//       // 1️⃣ Try fetching live data
//       // -----------------------
//       let batteryData = null;
//       let consumerData = null;

//       try {
//         batteryData = await predictBatteryLife();
//         consumerData = await detectHighConsumers();
//       } catch (e) {
//         console.warn("⚠ Live agent not available, using MongoDB fallback.");
//       }

//       // -----------------------
//       // 2️⃣ If live data fails → use MongoDB
//       // -----------------------
//       if (!batteryData || !consumerData) {
//         try {
//           const mongoRes = await axios.get("http://localhost:8000/processes/latest");
//           if (mongoRes.data) {
//             batteryData = mongoRes.data.battery || {};
//             consumerData = { high_consumers: mongoRes.data.processes || [] };
//             console.log("✅ Loaded logged data from MongoDB");
//           }
//         } catch (err) {
//           console.error("❌ MongoDB fetch failed:", err);
//         }
//       }

//       // -----------------------
//       // 3️⃣ Merge data
//       // -----------------------
//       if (!batteryData) return console.warn("No battery data available");
//       if (!consumerData) consumerData = { high_consumers: [] };

//       const latestConsumers = consumerData.high_consumers ?? [];

//       const actual = batteryData.actual_battery_level ?? 0;
//       const predicted =
//         batteryData.predicted_battery ?? batteryData.predicted_battery_life ?? 0;

//       setBatteryLife(actual);
//       setPredictedBattery(predicted);

//       const delta = actual - predicted;
//       const avgDischargeRatePerHour = Math.abs(delta * 360);
//       const nextHourPrediction = Math.max(actual - avgDischargeRatePerHour, 0);

//       const isCharging = batteryData.charging_status === "Charging";
//       const statusMessage = getBatteryStatusText(actual, isCharging);

//       setBatteryStats({
//         statusMessage,
//         batteryHealth:
//           actual >= 90 ? "Excellent" : actual >= 70 ? "Good" : actual >= 50 ? "Moderate" : "Poor",
//         avgDischargeRatePerHour: avgDischargeRatePerHour.toFixed(1),
//         nextHourPrediction: nextHourPrediction.toFixed(1),
//         efficiencyMessage:
//           Math.abs(actual - predicted) < 2
//             ? "Battery efficiency stable."
//             : "Noticeable change detected — monitor load.",
//         comparisonMessage:
//           predicted < actual
//             ? "Predicted to discharge slightly."
//             : "Predicted to remain stable or increase.",
//         recommendations:
//           actual < 40
//             ? ["Reduce non-critical loads to extend run-time.", "Schedule charging during solar peak hours (2–4 PM)."]
//             : ["Battery performance normal.", "Continue monitoring every 10s."],
//       });

//       // -----------------------
//       // 4️⃣ High Consumers processing
//       // -----------------------
//       const filteredCPU = latestConsumers.filter(c => c.cpu_percent !== undefined && c.name !== "System Idle Process");
//       const filteredMemory = latestConsumers.filter(c => c.memory_percent !== undefined && c.name !== "System Idle Process");

//       const sortedCPU = filteredCPU
//         .sort((a, b) => b.cpu_percent - a.cpu_percent)
//         .slice(0, topN)
//         .map(c => ({ ...c, cpu_percent: Number(c.cpu_percent.toFixed(1)) }));

//       const sortedMemory = filteredMemory
//         .sort((a, b) => b.memory_percent - a.memory_percent)
//         .slice(0, topN)
//         .map(c => ({ ...c, memory_percent: Number(c.memory_percent.toFixed(1)) }));

//       const padArray = (arr, metric) => {
//         const result = [...arr];
//         while (result.length < topN) {
//           const empty = { name: "-", cpu_percent: 0, memory_percent: 0 };
//           if (metric === "cpu") empty.memory_percent = undefined;
//           if (metric === "memory") empty.cpu_percent = undefined;
//           result.push(empty);
//         }
//         return result.slice(0, topN);
//       };

//       setTopCPU(padArray(sortedCPU, "cpu"));
//       setTopMemory(padArray(sortedMemory, "memory"));

//       const avgCpuVal = sortedCPU.reduce((sum, c) => sum + (c.cpu_percent ?? 0), 0) / (sortedCPU.length || 1);
//       const avgMemVal = sortedMemory.reduce((sum, c) => sum + (c.memory_percent ?? 0), 0) / (sortedMemory.length || 1);
//       setAvgCPU(Number(avgCpuVal.toFixed(1)));
//       setAvgMemory(Number(avgMemVal.toFixed(1)));

//       setWarnings([
//         ...sortedCPU.filter(c => c.cpu_percent > 100),
//         ...sortedMemory.filter(c => c.memory_percent > 80),
//       ]);

//       const generatedTips = [...sortedCPU, ...sortedMemory]
//         .map(c => {
//           let tip = "";
//           if (c.cpu_percent > 80) tip += `CPU high (${c.cpu_percent}%) `;
//           if (c.memory_percent > 60) tip += `Memory high (${c.memory_percent}%)`;
//           return tip ? `Check ${c.name} — ${tip}` : null;
//         })
//         .filter(Boolean);
//       setTips(generatedTips);

//       setLastUpdated(new Date());
//     } catch (error) {
//       console.error("Error fetching predictions:", error);
//     }
//   };

//   const formatTime = date => (date ? date.toLocaleTimeString() : "");

//   const downloadPDF = async () => {
//     try {
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pageWidth = 210;
//       const margin = 12;
//       const title = "AI Energy Advisor Report";
//       const timestamp = new Date().toLocaleString();

//       const nodes = [
//         document.querySelector(".battery-card-container"),
//         document.querySelector(".high-consumer-report")
//       ];

//       for (const node of nodes) {
//         if (!node) continue;
//         const canvas = await html2canvas(node, { scale: 2 });
//         const imgData = canvas.toDataURL("image/png");
//         const imgWidth = pageWidth - margin * 2;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;
//         pdf.addImage(imgData, "PNG", margin, 25, imgWidth, imgHeight);
//         pdf.addPage();
//       }

//       const totalPages = pdf.getNumberOfPages();
//       for (let i = 1; i <= totalPages; i++) {
//         pdf.setPage(i);
//         pdf.setFontSize(12);
//         pdf.setTextColor(40);
//         pdf.setFont("helvetica", "bold");
//         pdf.text(title, margin, 12);
//         pdf.setFontSize(9);
//         pdf.setFont("helvetica", "normal");
//         pdf.text(`Generated: ${timestamp}`, pageWidth - margin, 12, { align: "right" });
//         pdf.setFontSize(8);
//         pdf.setTextColor(120);
//         pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, 287, { align: "right" });
//       }

//       pdf.save(`Predictions_Report_${new Date().toISOString()}.pdf`);
//     } catch (err) {
//       console.error("PDF generation error:", err);
//     }
//   };

// return (
//     <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
//       <Sidebar />

//       <div className="flex-1 p-6 ml-56 overflow-y-auto">
//         <Navbar />

//         <main className="flex-1 pt-12 overflow-y-auto">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-3xl font-extrabold tracking-tight text-purple-800">Predictions</h1>
//                 <p className="text-sm text-purple-600 mt-1">Real-time battery & system consumer insights — auto-refresh every 10s</p>
//               </div>
//               <div className="text-sm text-purple-600">
//                 Last updated: <span className="font-medium">{formatTime(lastUpdated)}</span>
//               </div>
//             </div>

//             {/* Battery Card + Chart */}
//             <div className="battery-card-container bg-white rounded-2xl shadow-md p-6 mb-6">
//               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
//                 <div className="flex-1">
//                   <h2 className="text-xl font-semibold text-purple-800 mb-2">Battery Insights</h2>
//                   <p className="text-sm text-purple-600 mb-4">Live actual and predicted battery values synced with the chart.</p>

//                   <div className="flex flex-wrap gap-3 mb-4">
//                     <DetailInfo title="Actual" value={`${batteryLife ?? "--"}%`} />
//                     <DetailInfo title="Predicted" value={`${predictedBattery ?? "--"}%`} />
//                     <DetailInfo title="Health" value={batteryStats.batteryHealth} />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
//                     <InfoCard title="Status" value={batteryStats.statusMessage} />
//                     <InfoCard title="Efficiency" value={batteryStats.efficiencyMessage} />
//                     <InfoCard title="Comparison" value={batteryStats.comparisonMessage} />
//                   </div>

//                   <div className="p-3 bg-purple-50 rounded-lg mb-5">
//                     <p className="text-sm font-semibold mb-2">Recommendations</p>
//                     <ul className="list-disc ml-5 text-sm space-y-1">
//                       {batteryStats.recommendations?.map((r, idx) => <li key={idx}>{r}</li>)}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="w-36 flex-shrink-0 flex flex-col items-center justify-center mt-4 lg:mt-0">
//                   <div className="w-28 h-28 rounded-full flex items-center justify-center bg-purple-100 p-1 shadow-inner transform transition-transform duration-500">
//                     <div className="w-full h-full rounded-full bg-white/20 flex flex-col items-center justify-center">
//                       <div className="text-sm text-purple-800">Battery</div>
//                       <div className="text-2xl font-extrabold text-purple-800">{batteryLife ?? "--"}%</div>
//                       <div className="text-xs text-purple-600 mt-1">Pred: {predictedBattery ?? "--"}%</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <BatteryChart 
//                 actualBattery={batteryLife} 
//                 predictedBattery={predictedBattery}
//                 isCharging={batteryStats.statusMessage?.includes("Charging")} />
//             </div>

//             {/* High Consumers */}
//             <div className="high-consumer-report bg-white rounded-2xl shadow-md p-5 text-purple-800">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold">High Consumers</h3>
//                 <div>
//                   <label className="text-xs mr-2">Show Top</label>
//                   <select value={topN} onChange={e => setTopN(Number(e.target.value))}
//                     className="bg-white/10 text-purple-800 px-2 py-1 rounded transition-colors">
//                     {[3,5,10].map(n => <option key={n} value={n}>{n}</option>)}
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
//                 <InfoCard title="Avg CPU" value={`${avgCPU}%`} />
//                 <InfoCard title="Avg Memory" value={`${avgMemory}%`} />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
//                 <TopCard title={`Top ${topN} CPU`} items={topCPU} metric="cpu_percent" />
//                 <TopCard title={`Top ${topN} Memory`} items={topMemory} metric="memory_percent" />
//               </div>

//               {warnings.length > 0 && (
//                 <div className="mb-3 p-3 bg-red-100 rounded-lg">
//                   <p className="text-sm font-semibold text-red-600">⚠ Warnings</p>
//                   {warnings.map((w,i) => <p key={i} className="text-xs">{w.name} — CPU: {w.cpu_percent ?? 0}%, Mem: {w.memory_percent ?? 0}%</p>)}
//                 </div>
//               )}

//               {tips.length > 0 && (
//                 <div className="mb-3 p-3 bg-green-100 rounded-lg">
//                   <p className="text-sm font-semibold text-green-700">💡 Tips</p>
//                   {tips.map((t,i) => <p key={i} className="text-xs">{t}</p>)}
//                 </div>
//               )}

//               <div className="mt-3">
//                 <HighConsumersChart consumers={[...topCPU, ...topMemory]} />
//               </div>
//             </div>

//             <div className="mt-8 flex justify-center">
//               <button onClick={downloadPDF}
//                 className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
//                 Export Full Report (PDF)
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// // Helper Components
// const InfoCard = ({ title, value }) => (
//   <div className="p-3 bg-purple-50 rounded-lg">
//     <p className="text-xs text-purple-600">{title}</p>
//     <p className="text-sm font-medium">{value}</p>
//   </div>
// );

// const DetailInfo = ({ title, value }) => (
//   <div className="px-3 py-2 bg-purple-50 rounded-lg">
//     <p className="text-xs text-purple-600">{title}</p>
//     <p className="text-lg font-bold">{value}</p>
//   </div>
// );

// const TopCard = ({ title, items, metric }) => (
//   <div>
//     <h4 className="text-sm font-semibold text-purple-600 mb-2">{title}</h4>
//     <div className="flex flex-col gap-2">
//       {items.map((c,i) => (
//         <div key={i} className="bg-purple-50 rounded-lg p-2 flex justify-between text-purple-800 text-sm">
//           <span>{c.name}</span>
//           <span>{c[metric] ?? 0}%</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );



import { useEffect, useState } from "react";
import { predictBatteryLife, detectHighConsumers } from "../api/predictAPI";
import axios from "axios";
import BatteryChart from "../components/charts/BatteryChart";
import HighConsumersChart from "../components/charts/HighConsumersChart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

// ------------------ Helper: Battery Status Text ------------------
const getBatteryStatusText = (value, charging) => {
  if (value == null) return "Battery data unavailable";
  if (charging) {
    if (value >= 90) return "Charging complete — battery almost full";
    if (value >= 80) return "Charging — nearly topped up";
    if (value >= 70) return "Charging — good battery health";
    if (value >= 60) return "Charging — battery improving";
    if (value >= 50) return "Charging — half charged";
    if (value >= 40) return "Charging — recovering from low levels";
    if (value >= 30) return "Charging — battery low";
    if (value >= 20) return "Charging — still very low";
    if (value >= 10) return "Charging started — critically low";
    return "Battery critically low — charging initiated";
  } else {
    if (value >= 90) return "Battery full — running efficiently";
    if (value >= 80) return "Battery excellent — smooth performance";
    if (value >= 70) return "Battery good — sufficient backup";
    if (value >= 60) return "Battery moderate — consider charging soon";
    if (value >= 50) return "Battery getting low — recharge recommended";
    if (value >= 40) return "Battery low — performance may reduce";
    if (value >= 30) return "Battery very low — plug in soon";
    if (value >= 20) return "Battery critical — plug in urgently";
    if (value >= 10) return "Battery dangerously low — almost empty";
    return "Battery nearly dead — charge immediately";
  }
};

// ------------------ Component ------------------
export default function Predictions() {
  const [batteryLife, setBatteryLife] = useState(null);
  const [predictedBattery, setPredictedBattery] = useState(null);
  const [batteryStats, setBatteryStats] = useState({});
  const [topN, setTopN] = useState(5);
  const [topCPU, setTopCPU] = useState([]);
  const [topMemory, setTopMemory] = useState([]);
  const [avgCPU, setAvgCPU] = useState(0);
  const [avgMemory, setAvgMemory] = useState(0);
  const [warnings, setWarnings] = useState([]);
  const [tips, setTips] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // ------------------ Browser Metrics Fetch ------------------
  const getBrowserMetrics = async () => {
    const battery = await navigator.getBattery?.();
    const batteryLevel = battery ? Math.round(battery.level * 100) : null;
    const isCharging = battery?.charging ?? false;
    return { batteryLevel, isCharging };
  };

  // ------------------ Local Agent + API Integration ------------------
  const fetchPredictions = async () => {
    try {
      let batteryData = null;
      let consumerData = null;

      // 1️⃣ Try Local Agent First
      try {
        const agentRes = await axios.get("http://localhost:6970/metrics");
        if (agentRes.data) {
          batteryData = {
            actual_battery_level: agentRes.data.battery?.percentage,
            predicted_battery: agentRes.data.battery?.predicted,
            charging_status: agentRes.data.battery?.charging ? "Charging" : "Discharging"
          };
          consumerData = { high_consumers: agentRes.data.high_consumers || [] };
          console.log("✅ Local agent connected");
        }
      } catch {
        console.warn("⚠ Local agent not found, falling back to API");
      }

      // 2️⃣ Fallback: Cloud Predict API
      if (!batteryData || !consumerData) {
        try {
          batteryData = await predictBatteryLife();
          consumerData = await detectHighConsumers();
        } catch {
          console.warn("⚠ Predict APIs unavailable, trying MongoDB fallback");
        }
      }

      // 3️⃣ Last Fallback: MongoDB
      if (!batteryData || !consumerData) {
        const mongoRes = await axios.get("http://localhost:8000/processes/latest");
        if (mongoRes.data) {
          batteryData = mongoRes.data.battery || {};
          consumerData = { high_consumers: mongoRes.data.processes || [] };
          console.log("✅ Loaded logged data from MongoDB");
        }
      }

      // 4️⃣ Browser Metrics (local user)
      const browserData = await getBrowserMetrics();
      if (browserData.batteryLevel !== null) {
        batteryData = {
          ...batteryData,
          actual_battery_level: browserData.batteryLevel,
          charging_status: browserData.isCharging ? "Charging" : "Discharging",
        };
      }

      // -----------------------
      // Merge & Process
      // -----------------------
      if (!batteryData) return console.warn("❌ No battery data available");
      if (!consumerData) consumerData = { high_consumers: [] };

      const actual = batteryData.actual_battery_level ?? 0;
      const predicted =
        batteryData.predicted_battery ?? batteryData.predicted_battery_life ?? 0;
      const isCharging = batteryData.charging_status === "Charging";

      setBatteryLife(actual);
      setPredictedBattery(predicted);

      const statusMessage = getBatteryStatusText(actual, isCharging);
      const delta = actual - predicted;
      const avgDischargeRatePerHour = Math.abs(delta * 360);
      const nextHourPrediction = Math.max(actual - avgDischargeRatePerHour, 0);

      setBatteryStats({
        statusMessage,
        batteryHealth:
          actual >= 90 ? "Excellent" : actual >= 70 ? "Good" : actual >= 50 ? "Moderate" : "Poor",
        avgDischargeRatePerHour: avgDischargeRatePerHour.toFixed(1),
        nextHourPrediction: nextHourPrediction.toFixed(1),
        efficiencyMessage:
          Math.abs(actual - predicted) < 2
            ? "Battery efficiency stable."
            : "Noticeable change detected — monitor load.",
        comparisonMessage:
          predicted < actual
            ? "Predicted to discharge slightly."
            : "Predicted to remain stable or increase.",
        recommendations:
          actual < 40
            ? ["Reduce non-critical loads to extend run-time.", "Schedule charging during solar peak hours (2–4 PM)."]
            : ["Battery performance normal.", "Continue monitoring every 10s."],
      });

      // -----------------------
      // High Consumers
      // -----------------------
      const latestConsumers = consumerData.high_consumers ?? [];
      const filteredCPU = latestConsumers.filter(c => c.cpu_percent !== undefined);
      const filteredMemory = latestConsumers.filter(c => c.memory_percent !== undefined);

      const sortedCPU = filteredCPU.sort((a,b)=>b.cpu_percent - a.cpu_percent).slice(0, topN);
      const sortedMemory = filteredMemory.sort((a,b)=>b.memory_percent - a.memory_percent).slice(0, topN);

      const padArray = (arr, metric) => {
        const result = [...arr];
        while (result.length < topN) result.push({ name: "-", cpu_percent: 0, memory_percent: 0 });
        return result.slice(0, topN);
      };

      setTopCPU(padArray(sortedCPU, "cpu"));
      setTopMemory(padArray(sortedMemory, "memory"));

      const avgCpuVal = sortedCPU.reduce((sum,c)=>sum+(c.cpu_percent||0),0)/(sortedCPU.length||1);
      const avgMemVal = sortedMemory.reduce((sum,c)=>sum+(c.memory_percent||0),0)/(sortedMemory.length||1);

      setAvgCPU(Number(avgCpuVal.toFixed(1)));
      setAvgMemory(Number(avgMemVal.toFixed(1)));
      setLastUpdated(new Date());

    } catch (err) {
      console.error("Error fetching predictions:", err);
    }
  };

  // ------------------ Auto Refresh ------------------
  useEffect(() => {
    fetchPredictions();
    const interval = setInterval(fetchPredictions, 10000);
    return () => clearInterval(interval);
  }, [topN]);

  // ------------------ Helpers ------------------
  const formatTime = date => (date ? date.toLocaleTimeString() : "");

  // ------------------ UI (unchanged) ------------------
  // 👇👇 (keep your same JSX return here — I didn’t modify any UI)
  // Copy your entire `return (...)` block from your message above here
  // It stays EXACTLY the same.

// ------------------ Download PDF Report ------------------
const downloadPDF = async () => {
  const input = document.body; // you can change this to a specific container if you want
  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 190;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 10;

  pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(`Predictions_Report_${new Date().toLocaleString()}.pdf`);
};




return (
    <div className="flex min-h-screen w-full overflow-hidden bg-white text-purple-800">
      <Sidebar />

      <div className="flex-1 p-6 ml-56 overflow-y-auto">
        <Navbar />

        <main className="flex-1 pt-12 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-purple-800">Predictions</h1>
                <p className="text-sm text-purple-600 mt-1">Real-time battery & system consumer insights — auto-refresh every 10s</p>
              </div>
              <div className="text-sm text-purple-600">
                Last updated: <span className="font-medium">{formatTime(lastUpdated)}</span>
              </div>
            </div>

            {/* Battery Card + Chart */}
            <div className="battery-card-container bg-white rounded-2xl shadow-md p-6 mb-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-purple-800 mb-2">Battery Insights</h2>
                  <p className="text-sm text-purple-600 mb-4">Live actual and predicted battery values synced with the chart.</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <DetailInfo title="Actual" value={`${batteryLife ?? "--"}%`} />
                    <DetailInfo title="Predicted" value={`${predictedBattery ?? "--"}%`} />
                    <DetailInfo title="Health" value={batteryStats.batteryHealth} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <InfoCard title="Status" value={batteryStats.statusMessage} />
                    <InfoCard title="Efficiency" value={batteryStats.efficiencyMessage} />
                    <InfoCard title="Comparison" value={batteryStats.comparisonMessage} />
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg mb-5">
                    <p className="text-sm font-semibold mb-2">Recommendations</p>
                    <ul className="list-disc ml-5 text-sm space-y-1">
                      {batteryStats.recommendations?.map((r, idx) => <li key={idx}>{r}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="w-36 flex-shrink-0 flex flex-col items-center justify-center mt-4 lg:mt-0">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center bg-purple-100 p-1 shadow-inner transform transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-white/20 flex flex-col items-center justify-center">
                      <div className="text-sm text-purple-800">Battery</div>
                      <div className="text-2xl font-extrabold text-purple-800">{batteryLife ?? "--"}%</div>
                      <div className="text-xs text-purple-600 mt-1">Pred: {predictedBattery ?? "--"}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <BatteryChart 
                actualBattery={batteryLife} 
                predictedBattery={predictedBattery}
                isCharging={batteryStats.statusMessage?.includes("Charging")} />
            </div>

            {/* High Consumers */}
            <div className="high-consumer-report bg-white rounded-2xl shadow-md p-5 text-purple-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">High Consumers</h3>
                <div>
                  <label className="text-xs mr-2">Show Top</label>
                  <select value={topN} onChange={e => setTopN(Number(e.target.value))}
                    className="bg-white/10 text-purple-800 px-2 py-1 rounded transition-colors">
                    {[3,5,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <InfoCard title="Avg CPU" value={`${avgCPU}%`} />
                <InfoCard title="Avg Memory" value={`${avgMemory}%`} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <TopCard title={`Top ${topN} CPU`} items={topCPU} metric="cpu_percent" />
                <TopCard title={`Top ${topN} Memory`} items={topMemory} metric="memory_percent" />
              </div>

              {warnings.length > 0 && (
                <div className="mb-3 p-3 bg-red-100 rounded-lg">
                  <p className="text-sm font-semibold text-red-600">⚠ Warnings</p>
                  {warnings.map((w,i) => <p key={i} className="text-xs">{w.name} — CPU: {w.cpu_percent ?? 0}%, Mem: {w.memory_percent ?? 0}%</p>)}
                </div>
              )}

              {tips.length > 0 && (
                <div className="mb-3 p-3 bg-green-100 rounded-lg">
                  <p className="text-sm font-semibold text-green-700">💡 Tips</p>
                  {tips.map((t,i) => <p key={i} className="text-xs">{t}</p>)}
                </div>
              )}

              <div className="mt-3">
                <HighConsumersChart consumers={[...topCPU, ...topMemory]} />
              </div>
            </div>

            <div className="mt-8 flex justify-center mb-20">
              <button onClick={downloadPDF}
                className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
                Export Full Report (PDF)
              </button>
            </div>


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

// Helper Components
const InfoCard = ({ title, value }) => (
  <div className="p-3 bg-purple-50 rounded-lg">
    <p className="text-xs text-purple-600">{title}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

const DetailInfo = ({ title, value }) => (
  <div className="px-3 py-2 bg-purple-50 rounded-lg">
    <p className="text-xs text-purple-600">{title}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);

const TopCard = ({ title, items, metric }) => (
  <div>
    <h4 className="text-sm font-semibold text-purple-600 mb-2">{title}</h4>
    <div className="flex flex-col gap-2">
      {items.map((c,i) => (
        <div key={i} className="bg-purple-50 rounded-lg p-2 flex justify-between text-purple-800 text-sm">
          <span>{c.name}</span>
          <span>{c[metric] ?? 0}%</span>
        </div>
      ))}
    </div>
  </div>
);