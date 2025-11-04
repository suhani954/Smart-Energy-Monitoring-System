// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const labels = consumers.map(item => item.process);
//   const values = consumers.map(item => item.usage);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Energy Usage (%)',
//         data: values,
//         backgroundColor: 'rgba(59, 130, 246, 0.6)',
//         borderColor: 'rgba(59, 130, 246, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true, max: 100 },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//     },
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg">
//       <h3 className="text-lg font-semibold mb-2 text-blue-600">High Energy Consumers</h3>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }




// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const validConsumers = Array.isArray(consumers) ? consumers : [];

//   const labels = validConsumers.map(item => item.process || "Unknown");
//   const values = validConsumers.map(item => item.usage || 0);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Energy Usage (%)',
//         data: values,
//         backgroundColor: 'rgba(59, 130, 246, 0.6)',
//         borderColor: 'rgba(59, 130, 246, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: 'Usage (%)',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Process Name',
//         },
//       },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: { enabled: true },
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80 flex flex-col justify-center">
//       <h3 className="text-lg font-semibold mb-2 text-blue-600 text-center">
//         High Energy Consumers
//       </h3>
//       {validConsumers.length > 0 ? (
//         <div className="flex-grow">
//           <Bar data={data} options={options} />
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 mt-8">No high energy consumers detected</p>
//       )}
//     </div>
//   );
// }




// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const labels = consumers.map(item => item.name || "unknown");
//   const values = consumers.map(item => item.cpu_percent || 0);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: values,
//         backgroundColor: 'rgba(59, 130, 246, 0.6)',
//         borderColor: 'rgba(59, 130, 246, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true, max: 100 },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//     },
//     animation: {
//       duration: 800,
//       easing: 'easeOutQuart',
//     },
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80">
//       <h3 className="text-lg font-semibold mb-2 text-blue-600">High Energy Consumers</h3>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }




// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const labels = consumers.map(item => item.name || "unknown");
//   const cpuValues = consumers.map(item => item.cpu_percent || 0);
//   const memoryValues = consumers.map(item => item.memory_percent || 0);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: cpuValues,
//         backgroundColor: 'rgba(59, 130, 246, 0.6)',
//         borderColor: 'rgba(59, 130, 246, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Memory Usage (%)',
//         data: memoryValues,
//         backgroundColor: 'rgba(86, 16, 185, 0.6)',
//         borderColor: 'rgba(86, 16, 185, 0.6)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true, max: 100 },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//     },
//     animation: {
//       duration: 800,
//       easing: 'easeOutQuart',
//     },
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg h-80">
//       <h3 className="text-lg font-semibold mb-2 text-blue-600">High Energy Consumers</h3>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }



// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const [sortBy, setSortBy] = useState('cpu'); // 'cpu' or 'memory'
//   const [sortedConsumers, setSortedConsumers] = useState([]);

//   useEffect(() => {
//     let sorted = [...consumers];
//     if (sortBy === 'cpu') {
//       sorted.sort((a, b) => b.cpu_percent - a.cpu_percent);
//     } else {
//       sorted.sort((a, b) => b.memory_percent - a.memory_percent);
//     }
//     setSortedConsumers(sorted);
//   }, [consumers, sortBy]);

//   const labels = sortedConsumers.map(item => item.name || "unknown");
//   const cpuValues = sortedConsumers.map(item => item.cpu_percent || 0);
//   const memoryValues = sortedConsumers.map(item => item.memory_percent || 0);

