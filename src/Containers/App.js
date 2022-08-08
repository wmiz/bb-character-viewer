import "./App.css";
import React, { Component } from "react";
import "tachyons";
import CardList from "./CardList";
class App extends Component {
  constructor() {
    super();

    this.state = {
      dataIsLoaded: false,
      charData: [],
      value: "",
    };
  }

  fetchData() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          charData: data,
          dataIsLoaded: true,
          value: "",
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.render();
  }

  render() {
    const { charData, dataIsLoaded } = this.state;
    if (!dataIsLoaded) {
      return (
        <div>
          <h1 className="tc">Breaking Bad Character Viewer</h1>
          <h1 className="tc"> Loading.... </h1>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="tc">Breaking Bad Character Viewer</h1>
          <CardList charData={charData}></CardList>
        </>
      );
    }
  }
}

export default App;
