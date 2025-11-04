import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function SystemUsageChart({ cpu, memory, disk }) {
  const data = {
    labels: ['CPU', 'Memory', 'Disk'],
    datasets: [
      {
        label: 'System Usage (%)',
        data: [cpu, memory, disk],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
    plugins: {
      legend: { position: 'bottom' },
    },
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-blue-600 text-center">System Usage Overview</h3>
      <Line data={data} options={options} />
    </div>
  );
}
