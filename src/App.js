import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './components/NavBar';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {

  return (
    <>
    <div>
    <Router>
    <nav className="bg-white p-4 border-slate-300">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-gray-800 font-medium">
            </div>
            <div className="text-gray-800 font-medium">
              <Link to="/" className="ml-4">
                Home
              </Link>
              <Link to="/destination" className="ml-4">
              Destination
              </Link>
              <Link to="/crew" className="ml-4">
              Crew
              </Link>
              <Link to="/technology" className="ml-4">
              Technology
              </Link>
            </div>
          </div>
        </nav>
        <div className="relative">
          <Routes>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
          <Route path="/technology" element={<Technology />}/>
          </Routes>
        </div>
      </Router>
      <div className="text-center relative">
      <div className="flex">
        <img src="./Space.jpg" className="w-full blur-xs brightness-50" alt="Interface" />
        <div className="absolute inset-y-0 right-0 flex items-center justify-start text-white p-4">
          <div className="flex flex-col items-left">
            <h2>SO, YOU WANT TO TRAVEL TO SPACE</h2>
            <h1 className="text-5xl text-white  mb-4">SPACE</h1>
            <h3 className="text-left text-2xl">Outer space refers to the areas between planets, solar systems, galaxies, galaxy clusters and galaxy superclusters.
            <br />
             There is little matter in outer space. It is a hard vacuum, without any air. This also makes it extremely cold.
             <br />
              There are some stray particles and radiation, though.
              </h3>
            <button className="text-black text-left bg-blue-100 rounded-lg p-2 m-5">
              Contact us
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
