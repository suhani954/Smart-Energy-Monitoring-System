// import { Doughnut } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function BatteryChart({ batteryLife }) {
//   const data = {
//     labels: ['Used (%)', 'Remaining (%)'],
//     datasets: [
//       {
//         data: [100 - batteryLife, batteryLife],
//         backgroundColor: ['#ef4444', '#22c55e'],
//         hoverBackgroundColor: ['#f87171', '#4ade80'],
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'bottom' },
//     },
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg">
//       <h3 className="text-lg font-semibold mb-2 text-green-600">Battery Life Prediction</h3>
//       <Doughnut data={data} options={options} />
//       <p className="mt-3 text-center font-medium text-gray-600">
//         Estimated Remaining: <span className="text-green-600">{batteryLife}%</span>
//       </p>
//     </div>
//   );
// }






// import { Doughnut } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function BatteryChart({ batteryLife }) {
//   // Handle invalid or missing battery data
//   const validBattery = typeof batteryLife === "number" && batteryLife >= 0 ? batteryLife : 0;

//   const data = {
//     labels: ['Used (%)', 'Remaining (%)'],
//     datasets: [
//       {
//         data: [100 - validBattery, validBattery],
//         backgroundColor: ['#ef4444', '#22c55e'],
//         hoverBackgroundColor: ['#f87171', '#4ade80'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: { enabled: true },
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80 flex flex-col justify-center">
//       <h3 className="text-lg font-semibold mb-2 text-green-600 text-center">
//         Battery Life Prediction
//       </h3>
//       <div className="flex-grow">
//         <Doughnut data={data} options={options} />
//       </div>
//       <p className="mt-3 text-center font-medium text-gray-600">
//         Estimated Remaining:{" "}
//         <span className="text-green-600">{validBattery}%</span>
//       </p>
//     </div>
//   );
// }




// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function BatteryChart({ batteryLife }) {
//   const validBattery = typeof batteryLife === "number" && batteryLife >= 0 ? batteryLife : 0;

//   const data = {
//     labels: ['Used (%)', 'Remaining (%)'],
//     datasets: [
//       {
//         data: [100 - validBattery, validBattery],
//         backgroundColor: ['#ef4444', '#22c55e'],
//         hoverBackgroundColor: ['#f87171', '#4ade80'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: { enabled: true },
//     },
//     animation: {
//       animateRotate: true,
//       animateScale: true,
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80 flex flex-col justify-center">
//       <h3 className="text-lg font-semibold mb-2 text-green-600 text-center">
//         Battery Life Prediction
//       </h3>
//       <div className="flex-grow">
//         <Doughnut data={data} options={options} />
//       </div>
//       <p className="mt-3 text-center font-medium text-gray-600">
//         Estimated Remaining: <span className="text-green-600">{validBattery}%</span>
//       </p>
//     </div>
//   );
// }




// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function BatteryChart({ actualBattery, predictedBattery }) {
//   const validActual = typeof actualBattery === "number" && actualBattery >= 0 ? actualBattery : 0;
//   const validPredicted = typeof predictedBattery === "number" && predictedBattery >= 0 ? predictedBattery : 0;

//   // Doughnut chart with two datasets: actual (inner), predicted (outer)
//   const data = {
//     labels: ['Used (%)', 'Remaining (%)'],
//     datasets: [
//       {
//         label: 'Actual Battery',
//         data: [100 - validActual, validActual],
//         backgroundColor: ['#ef4444', '#22c55e'],
//         hoverBackgroundColor: ['#f87171', '#4ade80'],
//         borderWidth: 1,
//       },
//       {
//         label: 'Predicted Battery',
//         data: [100 - validPredicted, validPredicted],
//         backgroundColor: ['rgba(239, 68, 68, 0.3)', 'rgba(34, 197, 94, 0.3)'],
//         hoverBackgroundColor: ['rgba(248, 113, 113, 0.3)', 'rgba(74, 222, 128, 0.3)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: { enabled: true },
//     },
//     animation: {
//       animateRotate: true,
//       animateScale: true,
//     },
//     maintainAspectRatio: false,
//     cutout: '40%', // inner radius for doughnut to show both layers
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80 flex flex-col justify-center">
//       <h3 className="text-lg font-semibold mb-2 text-green-600 text-center">
//         Battery Life Prediction
//       </h3>
//       <div className="flex-grow">
//         <Doughnut data={data} options={options} />
//       </div>
//       <p className="mt-3 text-center font-medium text-gray-600">
//         Actual: <span className="text-green-600">{validActual}%</span> | Predicted:{" "}
//         <span className="text-blue-600">{validPredicted}%</span>
//       </p>
//     </div>
//   );
// }




// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useEffect, useState } from "react";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// export default function BatteryChart({ actualBattery, predictedBattery }) {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     if (actualBattery === null || predictedBattery === null) return;

//     setChartData((prev) => {
//       const labels = [...(prev.labels || []), new Date().toLocaleTimeString()];
//       const actualData = [...(prev.datasets?.[0]?.data || []), actualBattery];
//       const predictedData = [...(prev.datasets?.[1]?.data || []), predictedBattery];

//       return {
//         labels: labels.slice(-10), // keep last 10 points
//         datasets: [
//           {
//             label: "Actual Battery (%)",
//             data: actualData.slice(-10),
//             borderColor: "#00b894",
//             backgroundColor: "rgba(0, 184, 148, 0.2)",
//             tension: 0.3,
//             fill: true,
//           },
//           {
//             label: "Predicted Battery (%)",
//             data: predictedData.slice(-10),
//             borderColor: "#0984e3",
//             backgroundColor: "rgba(9, 132, 227, 0.2)",
//             tension: 0.3,
//             fill: true,
//           },
//         ],
//       };
//     });
//   }, [actualBattery, predictedBattery]);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: {
//           color: "#2d3436",
//           font: { size: 13, weight: "bold" },
//         },
//       },
//       title: {
//         display: true,
//         text: "Real-Time Battery Prediction vs Actual Data",
//         color: "#2d3436",
//         font: { size: 18, weight: "bold" },
//       },
//       tooltip: {
//         backgroundColor: "#2d3436",
//         titleFont: { size: 14, weight: "bold" },
//         bodyFont: { size: 13 },
//         callbacks: {
//           label: function (context) {
//             return `${context.dataset.label}: ${context.parsed.y}%`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Time (hh:mm:ss)",
//           color: "#636e72",
//         },
//         ticks: { color: "#636e72" },
//       },
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: "Battery Percentage (%)",
//           color: "#636e72",
//         },
//         ticks: { color: "#636e72" },
//       },
//     },
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-xl">
//       {chartData.datasets.length === 0 ? (
//         <p className="text-gray-500 text-center">Loading battery data...</p>
//       ) : (
//         <Line data={chartData} options={options} />
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Doughnut, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

// export default function BatteryChart({ actualBattery, predictedBattery }) {
//   const [batteryHistory, setBatteryHistory] = useState([]);

