import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Processes from './pages/Processes';
import Predictions from './pages/Predictions';
import Home from './pages/Home.js';
import About from './pages/About.js';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/processes" element={<Processes />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
