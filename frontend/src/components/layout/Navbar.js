// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Dashboard", path: "/" },
//     { name: "Processes", path: "/processes" },
//     { name: "Predictions", path: "/predictions" },
//   ];

//   return (
//     <header
//       className="fixed top-0 left-56 right-0 z-30 
//       bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 
//       shadow-md px-6 py-4 flex justify-between items-center transition-all duration-300"
//     >
//       <h1 className="text-2xl font-bold text-white">AI Energy Advisor</h1>

//       {/* Desktop Links */}
//       <nav className="hidden md:flex space-x-6">
//         {links.map((link) => (
//           <Link
//             key={link.path}
//             to={link.path}
//             className={`transition-colors duration-200 ${
//               location.pathname === link.path
//                 ? "text-indigo-200 font-semibold border-b-2 border-indigo-400"
//                 : "text-white hover:text-indigo-200"
//             }`}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Mobile Menu Toggle */}
//       <button
//         className="md:hidden focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <svg
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//           />
//         </svg>
//       </button>

//       {/* Mobile Links */}
//       {menuOpen && (
//         <nav className="absolute top-16 left-56 right-0 w-[calc(100%-14rem)] 
//         bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 
//         flex flex-col items-center md:hidden py-4 space-y-2 transition-all duration-300">
//           {links.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               onClick={() => setMenuOpen(false)}
//               className={`transition-colors duration-200 ${
//                 location.pathname === link.path
//                   ? "text-indigo-200 font-semibold"
//                   : "text-white hover:text-indigo-200"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }

// export default function Navbar() {
//   return (
//     <header
//       className="fixed top-0 left-56 right-0 z-30 
//       bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-600 
//       shadow-md px-6 py-4 flex items-center justify-between"
//     >
//       <h1 className="text-2xl font-bold text-white tracking-wide">
//         AI Energy Advisor
//       </h1>
//     </header>
//   );
// }

// export default function Navbar() {
//   return (
//     <header
//       className="fixed top-0 left-56 right-0 z-30 
//       bg-white
//       shadow-sm h-16 flex items-center px-6"
//     >
//       <h1 className="text-2xl font-bold text-purple tracking-wide">
//         AI Energy Advisor
//       </h1>
//     </header>
//   );
// }

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full h-16 bg-white shadow z-30 flex items-center px-6"
    >
      <h1 className="text-2xl font-bold text-purple tracking-wide">
        Smart Energy Monitoring System
      </h1>
    </header>
  );
}