//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setBatteryHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   // ---------- COLOR ZONE HANDLER ----------
//   const getColorZone = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   // ---------- DOUGHNUT (ACTUAL vs PREDICTED) ----------
//   const doughnutData = {
//     labels: ["Actual Battery", "Predicted Battery"],
//     datasets: [
//       {
//         data: [actualBattery ?? 0, predictedBattery ?? 0],
//         backgroundColor: [getColorZone(actualBattery), getColorZone(predictedBattery)],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const doughnutOptions = {
//     cutout: "70%",
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: { color: "#2d3436", font: { size: 13, weight: "bold" } },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ${context.parsed} %`,
//         },
//       },
//     },
//   };

//   // ---------- BAR (PREDICTION TREND OVER TIME) ----------
//   const barData = {
//     labels: batteryHistory.map((_, i) => `T-${batteryHistory.length - i}`),
//     datasets: [
//       {
//         label: "Predicted Battery Trend (%)",
//         data: batteryHistory,
//         backgroundColor: batteryHistory.map((v) => getColorZone(v)),
//         borderRadius: 6,
//       },
//     ],
//   };

//   const barOptions = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Prediction Trend (Last 10 Updates)",
//         font: { size: 16, weight: "bold" },
//         color: "#2d3436",
//       },
//       legend: { display: false },
//     },
//     scales: {
//       x: {
//         ticks: { color: "#636e72" },
//         grid: { display: false },
//       },
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: { color: "#636e72" },
//       },
//     },
//   };

//   // ---------- TEXT SUMMARY ----------
//   const getBatteryStatus = (value) => {
//     if (value > 80) return "Battery is healthy ✅";
//     if (value > 50) return "Battery is moderate ⚠️";
//     return "Battery is low ❌ — Charge soon!";
//   };

//   return (
//     <div className="p-5 bg-white rounded-2xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">
//         Battery Prediction Overview
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//         <div className="flex flex-col items-center">
//           <Doughnut data={doughnutData} options={doughnutOptions} />
//           <p className="mt-3 text-gray-700 font-medium">
//             Actual: <span className="font-bold">{actualBattery ?? "N/A"}%</span> | Predicted:{" "}
//             <span className="font-bold">{predictedBattery ?? "N/A"}%</span>
//           </p>
//           <p
//             className={`mt-1 font-semibold ${
//               predictedBattery > 80
//                 ? "text-green-600"
//                 : predictedBattery > 50
//                 ? "text-yellow-600"
//                 : "text-red-600"
//             }`}
//           >
//             {getBatteryStatus(predictedBattery)}
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <Bar data={barData} options={barOptions} />
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Doughnut, Line } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryHealthGauge({ actualBattery, predictedBattery }) {
//   const [batteryHistory, setBatteryHistory] = useState([]);

//   // Keep trend data
//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setBatteryHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   // ---------- Color zones ----------
//   const getColorZone = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   // ---------- Descriptive text ----------
//   const getBatteryStatus = (value) => {
//     if (value > 80) return { text: "Battery is healthy ✅", color: "text-green-600" };
//     if (value > 50) return { text: "Battery is moderate ⚠️", color: "text-yellow-600" };
//     return { text: "Battery is low ❌ — Charge soon!", color: "text-red-600" };
//   };

//   const status = getBatteryStatus(predictedBattery);

//   // ---------- Gauge (half circle) ----------
//   const gaugeData = {
//     labels: ["Predicted", ""],
//     datasets: [
//       {
//         data: [predictedBattery ?? 0, 100 - (predictedBattery ?? 0)],
//         backgroundColor: [getColorZone(predictedBattery), "#ecf0f1"],
//         borderWidth: 0,
//         circumference: 180,
//         rotation: 270,
//         cutout: "75%",
//       },
//     ],
//   };

//   const gaugeOptions = {
//     plugins: {
//       tooltip: { enabled: false },
//       legend: { display: false },
//     },
//     rotation: -90,
//     circumference: 180,
//   };

//   // ---------- Trend line ----------
//   const trendData = {
//     labels: batteryHistory.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction Trend",
//         data: batteryHistory,
//         borderColor: "#0984e3",
//         fill: false,
//         tension: 0.3,
//         pointRadius: 2,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     scales: {
//       x: { display: false },
//       y: { display: false, min: 0, max: 100 },
//     },
//     plugins: { legend: { display: false } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-5">
//       <h3 className="text-xl font-semibold text-gray-700 mb-2">
//         Smart Battery Dashboard
//       </h3>

//       <div className="flex flex-col items-center relative">
//         <div className="w-64">
//           <Doughnut data={gaugeData} options={gaugeOptions} />
//         </div>
//         <div className="absolute bottom-8 text-center">
//           <p className="text-3xl font-bold text-gray-800">
//             {predictedBattery ?? "N/A"}%
//           </p>
//           <p className="text-gray-500 text-sm">Predicted Level</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-3">
//         <div
//           className="w-4 h-24 rounded-full shadow-inner"
//           style={{
//             background: `linear-gradient(to top, ${getColorZone(
//               actualBattery
//             )} ${actualBattery ?? 0}%, #ecf0f1 ${actualBattery ?? 0}%)`,
//           }}
//         ></div>
//         <div>
//           <p className="font-semibold text-gray-700">
//             Actual Battery:{" "}
//             <span className="text-gray-900 font-bold">{actualBattery ?? "N/A"}%</span>
//           </p>
//         </div>
//       </div>

//       <div className="w-3/4">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       <p className={`font-semibold text-lg ${status.color}`}>{status.text}</p>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery ?? 0, predictedBattery ?? 0],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: {
//         ticks: { font: { size: 14 } },
//       },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         backgroundColor: history.map((v) => getColor(v)),
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: { display: false },
//       y: { display: false, min: 0, max: 100 },
//     },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview
//       </h3>

//       {/* Horizontal bar comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Progress bars for health zones */}
//       <div className="flex flex-col gap-3">
//         <div>
//           <p className="text-gray-700 font-medium mb-1">Actual Battery: {actualBattery ?? "N/A"}%</p>
//           <div className="w-full bg-gray-200 rounded-full h-4">
//             <div
//               className="h-4 rounded-full"
//               style={{
//                 width: `${actualBattery ?? 0}%`,
//                 backgroundColor: getColor(actualBattery),
//               }}
//             ></div>
//           </div>
//         </div>
//         <div>
//           <p className="text-gray-700 font-medium mb-1">Predicted Battery: {predictedBattery ?? "N/A"}%</p>
//           <div className="w-full bg-gray-200 rounded-full h-4">
//             <div
//               className="h-4 rounded-full"
//               style={{
//                 width: `${predictedBattery ?? 0}%`,
//                 backgroundColor: getColor(predictedBattery),
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Trend chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive text */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(predictedBattery) }}>
//         {getStatusText(predictedBattery)}
//       </p>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   // Horizontal Bar Data
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery ?? 0, predictedBattery ?? 0],
//         backgroundColor: [
//           `rgba(${actualBattery > 80 ? "0,185,148" : actualBattery > 50 ? "253,203,110" : "214,48,49"},0.7)`,
//           `rgba(${predictedBattery > 80 ? "0,185,148" : predictedBattery > 50 ? "253,203,110" : "214,48,49"},0.7)`,
//         ],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: {
//         ticks: { font: { size: 14 } },
//       },
//     },
//   };

