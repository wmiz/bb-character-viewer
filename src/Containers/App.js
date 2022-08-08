import "./App.css";
import React, { Component } from "react";
import "tachyons";
import CardList from "./CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
class App extends Component {
  constructor() {
    super();

    this.state = {
      dataIsLoaded: false,
      deathData: [],
      charData: [],
      searchfield: "",
    };
  }

  fetchData() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          charData: data,
        });
      })
      .catch((error) => console.log(error));

    fetch(`https://breakingbadapi.com/api/deaths`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          deathData: data,
          dataIsLoaded: true,
        });
      })
      .catch((error) => console.log(error));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.render();
  }

  render() {
    const { charData, dataIsLoaded, searchfield, deathData } = this.state;
    const filteredCharData = charData.filter((char) => {
      return (
        char.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        char.nickname.toLowerCase().includes(searchfield.toLowerCase())
      );
    });
    if (!dataIsLoaded) {
      return (
        <div>
          <h1 className="tc">Breaking Bad Character Explorer</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <h1 className="tc"> Loading.... </h1>
        </div>
      );
    } else {
      return (
        <>
          <div style={{ height: "20vh" }}>
            <h1 className="tc">Breaking Bad Character Explorer</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundary>
              <CardList charData={filteredCharData} deathData={deathData} />
            </ErrorBoundary>
          </Scroll>
        </>
      );
    }
  }
}

export default App;
