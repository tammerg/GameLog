import React from "react";
import axios from "axios";

class Games extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get("https://api-endpoint.igdb.com", {
        headers: {
          "user-key": process.env.API_KEY,
          Accept: "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
  render() {
    return;
  }
}

export default Games;