//   // Trend Line Chart Data
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: { display: false },
//       y: { min: 0, max: 100 },
//     },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview
//       </h3>

//       {/* Horizontal bar comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive progress bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">{item.label} Battery: {item.value ?? "N/A"}%</p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value ?? 0}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value ?? 0}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trend chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive text */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(predictedBattery) }}>
//         {getStatusText(predictedBattery)}
//       </p>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);
//   const [animatedActual, setAnimatedActual] = useState(0);
//   const [animatedPredicted, setAnimatedPredicted] = useState(0);

//   useEffect(() => {
//     // Maintain last 10 predictions in history
//     if (predictedBattery !== null) setHistory((prev) => [...prev.slice(-9), predictedBattery]);

//     // Animate actual battery
//     let actualInterval = null;
//     let predictedInterval = null;
//     actualInterval = setInterval(() => {
//       setAnimatedActual((prev) => {
//         if (prev < actualBattery) return prev + 1;
//         clearInterval(actualInterval);
//         return actualBattery;
//       });
//     }, 15);

//     // Animate predicted battery
//     predictedInterval = setInterval(() => {
//       setAnimatedPredicted((prev) => {
//         if (prev < predictedBattery) return prev + 1;
//         clearInterval(predictedInterval);
//         return predictedBattery;
//       });
//     }, 15);

//     return () => {
//       clearInterval(actualInterval);
//       clearInterval(predictedInterval);
//     };
//   }, [actualBattery, predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [animatedActual, animatedPredicted],
//         backgroundColor: [getColor(animatedActual), getColor(animatedPredicted)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const diff = animatedPredicted - animatedActual;
//             const diffText = context.dataIndex === 1 ? ` (Δ ${diff}%)` : "";
//             return `${context.dataset.label}: ${context.parsed.x}%${diffText}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: {
//         ticks: { font: { size: 14 } },
//       },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: { display: false },
//       y: { min: 0, max: 100 },
//     },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview
//       </h3>

//       {/* Animated Horizontal Bar Comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: animatedActual }, { label: "Predicted", value: animatedPredicted }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">
//               {item.label} Battery: {item.value}%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive Status */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(animatedPredicted) }}>
//         {getStatusText(animatedPredicted)}
//       </p>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);
//   const [animatedActual, setAnimatedActual] = useState(0);
//   const [animatedPredicted, setAnimatedPredicted] = useState(0);

//   useEffect(() => {
//     // Maintain last 10 predictions in history
//     if (predictedBattery !== null) setHistory((prev) => [...prev.slice(-9), predictedBattery]);

//     // Animate actual battery
//     let actualInterval = setInterval(() => {
//       setAnimatedActual((prev) => {
//         if (prev < actualBattery) return prev + 1;
//         clearInterval(actualInterval);
//         return actualBattery;
//       });
//     }, 15);

//     // Animate predicted battery
//     let predictedInterval = setInterval(() => {
//       setAnimatedPredicted((prev) => {
//         if (prev < predictedBattery) return prev + 1;
//         clearInterval(predictedInterval);
//         return predictedBattery;
//       });
//     }, 15);

//     return () => {
//       clearInterval(actualInterval);
//       clearInterval(predictedInterval);
//     };
//   }, [actualBattery, predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   // Horizontal Bar Data
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [animatedActual, animatedPredicted],
//         backgroundColor: [getColor(animatedActual), getColor(animatedPredicted)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const diff = animatedPredicted - animatedActual;
//             const diffText = context.dataIndex === 1 ? ` (Δ ${diff}%)` : "";
//             return `${context.dataset.label}: ${context.parsed.x}%${diffText}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: {
//         ticks: { font: { size: 14 } },
//       },
//     },
//   };