//   // Dynamic colors based on usage
//   const getColor = (value) => {
//     if (value > 80) return 'rgba(220, 38, 38, 0.7)'; // red
//     if (value > 50) return 'rgba(234, 179, 8, 0.7)'; // yellow
//     return 'rgba(34, 197, 94, 0.7)'; // green
//   };

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: cpuValues,
//         backgroundColor: cpuValues.map(getColor),
//         borderColor: cpuValues.map(v => getColor(v).replace('0.7', '1')),
//         borderWidth: 1,
//       },
//       {
//         label: 'Memory Usage (%)',
//         data: memoryValues,
//         backgroundColor: memoryValues.map(getColor),
//         borderColor: memoryValues.map(v => getColor(v).replace('0.7', '1')),
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true, max: 100 },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const cpu = sortedConsumers[context.dataIndex].cpu_percent;
//             const mem = sortedConsumers[context.dataIndex].memory_percent;
//             return `CPU: ${cpu}% | Memory: ${mem}%`;
//           }
//         }
//       },
//     },
//     animation: {
//       duration: 800,
//       easing: 'easeOutQuart',
//     },
//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         const selected = sortedConsumers[index];
//         alert(`Details:\nName: ${selected.name}\nCPU: ${selected.cpu_percent}%\nMemory: ${selected.memory_percent}%`);
//       }
//     }
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg">
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-lg font-semibold text-blue-600">High Energy Consumers</h3>
//         <div>
//           <label className="mr-2 text-sm font-medium">Sort by:</label>
//           <select
//             className="border rounded p-1 text-sm"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="cpu">CPU</option>
//             <option value="memory">Memory</option>
//           </select>
//         </div>
//       </div>
//       <Bar data={data} options={options} height={300} />
//     </div>
//   );
// }



// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const [sortBy, setSortBy] = useState('cpu'); // 'cpu' or 'memory'
//   const [sortedConsumers, setSortedConsumers] = useState([]);
//   const [selectedConsumer, setSelectedConsumer] = useState(null); // For modal info

//   useEffect(() => {
//     let sorted = [...consumers];
//     if (sortBy === 'cpu') {
//       sorted.sort((a, b) => b.cpu_percent - a.cpu_percent);
//     } else {
//       sorted.sort((a, b) => b.memory_percent - a.memory_percent);
//     }
//     setSortedConsumers(sorted);
//   }, [consumers, sortBy]);

//   const labels = sortedConsumers.map(item => item.name || "unknown");
//   const cpuValues = sortedConsumers.map(item => item.cpu_percent || 0);
//   const memoryValues = sortedConsumers.map(item => item.memory_percent || 0);

//   const getColor = (value) => {
//     if (value > 80) return 'rgba(220, 38, 38, 0.7)';
//     if (value > 50) return 'rgba(234, 179, 8, 0.7)';
//     return 'rgba(34, 197, 94, 0.7)';
//   };

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: cpuValues,
//         backgroundColor: cpuValues.map(getColor),
//         borderColor: cpuValues.map(v => getColor(v).replace('0.7', '1')),
//         borderWidth: 1,
//       },
//       {
//         label: 'Memory Usage (%)',
//         data: memoryValues,
//         backgroundColor: memoryValues.map(getColor),
//         borderColor: memoryValues.map(v => getColor(v).replace('0.7', '1')),
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: { beginAtZero: true, max: 100 },
//     },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const cpu = sortedConsumers[context.dataIndex].cpu_percent;
//             const mem = sortedConsumers[context.dataIndex].memory_percent;
//             return `CPU: ${cpu}% | Memory: ${mem}%`;
//           }
//         }
//       },
//     },
//     animation: {
//       duration: 800,
//       easing: 'easeOutQuart',
//     },
//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         setSelectedConsumer(sortedConsumers[index]); // Show info box
//       }
//     }
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg relative">
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-lg font-semibold text-blue-600">High Energy Consumers</h3>
//         <div>
//           <label className="mr-2 text-sm font-medium">Sort by:</label>
//           <select
//             className="border rounded p-1 text-sm"
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//           >
//             <option value="cpu">CPU</option>
//             <option value="memory">Memory</option>
//           </select>
//         </div>
//       </div>

//       <Bar data={data} options={options} height={300} />

