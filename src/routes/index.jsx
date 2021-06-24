import { Switch, Route, Router } from "react-router-dom";
import history from "./createHistory"
import Home from "../pages/Home";
import Cards from "../pages/Cards"


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Cards} />
      </Switch>
    </Router>
  );
};

export default Routes;
