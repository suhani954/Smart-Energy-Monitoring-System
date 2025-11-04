// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-6">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
