import Header from "./components/header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Headlines from "./Headlines";
import Topics from "./Topics";
import Article from "./Article";

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/headlines/:field">
            <Headlines />
          </Route>

          <Route exact path="/topics/:query">
            <Topics />
          </Route>

          <Route exact path="/articles/:field/:id">
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
