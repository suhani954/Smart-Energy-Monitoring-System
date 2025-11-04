// import Navbar from "../components/layout/Navbar";
// import Sidebar from "../components/layout/Sidebar";

// export default function About() {
//   return (
//     <div className="flex min-h-screen w-full bg-white text-purple-700 min-h-screen px-8 py-12">
//         <Sidebar />
        
//         <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
//             <Navbar />
            
//             <main className="flex-1 pt-4 overflow-y-auto">
//                 <div className="max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-extrabold mb-3">About This Platform</h1>
//         <p className="text-purple-500 text-lg">
//           The Smart Energy Monitoring System is designed to revolutionize energy management and sustainability.
//         </p>
//       </div>

//       {/* Project Overview */}
//       <section className="max-w-5xl mx-auto mb-8">
//         <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
//         <p className="text-purple-500 leading-relaxed">
//           The AI Energy Advisor aims to bridge the gap between raw energy data and actionable insights. It uses AI-driven analytics to monitor, predict, and optimize energy usage, helping users save energy and promote eco-friendly practices.
//         </p>
//       </section>

//       {/* Objectives */}
//       <section className="max-w-5xl mx-auto mb-8">
//         <h2 className="text-2xl font-bold mb-3">Objectives</h2>
//         <ul className="list-disc ml-6 text-purple-500 space-y-2">
//           <li>Optimize energy consumption and reduce wastage.</li>
//           <li>Automate energy monitoring through AI algorithms.</li>
//           <li>Predict future energy trends for better planning.</li>
//           <li>Enable data-driven and sustainable energy decisions.</li>
//         </ul>
//       </section>