//       {/* Info Box for selected consumer */}
//       {selectedConsumer && (
//         <div className="absolute top-10 left-10 bg-white border shadow-lg p-3 rounded-lg z-10 w-64">
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-semibold">{selectedConsumer.name}</h4>
//             <button
//               className="text-red-500 font-bold"
//               onClick={() => setSelectedConsumer(null)}
//             >
//               ✕
//             </button>
//           </div>
//           <p><strong>CPU Usage:</strong> {selectedConsumer.cpu_percent}%</p>
//           <p><strong>Memory Usage:</strong> {selectedConsumer.memory_percent}%</p>
//         </div>
//       )}
//     </div>
//   );
// }




// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const [sortByCPU, setSortByCPU] = useState(true); // toggle sorting for CPU chart
//   const [sortByMemory, setSortByMemory] = useState(true); // toggle sorting for Memory chart

//   const [sortedCPU, setSortedCPU] = useState([]);
//   const [sortedMemory, setSortedMemory] = useState([]);

//   useEffect(() => {
//     // Sort CPU chart
//     const cpuSorted = [...consumers].sort((a, b) => b.cpu_percent - a.cpu_percent);
//     setSortedCPU(cpuSorted);

//     // Sort Memory chart
//     const memSorted = [...consumers].sort((a, b) => b.memory_percent - a.memory_percent);
//     setSortedMemory(memSorted);
//   }, [consumers]);

//   const getColor = (value) => {
//     if (value > 80) return 'rgba(220, 38, 38, 0.7)'; // red
//     if (value > 50) return 'rgba(234, 179, 8, 0.7)'; // yellow
//     return 'rgba(34, 197, 94, 0.7)'; // green
//   };

//   // CPU chart data
//   const cpuData = {
//     labels: sortedCPU.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: sortedCPU.map(c => c.cpu_percent || 0),
//         backgroundColor: sortedCPU.map(c => getColor(c.cpu_percent)),
//         borderColor: sortedCPU.map(c => getColor(c.cpu_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   // Memory chart data
//   const memoryData = {
//     labels: sortedMemory.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'Memory Usage (%)',
//         data: sortedMemory.map(c => c.memory_percent || 0),
//         backgroundColor: sortedMemory.map(c => getColor(c.memory_percent)),
//         borderColor: sortedMemory.map(c => getColor(c.memory_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   const options = {
//     scales: { y: { beginAtZero: true, max: 100 } },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.raw}%`
//         }
//       }
//     },
//     animation: { duration: 800, easing: 'easeOutQuart' }
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg">
//       <h3 className="text-lg font-semibold text-blue-600 mb-4">High Energy Consumers</h3>

//       {/* CPU Chart */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-2 text-gray-700">CPU Usage</h4>
//         <Bar data={cpuData} options={options} height={200} />
//       </div>

//       {/* Memory Chart */}
//       <div>
//         <h4 className="font-medium mb-2 text-gray-700">Memory Usage</h4>
//         <Bar data={memoryData} options={options} height={200} />
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const [sortedCPU, setSortedCPU] = useState([]);
//   const [sortedMemory, setSortedMemory] = useState([]);
//   const [selectedConsumer, setSelectedConsumer] = useState(null); // for info box

//   useEffect(() => {
//     const cpuSorted = [...consumers].sort((a, b) => b.cpu_percent - a.cpu_percent);
//     const memSorted = [...consumers].sort((a, b) => b.memory_percent - a.memory_percent);
//     setSortedCPU(cpuSorted);
//     setSortedMemory(memSorted);
//   }, [consumers]);

//   const getColor = (value) => {
//     if (value > 80) return 'rgba(220, 38, 38, 0.7)'; // red
//     if (value > 50) return 'rgba(234, 179, 8, 0.7)'; // yellow
//     return 'rgba(34, 197, 94, 0.7)'; // green
//   };

