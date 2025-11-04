// import { Link } from "react-router-dom";
// import { LayoutDashboard, Cpu, BarChart3 } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <aside
//       className="h-screen w-56 bg-white 
//       text-purple shadow-lg backdrop-blur-md flex flex-col fixed top-0 left-0 z-40"
//     >
//       <nav className="mt-20 flex flex-col space-y-4 px-4">
//         <Link
//           to="/"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-all"
//         >
//           <LayoutDashboard size={20} />
//           <span className="text-sm font-medium">Dashboard</span>
//         </Link>

//         <Link
//           to="/processes"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-all"
//         >
//           <Cpu size={20} />
//           <span className="text-sm font-medium">Processes</span>
//         </Link>

//         <Link
//           to="/predictions"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-all"
//         >
//           <BarChart3 size={20} />
//           <span className="text-sm font-medium">Predictions</span>
//         </Link>
//       </nav>
//     </aside>
//   );
// }


// import { Link } from "react-router-dom";
// import { LayoutDashboard, Cpu, BarChart3 } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <aside
//       className="fixed top-0 left-0 h-screen w-56 bg-white text-purple shadow-lg z-10 flex flex-col"
//     >
//       <nav className="mt-24 flex flex-col space-y-4 px-4">
//         <Link
//           to="/"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple/10 transition-all"
//         >
//           <LayoutDashboard size={20} />
//           <span className="text-sm font-medium">Dashboard</span>
//         </Link>

//         <Link
//           to="/processes"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple/10 transition-all"
//         >
//           <Cpu size={20} />
//           <span className="text-sm font-medium">Processes</span>
//         </Link>

//         <Link
//           to="/predictions"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple/10 transition-all"
//         >
//           <BarChart3 size={20} />
//           <span className="text-sm font-medium">Predictions</span>
//         </Link>
//       </nav>
//     </aside>
//   );
// }


// import { Link } from "react-router-dom";
// import { Home, LayoutDashboard, Cpu, BarChart3, Info } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <aside className="fixed top-0 left-0 h-screen w-56 bg-white text-purple-700 shadow-lg z-10 flex flex-col">
//       <nav className="mt-24 flex flex-col space-y-4 px-4">
        
//         {/* Home */}
//         <Link
//           to="/home"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 transition-all"
//         >
//           <Home size={20} />
//           <span className="text-sm font-medium">Home</span>
//         </Link>

//         {/* Dashboard */}
//         <Link
//           to="/dashboard"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 transition-all"
//         >
//           <LayoutDashboard size={20} />
//           <span className="text-sm font-medium">Dashboard</span>
//         </Link>

//         {/* Processes */}
//         <Link
//           to="/processes"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 transition-all"
//         >
//           <Cpu size={20} />
//           <span className="text-sm font-medium">Processes</span>
//         </Link>

//         {/* Predictions */}
//         <Link
//           to="/predictions"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 transition-all"
//         >
//           <BarChart3 size={20} />
//           <span className="text-sm font-medium">Predictions</span>
//         </Link>

//         {/* About */}
//         <Link
//           to="/about"
//           className="flex items-center gap-3 p-2 rounded-md hover:bg-purple-100 transition-all"
//         >
//           <Info size={20} />
//           <span className="text-sm font-medium">About</span>
//         </Link>
//       </nav>
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Cpu, BarChart3, Info } from "lucide-react";

export default function Sidebar() {
  const linkClasses =
    "flex items-center gap-3 p-2 rounded-md transition-all duration-200";
  const activeClasses = "bg-purple-100 text-purple-700 shadow-md";
  const inactiveClasses =
    "text-purple-700 hover:bg-purple-100 hover:text-purple-900";

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-white shadow-lg z-10 flex flex-col">
      <nav className="mt-24 flex flex-col space-y-4 px-4">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <Home size={20} />
          <span className="text-sm font-medium">Home</span>
        </NavLink>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <LayoutDashboard size={20} />
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        {/* Processes */}
        <NavLink
          to="/processes"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <Cpu size={20} />
          <span className="text-sm font-medium">Processes</span>
        </NavLink>

        {/* Predictions */}
        <NavLink
          to="/predictions"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <BarChart3 size={20} />
          <span className="text-sm font-medium">Predictions</span>
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <Info size={20} />
          <span className="text-sm font-medium">About</span>
        </NavLink>
      </nav>
    </aside>
  );
}
