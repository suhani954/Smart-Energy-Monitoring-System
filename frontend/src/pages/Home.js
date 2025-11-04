import { Link } from "react-router-dom";
import { ArrowRight, Zap, BarChart3, Cpu, Leaf } from "lucide-react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-white text-purple-700 min-h-screen flex flex-col items-center px-6 py-12">
        <Sidebar />

        <div className="flex-1 p-6 ml-56 transition-all duration-300 ease-in-out overflow-y-auto">
            <Navbar />
            <main className="flex-1 pt-4 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mt-4">
        <h1 className="text-4xl font-extrabold mb-4">
          Smart Energy Monitoring System
        </h1>
        <p className="text-lg mb-8 text-purple-500">
          Monitor and analyze your energy usage in Real-Time.
        </p>
        <Link
          to="/dashboard"
          className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
        >
          Get Started <ArrowRight className="inline ml-2 w-4 h-4" />
        </Link>
      </section>

      {/* Key Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl text-center">
        {[
          { icon: <Zap />, title: "Real-Time Monitoring", desc: "Track energy consumption and performance in real-time." },
          { icon: <BarChart3 />, title: "AI Insights", desc: <> Analyze data and receive actionable recommendations. <br /> <strong> IN PROGRESS </strong> </> },
          { icon: <Cpu />, title: "Predictive Analysis", desc: "Forecast future energy trends and optimize usage." },
          { icon: <Leaf />, title: "Sustainability", desc: "Reduce wastage and support greener energy practices." },
          { icon: <ArrowRight />, title: "Efficiency Reports", desc: "Visual reports to understand your energy patterns." },
          { icon: <Cpu />, title: "Automation", desc: <> Intelligent system suggestions for smarter operations.<br /> <strong> IN PROGRESS </strong> </> },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 border border-purple-200 rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
          >
            <div className="flex justify-center text-purple-700 mb-3 text-3xl">{item.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-purple-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why It Matters Section */}
      <section className="mt-20 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Save Energy, Save the Future</h2>
        <p className="text-purple-500 leading-relaxed">
          Every watt counts. The Smart Energy Monitoring System helps organizations and individuals make data-driven energy decisions, leading to lower costs, reduced emissions, and a sustainable future.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-purple-200 pt-6 text-center text-sm text-purple-400">
        © 2025 AI Energy Advisor. All Rights Reserved.
      </footer>
    </div>
    </main>
    </div>
    </div>
  );
}