//   // Animated Trend Line Data
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     animation: {
//       duration: 800,
//       easing: "easeOutQuart",
//       // Animate each point when data changes
//       onProgress: function (animation) {},
//     },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `Prediction: ${context.parsed.y}%`,
//         },
//       },
//     },
//     scales: {
//       x: { display: false },
//       y: { min: 0, max: 100 },
//     },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview
//       </h3>

//       {/* Animated Horizontal Bar Comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: animatedActual }, { label: "Predicted", value: animatedPredicted }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">
//               {item.label} Battery: {item.value}%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animated Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive Status */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(animatedPredicted) }}>
//         {getStatusText(animatedPredicted)}
//       </p>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);
//   const [animatedActual, setAnimatedActual] = useState(0);
//   const [animatedPredicted, setAnimatedPredicted] = useState(0);
//   const [animatedDelta, setAnimatedDelta] = useState(0);

//   useEffect(() => {
//     // Maintain last 10 predictions
//     if (predictedBattery !== null) setHistory((prev) => [...prev.slice(-9), predictedBattery]);

//     // Animate actual battery
//     let actualInterval = setInterval(() => {
//       setAnimatedActual((prev) => {
//         if (prev < actualBattery) return prev + 1;
//         clearInterval(actualInterval);
//         return actualBattery;
//       });
//     }, 15);

//     // Animate predicted battery
//     let predictedInterval = setInterval(() => {
//       setAnimatedPredicted((prev) => {
//         if (prev < predictedBattery) return prev + 1;
//         clearInterval(predictedInterval);
//         return predictedBattery;
//       });
//     }, 15);

//     return () => {
//       clearInterval(actualInterval);
//       clearInterval(predictedInterval);
//     };
//   }, [actualBattery, predictedBattery]);

//   useEffect(() => {
//     // Animate Delta Counter
//     const targetDelta = Math.abs(predictedBattery - actualBattery);
//     let delta = 0;
//     const deltaInterval = setInterval(() => {
//       delta += 1;
//       if (delta >= targetDelta) {
//         delta = targetDelta;
//         clearInterval(deltaInterval);
//       }
//       setAnimatedDelta(delta);
//     }, 20);

//     return () => clearInterval(deltaInterval);
//   }, [actualBattery, predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const getDeltaColor = (value) => {
//     if (value <= 5) return "#00b894"; // small difference
//     if (value <= 15) return "#fdcb6e"; // moderate difference
//     return "#d63031"; // large difference
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [animatedActual, animatedPredicted],
//         backgroundColor: [getColor(animatedActual), getColor(animatedPredicted)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const diff = animatedPredicted - animatedActual;
//             const diffText = context.dataIndex === 1 ? ` (Δ ${diff}%)` : "";
//             return `${context.dataset.label}: ${context.parsed.x}%${diffText}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">Battery Overview</h3>

//       {/* Animated Delta Meter */}
//       <div className="flex justify-center items-center mb-4">
//         <div
//           className="px-4 py-2 rounded-full text-white font-semibold animate-pulse transition-all duration-500"
//           style={{ backgroundColor: getDeltaColor(animatedDelta) }}
//         >
//           Δ Difference: {animatedDelta}%
//         </div>
//       </div>

//       {/* Animated Horizontal Bar Comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: animatedActual }, { label: "Predicted", value: animatedPredicted }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">{item.label} Battery: {item.value}%</p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animated Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive Status */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(animatedPredicted) }}>
//         {getStatusText(animatedPredicted)}
//       </p>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);
//   const [animatedActual, setAnimatedActual] = useState(0);
//   const [animatedPredicted, setAnimatedPredicted] = useState(0);
//   const [animatedDelta, setAnimatedDelta] = useState(0);

//   useEffect(() => {
//     if (predictedBattery !== null) setHistory((prev) => [...prev.slice(-9), predictedBattery]);

//     // Animate actual battery
//     let actualInterval = setInterval(() => {
//       setAnimatedActual((prev) => {
//         if (prev < actualBattery) return prev + 1;
//         clearInterval(actualInterval);
//         return actualBattery;
//       });
//     }, 15);

//     // Animate predicted battery
//     let predictedInterval = setInterval(() => {
//       setAnimatedPredicted((prev) => {
//         if (prev < predictedBattery) return prev + 1;
//         clearInterval(predictedInterval);
//         return predictedBattery;
//       });
//     }, 15);

//     return () => {
//       clearInterval(actualInterval);
//       clearInterval(predictedInterval);
//     };
//   }, [actualBattery, predictedBattery]);

//   useEffect(() => {
//     const targetDelta = Math.abs(predictedBattery - actualBattery);
//     let delta = 0;
//     const deltaInterval = setInterval(() => {
//       delta += 1;
//       if (delta >= targetDelta) {
//         delta = targetDelta;
//         clearInterval(deltaInterval);
//       }
//       setAnimatedDelta(delta);
//     }, 20);

//     return () => clearInterval(deltaInterval);
//   }, [actualBattery, predictedBattery]);

//   const getColor = (value) => {
//     if (value > 80) return "#00b894"; // green
//     if (value > 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const getDeltaColor = (value) => {
//     if (value <= 5) return "#00b894";
//     if (value <= 15) return "#fdcb6e";
//     return "#d63031";
//   };

//   const getDeltaAnimation = (value) => {
//     if (value > 15) return "animate-pulse shadow-lg";
//     return "";
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [animatedActual, animatedPredicted],
//         backgroundColor: [getColor(animatedActual), getColor(animatedPredicted)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const diff = animatedPredicted - animatedActual;
//             const diffText = context.dataIndex === 1 ? ` (Δ ${diff}%)` : "";
//             return `${context.dataset.label}: ${context.parsed.x}%${diffText}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   const getStatusText = (value) => {
//     if (value > 80) return "Battery Healthy ✅";
//     if (value > 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">Battery Overview</h3>

//       {/* Live Alert Delta Meter */}
//       <div className="flex justify-center items-center mb-4">
//         <div
//           className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-500 ${getDeltaAnimation(animatedDelta)}`}
//           style={{ backgroundColor: getDeltaColor(animatedDelta) }}
//         >
//           Δ Difference: {animatedDelta}%
//         </div>
//       </div>

//       {/* Animated Horizontal Bar Comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: animatedActual }, { label: "Predicted", value: animatedPredicted }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">{item.label} Battery: {item.value}%</p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animated Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive Status */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(animatedPredicted) }}>
//         {getStatusText(animatedPredicted)}
//       </p>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);
//   const [animatedActual, setAnimatedActual] = useState(0);
//   const [animatedPredicted, setAnimatedPredicted] = useState(0);
//   const [animatedDelta, setAnimatedDelta] = useState(0);

//   // Keep history of predictions
//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   // Animate bars
//   useEffect(() => {
//     let actualInterval = setInterval(() => {
//       setAnimatedActual((prev) => {
//         if (prev < actualBattery) return prev + 1;
//         clearInterval(actualInterval);
//         return actualBattery;
//       });
//     }, 15);

//     let predictedInterval = setInterval(() => {
//       setAnimatedPredicted((prev) => {
//         if (prev < predictedBattery) return prev + 1;
//         clearInterval(predictedInterval);
//         return predictedBattery;
//       });
//     }, 15);

//     return () => {
//       clearInterval(actualInterval);
//       clearInterval(predictedInterval);
//     };
//   }, [actualBattery, predictedBattery]);

//   // Animate delta
//   useEffect(() => {
//     const targetDelta = Math.abs(predictedBattery - actualBattery);
//     let delta = 0;
//     const deltaInterval = setInterval(() => {
//       delta += 1;
//       if (delta >= targetDelta) {
//         delta = targetDelta;
//         clearInterval(deltaInterval);
//       }
//       setAnimatedDelta(delta);
//     }, 20);

//     return () => clearInterval(deltaInterval);
//   }, [actualBattery, predictedBattery]);

//   const getColor = (value) => {
//     if (value >= 80) return "#00b894"; // green
//     if (value >= 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const getDeltaColor = (value) => {
//     if (value <= 5) return "#00b894";
//     if (value <= 15) return "#fdcb6e";
//     return "#d63031";
//   };

//   const getDeltaAnimation = (value) => {
//     if (value > 15) return "animate-pulse shadow-lg";
//     return "";
//   };

//   const getStatusText = (value) => {
//     if (value == null) return "Battery Data Unavailable ❌";
//     if (value >= 80) return "Battery Healthy ✅";
//     if (value >= 50) return "Battery Moderate ⚠️";
//     return "Battery Low ❌ — Charge Soon!";
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [animatedActual, animatedPredicted],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const diff = predictedBattery - actualBattery;
//             const diffText = context.dataIndex === 1 ? ` (Δ ${diff}%)` : "";
//             return `${context.dataset.label}: ${context.parsed.x}%${diffText}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//         pointRadius: 5,
//         pointHoverRadius: 7,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     animation: { duration: 800, easing: "easeOutQuart" },
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">Battery Overview</h3>

//       {/* Live Alert Delta Meter */}
//       <div className="flex justify-center items-center mb-4">
//         <div
//           className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-500 ${getDeltaAnimation(animatedDelta)}`}
//           style={{ backgroundColor: getDeltaColor(animatedDelta) }}
//         >
//           Δ Difference: {animatedDelta}%
//         </div>
//       </div>

//       {/* Animated Horizontal Bar Comparison */}
//       <Bar data={barData} options={barOptions} />

//       {/* Interactive Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">{item.label} Battery: {item.value}%</p>
//             <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden group cursor-pointer">
//               <div
//                 className="h-5 rounded-full transition-all duration-700 ease-out"
//                 style={{
//                   width: `${item.value}%`,
//                   background: `linear-gradient(90deg, ${getColor(item.value)} 0%, ${getColor(item.value)}80 100%)`,
//                 }}
//                 title={`${item.label} Battery Level: ${item.value}%`}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animated Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Descriptive Status using actual predicted value */}
//       <p className="text-center font-semibold text-lg" style={{ color: getColor(predictedBattery) }}>
//         {getStatusText(predictedBattery)}
//       </p>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// export default function BatteryComparisonChart({ actualBattery, predictedBattery }) {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   const getColor = (value) => {
//     if (value >= 80) return "#00b894"; // green
//     if (value >= 50) return "#fdcb6e"; // yellow
//     return "#d63031"; // red
//   };

//   const getStatusText = (value) => {
//     if (value == null) return "Battery data unavailable ❌";
//     if (value >= 90) return "Battery is fully charged and performing at peak efficiency 🔋⚡";
//     if (value >= 70) return "Battery level is good — running efficiently with plenty of backup 🔋🙂";
//     if (value >= 50) return "Battery is moderate — consider recharging soon to maintain performance ⚠️";
//     if (value >= 30) return "Battery is running low — reduced efficiency expected 🚨";
//     return "Battery critically low — plug in immediately to prevent shutdown ❌";
//   };

//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery ?? 0, predictedBattery ?? 0],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">Battery Overview</h3>

//       {/* Bar Chart */}
//       <Bar data={barData} options={barOptions} />

//       {/* Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">
//               {item.label} Battery: {item.value ?? "N/A"}%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-4">
//               <div
//                 className="h-4 rounded-full transition-all duration-500"
//                 style={{
//                   width: `${item.value ?? 0}%`,
//                   backgroundColor: getColor(item.value),
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trend Chart */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Improved Descriptive Text */}
//       <p
//         className="text-center font-semibold text-base mt-2"
//         style={{ color: getColor(predictedBattery), transition: "color 0.3s ease" }}
//       >
//         {getStatusText(predictedBattery)}
//       </p>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryComparisonChart({ predictedBattery }) {
//   const [actualBattery, setActualBattery] = useState(null);
//   const [isCharging, setIsCharging] = useState(false);
//   const [history, setHistory] = useState([]);