//   // CPU chart data
//   const cpuData = {
//     labels: sortedCPU.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: sortedCPU.map(c => c.cpu_percent || 0),
//         backgroundColor: sortedCPU.map(c => getColor(c.cpu_percent)),
//         borderColor: sortedCPU.map(c => getColor(c.cpu_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   // Memory chart data
//   const memoryData = {
//     labels: sortedMemory.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'Memory Usage (%)',
//         data: sortedMemory.map(c => c.memory_percent || 0),
//         backgroundColor: sortedMemory.map(c => getColor(c.memory_percent)),
//         borderColor: sortedMemory.map(c => getColor(c.memory_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   // Chart common options
//   const baseOptions = {
//     scales: { y: { beginAtZero: true, max: 100 } },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.raw}%`
//         }
//       }
//     },
//     animation: { duration: 800, easing: 'easeOutQuart' }
//   };

//   // Separate onClick handlers for CPU and Memory charts
//   const cpuOptions = {
//     ...baseOptions,
//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         setSelectedConsumer(sortedCPU[index]);
//       }
//     }
//   };

//   const memoryOptions = {
//     ...baseOptions,
//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         setSelectedConsumer(sortedMemory[index]);
//       }
//     }
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg relative">
//       <h3 className="text-lg font-semibold text-blue-600 mb-4">High Energy Consumers</h3>

//       {/* CPU Chart */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-2 text-gray-700">CPU Usage</h4>
//         <Bar data={cpuData} options={cpuOptions} height={200} />
//       </div>

//       {/* Memory Chart */}
//       <div>
//         <h4 className="font-medium mb-2 text-gray-700">Memory Usage</h4>
//         <Bar data={memoryData} options={memoryOptions} height={200} />
//       </div>

