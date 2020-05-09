import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import User from "./components/user";
import Postcode from "./components/postcode";
import Changename from "./components/changename";
import NotFoundPage from "./components/notfoundpage";
import { Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/user"
          exact
          render={() => {
            return <h1>Welcome Home</h1>;
          }}
        />
        <Route path="/user/:username" exact component={User} />
        <Route path="/user/:username/postcode" component={Postcode} />
        <Route path="/user/:username/change-nameroute" component={Changename} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