//   // ✅ Automatically fetch battery info from system
//   useEffect(() => {
//     async function fetchBattery() {
//       if ("getBattery" in navigator) {
//         const battery = await navigator.getBattery();

//         const updateBatteryInfo = () => {
//           setActualBattery(Math.round(battery.level * 100));
//           setIsCharging(battery.charging);
//         };

//         // Initial call
//         updateBatteryInfo();

//         // Listeners for real-time updates
//         battery.addEventListener("levelchange", updateBatteryInfo);
//         battery.addEventListener("chargingchange", updateBatteryInfo);

//         // Cleanup
//         return () => {
//           battery.removeEventListener("levelchange", updateBatteryInfo);
//           battery.removeEventListener("chargingchange", updateBatteryInfo);
//         };
//       } else {
//         console.warn("Battery Status API not supported on this browser ⚠️");
//       }
//     }

//     fetchBattery();
//   }, []);

//   // Store predicted battery trend
//   useEffect(() => {
//     if (predictedBattery !== null) {
//       setHistory((prev) => [...prev.slice(-9), predictedBattery]);
//     }
//   }, [predictedBattery]);

//   // Color mapping
//   const getColor = (value) => {
//     if (value >= 90) return "#00b894"; // dark green
//     if (value >= 80) return "#55efc4";
//     if (value >= 70) return "#fdcb6e";
//     if (value >= 60) return "#ffeaa7";
//     if (value >= 50) return "#fab1a0";
//     if (value >= 40) return "#ff7675";
//     if (value >= 30) return "#e17055";
//     if (value >= 20) return "#d63031";
//     if (value >= 10) return "#b71540";
//     return "#6c5ce7"; // purple for <10%
//   };

//   // Description logic (charging + discharging)
//   const getStatusText = (value, charging) => {
//     if (value == null) return "Battery data unavailable ❌";

//     if (charging) {
//       if (value >= 90) return "Charging complete — battery is almost full 🔋⚡";
//       if (value >= 80) return "Charging steadily — nearly topped up ✅";
//       if (value >= 70) return "Charging efficiently — good battery health 🔌";
//       if (value >= 60) return "Charging well — performance improving 🔋";
//       if (value >= 50) return "Halfway charged — continue charging 🔄";
//       if (value >= 40) return "Charging — recovering from low levels ⚡";
//       if (value >= 30) return "Charging — battery improving 🚀";
//       if (value >= 20) return "Charging — still low, keep it plugged in 🔌";
//       if (value >= 10) return "Charging started — recovering slowly ⚡";
//       return "Battery critically low — charging initiated 🧡";
//     } else {
//       if (value >= 90) return "Battery full — running efficiently ✅";
//       if (value >= 80) return "Battery level is excellent — smooth performance 🙂";
//       if (value >= 70) return "Battery is good — sufficient backup ⚡";
//       if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
//       if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
//       if (value >= 40) return "Battery low — plug in soon 🚨";
//       if (value >= 30) return "Battery very low — performance may reduce ⚡";
//       if (value >= 20) return "Battery critical — plug in urgently ❗";
//       if (value >= 10) return "Battery dangerously low — almost empty ❌";
//       return "Battery nearly dead — charge immediately 🚨";
//     }
//   };

//   // Bar Chart
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery ?? 0, predictedBattery ?? 0],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   // Trend Chart
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `Prediction: ${context.parsed.y}%`,
//         },
//       },
//     },
//     scales: {
//       x: { display: false },
//       y: { min: 0, max: 100 },
//     },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
//       </h3>

//       <Bar data={barData} options={barOptions} />

//       {/* Trend Line */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Description */}
//       <p
//         className="text-center font-semibold text-base mt-2"
//         style={{
//           color: getColor(actualBattery),
//           transition: "color 0.3s ease",
//         }}
//       >
//         {getStatusText(actualBattery, isCharging)}
//       </p>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryComparisonChart() {
//   const [batteryData, setBatteryData] = useState({ percent: 0, charging: false });
//   const [predictedBattery, setPredictedBattery] = useState(0);
//   const [history, setHistory] = useState([]);

//   // Fetch metrics from backend
//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/system/metrics");
//         const data = await res.json();

//         const actual = data.battery?.percent ?? 0;
//         const charging = data.battery?.charging ?? false;
//         const predicted = data.predicted_battery ?? actual; // fallback to actual if missing

//         setBatteryData({ percent: actual, charging });
//         setPredictedBattery(predicted);

//         // Update prediction history (last 10 predictions)
//         setHistory((prev) => [...prev.slice(-9), predicted]);
//       } catch (err) {
//         console.error("Error fetching metrics:", err);
//       }
//     };

//     fetchMetrics();
//     const interval = setInterval(fetchMetrics, 5000); // refresh every 5s
//     return () => clearInterval(interval);
//   }, []);

//   const getColor = (value) => {
//     if (value >= 90) return "#00b894"; // dark green
//     if (value >= 80) return "#55efc4";
//     if (value >= 70) return "#fdcb6e";
//     if (value >= 60) return "#ffeaa7";
//     if (value >= 50) return "#fab1a0";
//     if (value >= 40) return "#ff7675";
//     if (value >= 30) return "#e17055";
//     if (value >= 20) return "#d63031";
//     if (value >= 10) return "#b71540";
//     return "#6c5ce7"; // <10%
//   };

