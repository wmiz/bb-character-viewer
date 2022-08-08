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
      searchParams: {
        value: "",
        species: "",
      },
    };
  }

  fetchData() {
    fetch("https://breakingbadapi.com/api/characters?limit=10")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ charData: data, dataIsLoaded: true });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { charData, dataIsLoaded } = this.state;
    if (!dataIsLoaded) {
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    } else {
      return (
        <>
          <h1 className="tc">Star Wars Character Viewer</h1>
          <CardList charData={charData}></CardList>
        </>
      );
    }
  }
}

export default App;
