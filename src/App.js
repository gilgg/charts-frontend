import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AddPage from "./components/Pages/AddPage";
import useFetch from "./hooks/useFetch";

const App = () => {
  useFetch();

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/add" exact>
          <AddPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