//   const getStatusText = (value, charging) => {
//     if (value == null) return "Battery data unavailable ❌";

//     if (charging) {
//       if (value >= 90) return "Charging complete — battery almost full 🔋⚡";
//       if (value >= 80) return "Charging — nearly topped up ✅";
//       if (value >= 70) return "Charging — good battery health 🔌";
//       if (value >= 60) return "Charging — battery improving 🔋";
//       if (value >= 50) return "Charging — half charged 🔄";
//       if (value >= 40) return "Charging — recovering from low levels ⚡";
//       if (value >= 30) return "Charging — battery low 🚀";
//       if (value >= 20) return "Charging — still very low 🔌";
//       if (value >= 10) return "Charging started — critically low ⚡";
//       return "Battery critically low — charging initiated 🧡";
//     } else {
//       if (value >= 90) return "Battery full — running efficiently ✅";
//       if (value >= 80) return "Battery excellent — smooth performance 🙂";
//       if (value >= 70) return "Battery good — sufficient backup ⚡";
//       if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
//       if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
//       if (value >= 40) return "Battery low — plug in soon 🚨";
//       if (value >= 30) return "Battery very low — performance may reduce ⚡";
//       if (value >= 20) return "Battery critical — plug in urgently ❗";
//       if (value >= 10) return "Battery dangerously low — almost empty ❌";
//       return "Battery nearly dead — charge immediately 🚨";
//     }
//   };

//   const actualBattery = batteryData.percent;
//   const isCharging = batteryData.charging;

//   // Horizontal Bar Chart
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery, predictedBattery],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   // Trend chart (predicted battery history)
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
//       </h3>

//       {/* Battery Bar */}
//       <Bar data={barData} options={barOptions} />

//       {/* Trend Line */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Dynamic description based on actual battery */}
//       <p
//         className="text-center font-semibold text-base mt-2"
//         style={{ color: getColor(actualBattery), transition: "color 0.3s ease" }}
//       >
//         {getStatusText(actualBattery, isCharging)}
//       </p>
//     </div>
//   );
// }




//Current option 
// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryComparisonChart() {
//   const [batteryData, setBatteryData] = useState({ percent: 0, charging: false });
//   const [predictedBattery, setPredictedBattery] = useState(0);
//   const [history, setHistory] = useState([]);

//   // Fetch metrics from backend
//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/system/metrics");
//         const data = await res.json();

//         const actual = data.battery?.percent ?? 0;
//         const charging = data.battery?.charging ?? false;
//         const predicted = data.predicted_battery ?? actual;

//         setBatteryData({ percent: actual, charging });
//         setPredictedBattery(predicted);
//         setHistory((prev) => [...prev.slice(-9), predicted]);
//       } catch (err) {
//         console.error("Error fetching metrics:", err);
//       }
//     };

//     fetchMetrics();
//     const interval = setInterval(fetchMetrics, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const getColor = (value) => {
//     if (value >= 90) return "#00b894";
//     if (value >= 80) return "#55efc4";
//     if (value >= 70) return "#fdcb6e";
//     if (value >= 60) return "#ffeaa7";
//     if (value >= 50) return "#fab1a0";
//     if (value >= 40) return "#ff7675";
//     if (value >= 30) return "#e17055";
//     if (value >= 20) return "#d63031";
//     if (value >= 10) return "#b71540";
//     return "#6c5ce7";
//   };

//   const getStatusText = (value, charging) => {
//     if (value == null) return "Battery data unavailable ❌";

//     if (charging) {
//       if (value >= 90) return "Charging complete — battery almost full 🔋⚡";
//       if (value >= 80) return "Charging — nearly topped up ✅";
//       if (value >= 70) return "Charging — good battery health 🔌";
//       if (value >= 60) return "Charging — battery improving 🔋";
//       if (value >= 50) return "Charging — half charged 🔄";
//       if (value >= 40) return "Charging — recovering from low levels ⚡";
//       if (value >= 30) return "Charging — battery low 🚀";
//       if (value >= 20) return "Charging — still very low 🔌";
//       if (value >= 10) return "Charging started — critically low ⚡";
//       return "Battery critically low — charging initiated 🧡";
//     } else {
//       if (value >= 90) return "Battery full — running efficiently ✅";
//       if (value >= 80) return "Battery excellent — smooth performance 🙂";
//       if (value >= 70) return "Battery good — sufficient backup ⚡";
//       if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
//       if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
//       if (value >= 40) return "Battery low — performance may reduce 🚨";
//       if (value >= 30) return "Battery very low — plug in soon ⚡";
//       if (value >= 20) return "Battery critical — plug in urgently ❗";
//       if (value >= 10) return "Battery dangerously low — almost empty ❌";
//       return "Battery nearly dead — charge immediately 🚨";
//     }
//   };

//   const actualBattery = batteryData.percent;
//   const isCharging = batteryData.charging;

//   // Horizontal Bar Chart (Actual vs Predicted)
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery, predictedBattery],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery Percentage (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   // Trend chart (Predicted Battery History)
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
//       </h3>

//       {/* Horizontal Bar Chart */}
//       <Bar data={barData} options={barOptions} />

//             {/* Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">
//               {item.label} Battery: {item.value ?? "N/A"}%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-4">
//               <div
//                 className="h-4 rounded-full transition-all duration-500"
//                 style={{
//                   width: `${item.value ?? 0}%`,
//                   backgroundColor: getColor(item.value),
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trend Line */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Dynamic Description based on Actual Battery */}
//       <p
//         className="text-center font-semibold text-base mt-2"
//         style={{ color: getColor(actualBattery), transition: "color 0.3s ease" }}
//       >
//         {getStatusText(actualBattery, isCharging)}
//       </p>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryComparisonChart() {
//   const [batteryData, setBatteryData] = useState({ percent: 0, charging: false });
//   const [predictedBattery, setPredictedBattery] = useState(0);
//   const [history, setHistory] = useState([]);
//   const [advice, setAdvice] = useState("");

//   // Fetch metrics from backend
//   useEffect(() => {
//     const fetchBatteryData = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/predict/battery");
//         const data = await res.json();

//         const actual = data.actual_battery_level ?? 0;
//         const predicted = data.predicted_battery_life ?? actual;
//         const charging =
//           data.charging_status?.toLowerCase() === "charging" ? true : false;
//         const tip = data.advice ?? "";

//         setBatteryData({ percent: actual, charging });
//         setPredictedBattery(predicted);
//         setAdvice(tip);

//         // Maintain last 10 predictions
//         setHistory((prev) => [...prev.slice(-9), predicted]);
//       } catch (err) {
//         console.error("Error fetching battery data:", err);
//       }
//     };

