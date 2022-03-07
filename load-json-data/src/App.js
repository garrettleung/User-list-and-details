
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./pages/UserList";
import UserPage from "./Users"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' exact component={UserList} />
      <Route exact path='/:id' exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;