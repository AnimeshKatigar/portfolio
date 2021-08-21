import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import history from "./routes/createHistory";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Particles from "./styles/Particle";
import Resume from "./pages/Resume";
import Scroll from "./Scroll";

const Loading = () => (
  <div className="loadingDiv">
    <div className="loading">
      <div></div>
      <div></div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);
  return (
    <div className="App">
      <Router history={history}>
        <Particles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Cards} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Scroll />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