//     fetchBatteryData();
//     const interval = setInterval(fetchBatteryData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const getColor = (value) => {
//     if (value >= 90) return "#00b894";
//     if (value >= 80) return "#55efc4";
//     if (value >= 70) return "#fdcb6e";
//     if (value >= 60) return "#ffeaa7";
//     if (value >= 50) return "#fab1a0";
//     if (value >= 40) return "#ff7675";
//     if (value >= 30) return "#e17055";
//     if (value >= 20) return "#d63031";
//     if (value >= 10) return "#b71540";
//     return "#6c5ce7";
//   };

//   const getStatusText = (value, charging) => {
//     if (value == null) return "Battery data unavailable ❌";

//     if (charging) {
//       if (value >= 90) return "Charging complete — battery almost full 🔋⚡";
//       if (value >= 80) return "Charging — nearly topped up ✅";
//       if (value >= 70) return "Charging — good battery health 🔌";
//       if (value >= 60) return "Charging — battery improving 🔋";
//       if (value >= 50) return "Charging — half charged 🔄";
//       if (value >= 40) return "Charging — recovering from low levels ⚡";
//       if (value >= 30) return "Charging — battery low 🚀";
//       if (value >= 20) return "Charging — still very low 🔌";
//       if (value >= 10) return "Charging started — critically low ⚡";
//       return "Battery critically low — charging initiated 🧡";
//     } else {
//       if (value >= 90) return "Battery full — running efficiently ✅";
//       if (value >= 80) return "Battery excellent — smooth performance 🙂";
//       if (value >= 70) return "Battery good — sufficient backup ⚡";
//       if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
//       if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
//       if (value >= 40) return "Battery low — performance may reduce 🚨";
//       if (value >= 30) return "Battery very low — plug in soon ⚡";
//       if (value >= 20) return "Battery critical — plug in urgently ❗";
//       if (value >= 10) return "Battery dangerously low — almost empty ❌";
//       return "Battery nearly dead — charge immediately 🚨";
//     }
//   };

//   const actualBattery = batteryData.percent;
//   const isCharging = batteryData.charging;

//   // Horizontal Bar Chart (Actual vs Predicted)
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery, predictedBattery],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Battery Percentage (%)" },
//       },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   // Trend chart (Predicted Battery History)
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//       <h3 className="text-xl font-semibold text-gray-700 text-center">
//         Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
//       </h3>

//       {/* Horizontal Bar Chart */}
//       <Bar data={barData} options={barOptions} />

//       {/* Progress Bars */}
//       <div className="flex flex-col gap-3">
//         {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map((item) => (
//           <div key={item.label}>
//             <p className="text-gray-700 font-medium mb-1">
//               {item.label} Battery: {item.value ?? "N/A"}%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-4">
//               <div
//                 className="h-4 rounded-full transition-all duration-500"
//                 style={{
//                   width: `${item.value ?? 0}%`,
//                   backgroundColor: getColor(item.value),
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Trend Line */}
//       <div className="mt-2">
//         <Line data={trendData} options={trendOptions} />
//       </div>

//       {/* Dynamic Description */}
//       <p
//         className="text-center font-semibold text-base mt-2"
//         style={{ color: getColor(actualBattery), transition: "color 0.3s ease" }}
//       >
//         {getStatusText(actualBattery, isCharging)}
//       </p>

//       {/* AI-based Advice */}
//       {advice && (
//         <p className="text-center text-gray-600 italic mt-1">
//           💡 {advice}
//         </p>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function BatteryComparisonChart() {
//   const [batteryData, setBatteryData] = useState({
//     percent: 0,
//     predicted: 0,
//     charging: false,
//   });
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/predict/battery");
//         const data = await res.json();

//         const actual = data.actual_battery_level ?? 0;
//         const predicted = data.predicted_battery_life ?? actual;
//         const charging = data.charging_status === "Charging";

//         setBatteryData({ percent: actual, predicted, charging });
//         setHistory((prev) => [...prev.slice(-9), predicted]);
//       } catch (err) {
//         console.error("Error fetching battery data:", err);
//       }
//     };

//     fetchMetrics();
//     const interval = setInterval(fetchMetrics, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const getColor = (value) => {
//     if (value >= 90) return "#00b894";
//     if (value >= 80) return "#55efc4";
//     if (value >= 70) return "#fdcb6e";
//     if (value >= 60) return "#ffeaa7";
//     if (value >= 50) return "#fab1a0";
//     if (value >= 40) return "#ff7675";
//     if (value >= 30) return "#e17055";
//     if (value >= 20) return "#d63031";
//     if (value >= 10) return "#b71540";
//     return "#6c5ce7";
//   };

//   const getStatusText = (value, charging) => {
//     if (value == null) return "Battery data unavailable ❌";

//     if (charging) {
//       if (value >= 90) return "Charging complete — battery almost full 🔋⚡";
//       if (value >= 80) return "Charging — nearly topped up ✅";
//       if (value >= 70) return "Charging — good battery health 🔌";
//       if (value >= 60) return "Charging — battery improving 🔋";
//       if (value >= 50) return "Charging — half charged 🔄";
//       if (value >= 40) return "Charging — recovering from low levels ⚡";
//       if (value >= 30) return "Charging — battery low 🚀";
//       if (value >= 20) return "Charging — still very low 🔌";
//       if (value >= 10) return "Charging started — critically low ⚡";
//       return "Battery critically low — charging initiated 🧡";
//     } else {
//       if (value >= 90) return "Battery full — running efficiently ✅";
//       if (value >= 80) return "Battery excellent — smooth performance 🙂";
//       if (value >= 70) return "Battery good — sufficient backup ⚡";
//       if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
//       if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
//       if (value >= 40) return "Battery low — performance may reduce 🚨";
//       if (value >= 30) return "Battery very low — plug in soon ⚡";
//       if (value >= 20) return "Battery critical — plug in urgently ❗";
//       if (value >= 10) return "Battery dangerously low — almost empty ❌";
//       return "Battery nearly dead — charge immediately 🚨";
//     }
//   };

//   const actualBattery = batteryData.percent;
//   const predictedBattery = batteryData.predicted;
//   const isCharging = batteryData.charging;

//   // Horizontal Bar Chart
//   const barData = {
//     labels: ["Actual", "Predicted"],
//     datasets: [
//       {
//         label: "Battery Level (%)",
//         data: [actualBattery, predictedBattery],
//         backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
//         borderRadius: 10,
//         hoverOffset: 10,
//       },
//     ],
//   };

//   const barOptions = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
//         },
//       },
//     },
//     scales: {
//       x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery (%)" } },
//       y: { ticks: { font: { size: 14 } } },
//     },
//   };

//   // Trend chart (Predicted Battery History)
//   const trendData = {
//     labels: history.map((_, i) => `#${i + 1}`),
//     datasets: [
//       {
//         label: "Prediction History",
//         data: history,
//         fill: true,
//         backgroundColor: "rgba(0, 185, 148, 0.1)",
//         borderColor: "#00b894",
//         pointBackgroundColor: history.map((v) => getColor(v)),
//         tension: 0.3,
//       },
//     ],
//   };

