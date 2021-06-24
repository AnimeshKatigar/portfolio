import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import history from "./routes/createHistory";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Navbar from "./pages/Navbar";
import Routes from "./routes";
import Particles from "./styles/Particle";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Particles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Cards} />
        </Switch>
      </Router>
      {/* <Routes/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