//       {/* Floating Info Box */}
//       {selectedConsumer && (
//         <div className="absolute top-10 left-10 bg-white border shadow-lg p-3 rounded-lg z-10 w-64">
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-semibold">{selectedConsumer.name}</h4>
//             <button
//               className="text-red-500 font-bold"
//               onClick={() => setSelectedConsumer(null)}
//             >
//               ✕
//             </button>
//           </div>
//           <p><strong>CPU Usage:</strong> {selectedConsumer.cpu_percent}%</p>
//           <p><strong>Memory Usage:</strong> {selectedConsumer.memory_percent}%</p>
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function HighConsumersChart({ consumers }) {
//   const [sortedCPU, setSortedCPU] = useState([]);
//   const [sortedMemory, setSortedMemory] = useState([]);
//   const [selectedConsumer, setSelectedConsumer] = useState(null);
//   const [boxPos, setBoxPos] = useState({ x: 0, y: 0 });
//   const chartRefCPU = useRef(null);
//   const chartRefMem = useRef(null);

//   useEffect(() => {
//     const cpuSorted = [...consumers].sort((a, b) => b.cpu_percent - a.cpu_percent);
//     const memSorted = [...consumers].sort((a, b) => b.memory_percent - a.memory_percent);
//     setSortedCPU(cpuSorted);
//     setSortedMemory(memSorted);
//   }, [consumers]);

//   const getColor = (value) => {
//     if (value > 80) return 'rgba(220, 38, 38, 0.7)';
//     if (value > 50) return 'rgba(234, 179, 8, 0.7)';
//     return 'rgba(34, 197, 94, 0.7)';
//   };

//   const cpuData = {
//     labels: sortedCPU.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'CPU Usage (%)',
//         data: sortedCPU.map(c => c.cpu_percent || 0),
//         backgroundColor: sortedCPU.map(c => getColor(c.cpu_percent)),
//         borderColor: sortedCPU.map(c => getColor(c.cpu_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   const memoryData = {
//     labels: sortedMemory.map(c => c.name || "unknown"),
//     datasets: [
//       {
//         label: 'Memory Usage (%)',
//         data: sortedMemory.map(c => c.memory_percent || 0),
//         backgroundColor: sortedMemory.map(c => getColor(c.memory_percent)),
//         borderColor: sortedMemory.map(c => getColor(c.memory_percent).replace('0.7', '1')),
//         borderWidth: 1,
//       }
//     ]
//   };

//   const baseOptions = {
//     scales: { y: { beginAtZero: true, max: 100 } },
//     plugins: {
//       legend: { position: 'bottom' },
//       tooltip: { enabled: true },
//     },
//     animation: { duration: 800, easing: 'easeOutQuart' }
//   };

//   const handleBarClick = (evt, elements, sortedData, chartRef) => {
//     if (elements.length > 0) {
//       const index = elements[0].index;
//       const consumer = sortedData[index];
//       const chart = chartRef.current;
//       const bar = chart?.canvas.getBoundingClientRect();
//       const element = chart?.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true)[0];
//       if (element) {
//         const { x, y } = chart.getDatasetMeta(element.datasetIndex).data[element.index].tooltipPosition();
//         const chartPosition = chart.canvas.getBoundingClientRect();
//         setBoxPos({ x: chartPosition.left + x, y: chartPosition.top + y });
//       }
//       setSelectedConsumer(consumer);
//     }
//   };

//   const cpuOptions = {
//     ...baseOptions,
//     onClick: (evt, elements) => handleBarClick(evt, elements, sortedCPU, chartRefCPU)
//   };

//   const memoryOptions = {
//     ...baseOptions,
//     onClick: (evt, elements) => handleBarClick(evt, elements, sortedMemory, chartRefMem)
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg relative">
//       <h3 className="text-lg font-semibold text-blue-600 mb-4">High Energy Consumers</h3>

//       {/* CPU Chart */}
//       <div className="mb-6 relative">
//         <h4 className="font-medium mb-2 text-gray-700">CPU Usage</h4>
//         <Bar ref={chartRefCPU} data={cpuData} options={cpuOptions} height={200} />
//       </div>

//       {/* Memory Chart */}
//       <div className="relative">
//         <h4 className="font-medium mb-2 text-gray-700">Memory Usage</h4>
//         <Bar ref={chartRefMem} data={memoryData} options={memoryOptions} height={200} />
//       </div>

//       {/* Floating Info Box near clicked bar */}
//       {selectedConsumer && (
//         <div
//           className="fixed bg-white border shadow-lg p-3 rounded-lg z-50 w-64 transition-all"
//           style={{
//             left: `${boxPos.x + 20}px`,
//             top: `${boxPos.y - 40}px`,
//           }}
//         >
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-semibold">{selectedConsumer.name}</h4>
//             <button
//               className="text-red-500 font-bold"
//               onClick={() => setSelectedConsumer(null)}
//             >
//               ✕
//             </button>
//           </div>
//           <p><strong>CPU Usage:</strong> {selectedConsumer.cpu_percent}%</p>
//           <p><strong>Memory Usage:</strong> {selectedConsumer.memory_percent}%</p>
//         </div>
//       )}
//     </div>
//   );
// }




// import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export default function HighConsumersChart({ consumers }) {
//   const [selectedProcess, setSelectedProcess] = useState(null);

//   const data = consumers.map((item) => ({
//     name: item.name || "Unknown",
//     cpu_usage: item.cpu_percent || 0,
//     memory_usage: item.memory_percent || 0,
//   }));

//   const maxCPU = Math.max(...data.map((item) => item.cpu_usage));
//   const maxMemory = Math.max(...data.map((item) => item.memory_usage));

//   const handleBarClick = (data, type) => {
//     setSelectedProcess({
//       name: data.name,
//       type,
//       value: type === "CPU" ? data.cpu_usage : data.memory_usage,
//     });
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded-lg space-y-6">
//       <h3 className="text-lg font-semibold text-blue-600 mb-2">
//         High Energy Consumers
//       </h3>

//       {/* CPU Usage Chart */}
//       <div className="h-72">
//         <h4 className="text-md font-semibold text-gray-700 mb-2">
//           CPU Usage (%)
//         </h4>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis domain={[0, Math.ceil(maxCPU / 50) * 50]} />
//             <Tooltip
//               formatter={(value) => [`${value}%`, "Usage"]}
//               labelFormatter={(label) => `Process: ${label}`}
//               contentStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <Legend />
//             <Bar
//               dataKey="cpu_usage"
//               fill="rgba(59, 130, 246, 0.6)"
//               stroke="rgba(59, 130, 246, 1)"
//               onClick={(bar) => handleBarClick(bar, "CPU")}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Memory Usage Chart */}
//       <div className="h-72">
//         <h4 className="text-md font-semibold text-gray-700 mb-2">
//           Memory Usage (%)
//         </h4>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis domain={[0, Math.ceil(maxMemory / 50) * 50]} />
//             <Tooltip
//               formatter={(value) => [`${value}%`, "Usage"]}
//               labelFormatter={(label) => `Process: ${label}`}
//               contentStyle={{
//                 backgroundColor: "#fff",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//               }}
//             />
//             <Legend />
//             <Bar
//               dataKey="memory_usage"
//               fill="rgba(86, 16, 185, 0.6)"
//               stroke="rgba(86, 16, 185, 1)"
//               onClick={(bar) => handleBarClick(bar, "Memory")}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Floating Info Box */}
//       {selectedProcess && (
//         <div className="mt-4 bg-blue-50 border border-blue-200 p-3 rounded-lg shadow-sm transition-all duration-300">
//           <p className="text-blue-700 font-semibold mb-1">
//             {selectedProcess.name}
//           </p>
//           <p className="text-gray-700">
//             {selectedProcess.type} Usage:{" "}
//             <span className="font-semibold">
//               {selectedProcess.value.toFixed(2)}%
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export default function HighConsumersChart({ consumers }) {
//   const [selectedProcess, setSelectedProcess] = useState(null);
//   const wrapperRef = useRef(null);

//   // build data
//   const data = (consumers || []).map((item) => ({
//     name: item.name || "Unknown",
//     cpu_usage: Number(item.cpu_percent ?? 0),
//     memory_usage: Number(item.memory_percent ?? 0),
//   }));

//   const maxCPU = data.length ? Math.max(...data.map((d) => d.cpu_usage)) : 100;
//   const maxMemory = data.length ? Math.max(...data.map((d) => d.memory_usage)) : 100;

//   // safe click handler: only set selectedProcess when there's a valid payload
//   const handleBarClick = (payload, type) => {
//     // payload can be different shapes depending on Recharts version:
//     // - sometimes the Bar's onClick param is (data, index)
//     // - sometimes it's (payload) where payload.payload is the actual data point
//     const point = payload && (payload.payload ?? payload);

//     if (!point || typeof point !== "object" || point.name === undefined) {
//       // invalid click (click on empty area or legend); ignore
//       return;
//     }

//     const value = type === "CPU" ? point.cpu_usage : point.memory_usage;
//     setSelectedProcess({ name: point.name, type, value });
//   };

//   // clear selection when clicking outside the bars (wrapper area)
//   const handleWrapperClick = (e) => {
//     // if click is on the chart bars, their handlers will run first and stopPropagation won't be used,
//     // but this still gives a convenient way to clear when clicking whitespace
//     // ensure we don't accidentally clear when clicking inside the info box
//     if (!wrapperRef.current) return;
//     if (!wrapperRef.current.contains(e.target)) {
//       setSelectedProcess(null);
//     } else {
//       // if user clicked inside wrapper but not on a bar, clear selection
//       // find if target is a rect (bar) or text/legend etc.
//       const isBar = e.target.tagName === "rect" && e.target.classList.contains("recharts-rectangle");
//       if (!isBar) setSelectedProcess(null);
//     }
//   };

//   // Attach document click to clear selection if user clicks outside chart entirely
//   useEffect(() => {
//     document.addEventListener("click", handleWrapperClick);
//     return () => document.removeEventListener("click", handleWrapperClick);
//   }, []);

//   // small helper to format values to show decimal only when needed
//   const fmt = (v) => (Number.isInteger(v) ? `${v}%` : `${v.toFixed(2)}%`);

//   return (
//     <div
//       ref={wrapperRef}
//       className="bg-white shadow p-4 rounded-lg space-y-6"
//       // Prevent native focus outline on inner svg elements by setting focus rules on wrapper
//       // (we also include a small style tag below to catch the SVG focus specifically)
//     >
//       <style>{`
//         /* remove focus outline on recharts SVG elements (prevents black rectangle when chart is clicked) */
//         .recharts-wrapper svg:focus { outline: none; }
//         /* ensure rectangles (bars) don't get default outline when focused */
//         .recharts-wrapper rect:focus { outline: none; }
//       `}</style>

//       <h3 className="text-lg font-semibold text-blue-600 mb-2">High Energy Consumers</h3>

//       {/* CPU Usage Chart */}
//       <div className="h-72">
//         <h4 className="text-md font-semibold text-gray-700 mb-2">CPU Usage (%)</h4>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis domain={[0, Math.ceil(maxCPU / 50) * 50]} />
//             <Tooltip formatter={(value) => [`${value}%`, "Usage"]} labelFormatter={(label) => `Process: ${label}`} />
//             <Legend />
//             {/* Note: onClick signature can be (data, index) OR (payload) depending on Recharts version.
//                 We accept the first parameter and handle both shapes in handleBarClick */}
//             <Bar
//               dataKey="cpu_usage"
//               fill="rgba(59, 130, 246, 0.8)"
//               stroke="rgba(59, 130, 246, 1)"
//               onClick={(a, b) => handleBarClick(a ?? b, "CPU")}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Memory Usage Chart */}
//       <div className="h-72">
//         <h4 className="text-md font-semibold text-gray-700 mb-2">Memory Usage (%)</h4>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis domain={[0, Math.ceil(maxMemory / 50) * 50]} />
//             <Tooltip formatter={(value) => [`${value}%`, "Usage"]} labelFormatter={(label) => `Process: ${label}`} />
//             <Legend />
//             <Bar
//               dataKey="memory_usage"
//               fill="rgba(86, 16, 185, 0.8)"
//               stroke="rgba(86, 16, 185, 1)"
//               onClick={(a, b) => handleBarClick(a ?? b, "Memory")}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Info box shown below charts (only when a valid bar was clicked) */}
//       {selectedProcess && (
//         <div className="mt-4 bg-blue-50 border border-blue-200 p-3 rounded-lg shadow-sm transition-all duration-300">
//           <div className="flex justify-between items-center mb-1">
//             <p className="text-blue-700 font-semibold">{selectedProcess.name}</p>
//             <button
//               className="text-red-500 font-bold"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedProcess(null);
//               }}
//             >
//               ✕
//             </button>
//           </div>
//           <p className="text-gray-700">
//             {selectedProcess.type} Usage: <span className="font-semibold">{fmt(selectedProcess.value)}</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HighConsumersChart({ consumers }) {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [boxPos, setBoxPos] = useState({ x: 0, y: 0 });

  const wrapperRef = useRef(null);
  const cpuChartRef = useRef(null);
  const memChartRef = useRef(null);

  // Build data
  const data = (consumers || []).map((item) => ({
    name: item.name || "Unknown",
    cpu_usage: Number(item.cpu_percent ?? 0),
    memory_usage: Number(item.memory_percent ?? 0),
  }));

  const maxCPU = data.length ? Math.max(...data.map((d) => d.cpu_usage)) : 100;
  const maxMemory = data.length ? Math.max(...data.map((d) => d.memory_usage)) : 100;

  // Safe bar click handler
  const handleBarClick = (payload, type, chartRef) => {
    const point = payload && (payload.payload ?? payload);
    if (!point || typeof point !== "object" || point.name === undefined) return;

    // Safe getBoundingClientRect
    let chartRect;
    if (chartRef && chartRef.current && chartRef.current.container) {
      chartRect = chartRef.current.container.getBoundingClientRect();
    } else {
      const wrapperRect = wrapperRef.current?.getBoundingClientRect();
      chartRect = wrapperRect || { left: 50, top: 50, width: 300, height: 200 };
    }

    const barIndex = data.findIndex((d) => d.name === point.name);
    let barX = chartRect.left + chartRect.width * (barIndex / data.length) + chartRect.width / (2 * data.length);
    let barY = chartRect.top + chartRect.height / 2;

    // Keep info box inside viewport
    const boxWidth = 220;
    const boxHeight = 80;
    const padding = 10;

    if (barX + boxWidth / 2 + padding > window.innerWidth) {
      barX = window.innerWidth - boxWidth / 2 - padding;
    } else if (barX - boxWidth / 2 - padding < 0) {
      barX = boxWidth / 2 + padding;
    }

    if (barY - boxHeight - padding < 0) {
      barY = boxHeight + padding;
    } else if (barY + padding > window.innerHeight) {
      barY = window.innerHeight - padding;
    }

    setBoxPos({ x: barX, y: barY });
    setSelectedProcess({
      name: point.name,
      type,
      value: type === "CPU" ? point.cpu_usage : point.memory_usage,
    });
  };

  // Clear selection when clicking outside wrapper
  const handleWrapperClick = (e) => {
    if (!wrapperRef.current) return;
    if (!wrapperRef.current.contains(e.target)) {
      setSelectedProcess(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleWrapperClick);
    return () => document.removeEventListener("click", handleWrapperClick);
  }, []);

  const fmt = (v) => (Number.isInteger(v) ? `${v}%` : `${v.toFixed(2)}%`);

  return (
    <div ref={wrapperRef} className="bg-white shadow p-8 rounded-lg relative">
      {/* Remove black outline */}
      <style>{`
        .recharts-wrapper svg:focus { outline: none; }
        .recharts-wrapper rect:focus { outline: none; }
      `}</style>

      <h3 className="text-lg font-semibold text-blue-600 mb-2 text-center">High Energy Consumers</h3>

      {/* CPU Chart */}
      <div className="h-72">
        <h4 className="text-md font-semibold text-gray-700 mb-2">CPU Usage (%)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart ref={cpuChartRef} data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, Math.ceil(maxCPU / 50) * 50]} />
            <Tooltip formatter={(value) => [`${value}%`, "Usage"]} labelFormatter={(label) => `Process: ${label}`} />
            <Legend />
            <Bar
              dataKey="cpu_usage"
              fill="rgba(59, 130, 246, 0.8)"
              stroke="rgba(59, 130, 246, 1)"
              onClick={(a, b) => handleBarClick(a ?? b, "CPU", cpuChartRef)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Memory Chart */}
      <div className="h-72">
        <h4 className="text-md font-semibold text-gray-700 mb-2">Memory Usage (%)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart ref={memChartRef} data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, Math.ceil(maxMemory / 50) * 50]} />
            <Tooltip formatter={(value) => [`${value}%`, "Usage"]} labelFormatter={(label) => `Process: ${label}`} />
            <Legend />
            <Bar
              dataKey="memory_usage"
              fill="rgba(86, 16, 185, 0.8)"
              stroke="rgba(86, 16, 185, 1)"
              onClick={(a, b) => handleBarClick(a ?? b, "Memory", memChartRef)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Floating Info Box */}
      {selectedProcess && (
        <div
          className="absolute bg-blue-50 border border-blue-200 p-3 rounded-lg shadow-lg z-50"
          style={{
            left: `${boxPos.x}px`,
            top: `${boxPos.y}px`,
            transform: "translate(-50%, -100%)",
            minWidth: "200px",
          }}
        >
          <div className="flex justify-between items-center mb-1">
            <p className="text-blue-700 font-semibold">{selectedProcess.name}</p>
            <button
              className="text-red-500 font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProcess(null);
              }}
            >
              ✕
            </button>
          </div>
          <p className="text-gray-700">
            {selectedProcess.type} Usage: <span className="font-semibold">{fmt(selectedProcess.value)}</span>
          </p>
        </div>
      )}
    </div>
  );
}
