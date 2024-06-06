import Success from "./Success";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Login";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
