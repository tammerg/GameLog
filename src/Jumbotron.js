import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>Welcome to Game Log</h1>
          <h2>A place to manage your current gaming backlog</h2>
          <p>
            <a className="btn btn-primary btn-lg" href="/games" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
