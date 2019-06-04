import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map((pic) => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.medium} alt="heroes" />
            </div>
          );
        })
        this.setState({ pictures: pictures });
       // console.log("state", this.state.pictures);
      });
  }

  render() {
    return(
      <div className="App">
      {this.state.pictures}
      </div>
    )
  }
}

export default App;
