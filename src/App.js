import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import history from "./routes/createHistory";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Particles from "./styles/Particle";
import Resume from "./pages/Resume";

function App() {
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
        <Footer />
      </Router>
      {/* <Routes/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