//   const trendOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
//     },
//     scales: { x: { display: false }, y: { min: 0, max: 100 } },
//   };

//   // return (
//   //   <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//   //     <h3 className="text-xl font-semibold text-gray-700 text-center">
//   //       Battery Overview {getStatusText(actualBattery, isCharging)}
//   //     </h3>

//   //     {/* Horizontal Bar Chart */}
//   //     <Bar data={barData} options={barOptions} />

//   //     {/* Progress Bars */}
//   //     <div className="flex flex-col gap-3">
//   //       {[
//   //         { label: "Actual", value: actualBattery },
//   //         { label: "Predicted", value: predictedBattery },
//   //       ].map((item) => (
//   //         <div key={item.label}>
//   //           <p className="text-gray-700 font-medium mb-1">
//   //             {item.label} Battery: {item.value ?? "N/A"}%
//   //           </p>
//   //           <div className="w-full bg-gray-200 rounded-full h-4">
//   //             <div
//   //               className="h-4 rounded-full transition-all duration-500"
//   //               style={{
//   //                 width: `${item.value ?? 0}%`,
//   //                 backgroundColor: getColor(item.value),
//   //               }}
//   //             ></div>
//   //           </div>
//   //         </div>
//   //       ))}
//   //     </div>

//   //     {/* Trend Line */}
//   //     <div className="mt-2">
//   //       <Line data={trendData} options={trendOptions} />
//   //     </div>
//   //   </div>
//   // );
//   return (
//   <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//     <h3 className="text-xl font-semibold text-gray-700 text-center">
//       Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
//       </h3>
//     {/* Horizontal Bar Chart */}
//     <Bar data={barData} options={barOptions} />

//     {/* Progress Bars */}
//     <div className="flex flex-col gap-3">
//       {[
//         { label: "Actual", value: actualBattery },
//         { label: "Predicted", value: predictedBattery },
//       ].map((item) => (
//         <div key={item.label}>
//           <p className="text-gray-700 font-medium mb-1">
//             {item.label} Battery: {item.value ?? "N/A"}%
//           </p>
//           <div className="w-full bg-gray-200 rounded-full h-4">
//             <div
//               className="h-4 rounded-full transition-all duration-500"
//               style={{
//                 width: `${item.value ?? 0}%`,
//                 backgroundColor: getColor(item.value),
//               }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Trend Line */}
//     <div className="mt-2">
//       <Line data={trendData} options={trendOptions} />
//     </div>

//     {/* Dynamic Description at the Bottom */}
//     <p
//       className="text-center font-semibold text-base mt-2"
//       style={{ color: getColor(actualBattery), transition: "color 0.3s ease" }}
//     >
//       {getStatusText(actualBattery, isCharging)}
//     </p>
//   </div>
// );

// }


import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BatteryChart({ actualBattery, predictedBattery, isCharging }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Keep last 10 predictions for trend line
    setHistory((prev) => [...prev.slice(-9), predictedBattery]);
  }, [predictedBattery]);

  const getColor = (value) => {
    if (value >= 90) return "#00b894";
    if (value >= 80) return "#55efc4";
    if (value >= 70) return "#fdcb6e";
    if (value >= 60) return "#ffeaa7";
    if (value >= 50) return "#fab1a0";
    if (value >= 40) return "#ff7675";
    if (value >= 30) return "#e17055";
    if (value >= 20) return "#d63031";
    if (value >= 10) return "#b71540";
    return "#6c5ce7";
  };

  const getStatusText = (value, charging) => {
    if (value == null) return "Battery data unavailable ❌";

    if (charging) {
      if (value >= 90) return "Charging complete — battery almost full 🔋⚡";
      if (value >= 80) return "Charging — nearly topped up ✅";
      if (value >= 70) return "Charging — good battery health 🔌";
      if (value >= 60) return "Charging — battery improving 🔋";
      if (value >= 50) return "Charging — half charged 🔄";
      if (value >= 40) return "Charging — recovering from low levels ⚡";
      if (value >= 30) return "Charging — battery low 🚀";
      if (value >= 20) return "Charging — still very low 🔌";
      if (value >= 10) return "Charging started — critically low ⚡";
      return "Battery critically low — charging initiated 🧡";
    } else {
      if (value >= 90) return "Battery full — running efficiently ✅";
      if (value >= 80) return "Battery excellent — smooth performance 🙂";
      if (value >= 70) return "Battery good — sufficient backup ⚡";
      if (value >= 60) return "Battery moderate — consider charging soon ⚠️";
      if (value >= 50) return "Battery getting low — recharge recommended ⚠️";
      if (value >= 40) return "Battery low — performance may reduce 🚨";
      if (value >= 30) return "Battery very low — plug in soon ⚡";
      if (value >= 20) return "Battery critical — plug in urgently ❗";
      if (value >= 10) return "Battery dangerously low — almost empty ❌";
      return "Battery nearly dead — charge immediately 🚨";
    }
  };

  // Horizontal Bar Chart
  const barData = {
    labels: ["Actual", "Predicted"],
    datasets: [
      {
        label: "Battery Level (%)",
        data: [actualBattery, predictedBattery],
        backgroundColor: [getColor(actualBattery), getColor(predictedBattery)],
        borderRadius: 10,
        hoverOffset: 10,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.x}%`,
        },
      },
    },
    scales: {
      x: { beginAtZero: true, max: 100, title: { display: true, text: "Battery (%)" } },
      y: { ticks: { font: { size: 14 } } },
    },
  };

  // Trend chart (Predicted Battery History)
  const trendData = {
    labels: history.map((_, i) => `#${i + 1}`),
    datasets: [
      {
        label: "Prediction History",
        data: history,
        fill: true,
        backgroundColor: "rgba(0, 185, 148, 0.1)",
        borderColor: "#00b894",
        pointBackgroundColor: history.map((v) => getColor(v)),
        tension: 0.3,
      },
    ],
  };

  const trendOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (context) => `Prediction: ${context.parsed.y}%` } },
    },
    scales: { x: { display: false }, y: { min: 0, max: 100 } },
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-gray-700 text-center">
        Battery Overview {isCharging ? "🔌 (Charging)" : "⚡ (Discharging)"}
      </h3>

      <Bar data={barData} options={barOptions} />

      <div className="flex flex-col gap-3">
        {[{ label: "Actual", value: actualBattery }, { label: "Predicted", value: predictedBattery }].map(
          (item) => (
            <div key={item.label}>
              <p className="text-gray-700 font-medium mb-1">
                {item.label} Battery: {item.value ?? "N/A"}%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${item.value ?? 0}%`,
                    backgroundColor: getColor(item.value),
                  }}
                ></div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-2">
        <Line data={trendData} options={trendOptions} />
      </div>

      <p
        className="text-center font-semibold text-base mt-2"
        style={{ color: getColor(actualBattery), transition: "color 0.3s ease" }}
      >
        {getStatusText(actualBattery, isCharging)}
      </p>
    </div>
  );
}
