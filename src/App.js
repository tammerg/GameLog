import React from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Games from "./Games";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Router>
          <Games path="/games" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