//       {/* How It Works */}
//       <section className="max-w-5xl mx-auto mb-8">
//         <h2 className="text-2xl font-bold mb-3">How It Works</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             { step: "Data Collection", desc: "Energy data is gathered from IoT sensors or monitoring devices." },
//             { step: "AI Analysis", desc: <> Machine learning models process and analyze energy usage trends.<br /> <strong> COMING SOON </strong> </> },
//             { step: "Visualization", desc: "Interactive dashboards display detailed energy insights." },
//             { step: "Recommendations", desc: "The system suggests optimization actions based on analysis." },
//           ].map((item, i) => (
//             <div key={i} className="p-6 border border-purple-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
//               <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
//               <p className="text-purple-500">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tech Stack */}
//       <section className="max-w-5xl mx-auto mb-8">
//         <h2 className="text-2xl font-bold mb-3">Technology Stack</h2>
//         <div className="grid md:grid-cols-3 gap-6 text-center">
//           {[
//             "Frontend: React + Tailwind CSS",
//             "Backend: FastAPI / Flask",
//             "Database: MongoDB",
//             <> AI/ML: Scikit-learn, TensorFlow <br /><strong> STILL WORKING ON </strong> </>,
//             "IoT: Raspberry Pi Integration",
//             "Visualization: Recharts / Chart.js",
//           ].map((tech, i) => (
//             <div key={i} className="p-4 border border-purple-200 rounded-xl shadow-sm hover:shadow-lg transition">
//               {tech}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Future Scope */}
//       <section className="max-w-5xl mx-auto mb-16">
//         <h2 className="text-2xl font-bold mb-3">Future Scope</h2>
//         <ul className="list-disc ml-6 text-purple-500 space-y-2">
//           <li>Integration with renewable energy sources (solar/wind).</li>
//           <li>Adding voice-enabled AI assistant for energy guidance.</li>
//           <li>IoT-based automated control systems for real-time optimization.</li>
//           <li>Energy pattern prediction for large-scale smart grids.</li>
//         </ul>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-purple-200 pt-6 text-center text-sm text-purple-400">
//         © 2025 AI Energy Advisor. Built by Suhani.
//       </footer>
//     </div>
//     </main>
//     </div>
//     </div>
//   );
// }

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import {
  Info,
  Target,
  Cpu,
  Layers,
  Wrench,
  Monitor,
  Server,
  Database,
  Code2,
  Brain,
  BarChart3,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex min-h-screen w-full bg-white text-purple-700 px-8 py-12">
      <Sidebar />

      <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
        <Navbar />

        <main className="flex-1 pt-4 overflow-y-auto">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-3 flex justify-center items-center gap-3">
                About This Platform
              </h1>
              <p className="text-purple-500 text-lg">
                The Smart Energy Monitoring System enhances energy efficiency and sustainability
                through IoT-enabled tracking, analysis, and actionable insights.
              </p>
            </div>

            {/* Project Overview */}
            {/* <section className="max-w-5xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-purple-500" /> Project Overview
              </h2>
              <p className="text-purple-500 leading-relaxed">
                The Smart Energy Monitoring System helps users track, analyze, and optimize
                their energy usage in real-time. Using IoT-based sensors and backend analytics,
                it ensures smarter decisions, energy conservation, and operational efficiency.
                AI/ML integration is being developed to provide predictive energy insights.
              </p>
            </section> */}

            {/* Project Overview */}
<section className="max-w-5xl mx-auto mb-8">
  <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200 shadow-md hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-3 flex items-center gap-3 text-purple-700">
      <Cpu className="w-6 h-6 text-purple-600" /> Project Overview
    </h2>
    <p className="text-purple-500 leading-relaxed text-justify text-lg">
      The Smart Energy Monitoring System helps users
      track, analyze, and optimize their energy usage in real time. Using IoT-based sensors and
      backend analytics, it ensures smarter decisions, energy conservation, and operational
      efficiency. AI/ML integration is being
      developed to provide predictive energy insights and improve sustainability.
    </p>
  </div>
</section>


            {/* Objectives */}
            {/* <section className="max-w-5xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-500" /> Objectives
              </h2>
              <ul className="list-disc ml-6 text-purple-500 space-y-2">
                <li>Monitor and optimize energy consumption efficiently.</li>
                <li>Automate data collection using IoT-based modules.</li>
                <li>Visualize data using an intuitive dashboard.</li>
                <li>Integrate AI/ML for predictive analysis (in progress).</li>
              </ul>
            </section> */}

            {/* Objectives */}
<section className="max-w-5xl mx-auto mb-8">
  <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200 shadow-md hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-3 flex items-center gap-3 text-purple-700">
      <Target className="w-6 h-6 text-purple-600" /> Objectives
    </h2>
    <ul className="space-y-1 text-purple-600 text-lg">
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Monitor and optimize energy consumption efficiently.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Automate data collection using IoT-based modules.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Visualize data using an intuitive, interactive dashboard.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Integrate AI/ML for predictive analysis (in progress).
      </li>
    </ul>
  </div>
</section>

            {/* How It Works */}
            <section className="max-w-5xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-500" /> How It Works
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { step: "Data Collection", desc: "Energy data is gathered from IoT-based sensors and system readings." },
                  { step: "Data Processing", desc: "Backend processes data using FastAPI and Python modules like ctypes." },
                  { step: "Visualization", desc: "Interactive charts display real-time and historical metrics." },
                  {
                    step: "AI/ML Insights",
                    desc: (
                      <>
                        Machine learning models will analyze usage trends and predict energy behavior. <br />
                        <strong>IN PROGRESS</strong>
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 border border-purple-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition hover:bg-purple-50"
                  >
                    <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
                    <p className="text-purple-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack (NEW SECTION) */}
            <section className="max-w-5xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
                Technology Stack
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <Monitor className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Frontend</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    React.js, Tailwind CSS, Lucide Icons, React Router DOM
                  </p>
                </div>

                {/* Visualization */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <BarChart3 className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Visualization</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    Recharts, Chart.js
                  </p>
                </div>

                {/* Backend */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <Server className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Backend</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    FastAPI (Python), psutil, ctypes
                  </p>
                </div>

                {/* Database */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <Database className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Database</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    MongoDB (Planned) — for storing energy and process metrics
                  </p>
                </div>

                {/* AI/ML Integration */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <Brain className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">AI / ML Module</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    <> Scikit-learn, TensorFlow — for predictive analytics and smart energy forecasting <br /> <strong> IN PROGRESS </strong> </>
                  </p>
                </div>

                {/* Tools & Integration */}
                <div className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white text-center">
                  <Wrench className="w-8 h-8 mx-auto mb-3 text-purple-700" />
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Development & Integration</h3>
                  <p className="text-purple-500 text-sm leading-relaxed">
                    VS Code, Git, GitHub, npm — seamless coordination between frontend and backend APIs
                  </p>
                </div>
              </div>
            </section>

            {/* Future Scope */}
            {/* <section className="max-w-5xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-500" /> Future Scope
              </h2>
              <ul className="list-disc ml-6 text-purple-500 space-y-2">
                <li>Integration with renewable energy sources like solar or wind.</li>
                <li>Implementation of AI/ML models for predictive optimization.</li>
                <li>IoT-based automatic control of connected devices.</li>
                <li>Voice-enabled assistant for energy reports and alerts.</li>
              </ul>
            </section> */}

            {/* Future Scope */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200 shadow-md hover:shadow-lg transition">
    <h2 className="text-2xl font-bold mb-3 flex items-center gap-3 text-purple-700">
      <Target className="w-6 h-6 text-purple-600" /> Future Scope
    </h2>
    <ul className="space-y-1 text-purple-600 text-lg">
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Integration with renewable energy sources like solar or wind.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Implementation of AI/ML models for predictive optimization.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> IoT-based automatic control of connected devices.
      </li>
      <li className="flex items-start gap-2">
        <span className="text-purple-700 font-bold">•</span> Voice-enabled assistant for energy reports and alerts.
      </li>
    </ul>
  </div>
</section>


            {/* Footer */}
            <footer className="border-t border-purple-200 pt-6 text-center text-sm text-purple-400">
              © 2025 Smart Energy Monitoring System. Built by Suhani.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
