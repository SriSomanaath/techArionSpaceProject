import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import logo from "./assets/shared/logo.svg";

function App() {

  return (
    <Router>
    <div className="app">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row justify-between">
          <img src={logo} alt="logo" className="lg:h-10 h-8 w-8" />
        </div>

        <nav className="hideNav" >
          <ul className="navList">
            <li className="navText">
              <Link to="/">
               00 Home
              </Link>
            </li>

            <li className="navText">
              <Link to="/Destination">
               01 Destination
              </Link>
            </li>

            <li className="navText">
              <Link to="/Crew">
               02 Crew
              </Link>
            </li>

            <li className="navText">
              <Link to="/Technology">
               03 Technology
              </Link>
            </li>
          </ul>
        </nav>
      </motion.header>

      <div className="pages">
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Destination">
            <Destination />
          </Route>

          <Route path="/Crew">
            <Crew />
          </Route>

          <Route path="/Technology">
            <Technology />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
