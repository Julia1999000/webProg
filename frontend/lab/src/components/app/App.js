import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "../pages/content";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";
import News from "../pages/news";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <div className="site">
              <div className="bg">
                <Route path="/news" component={News} />
                <Route path="/" exact component={Content} />
              </div>
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </div>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
