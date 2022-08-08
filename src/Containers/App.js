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
      charData: [],
      searchfield: "",
    };
  }

  fetchData() {
    const { searchfield } = this.state;
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          charData: data,
          dataIsLoaded: true,
          searchfield: searchfield,
        });
      })
      .catch((error) => console.log(error));
  }

  onSearchChange = (event) => {
    console.log("Searching for: " + event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.render();
  }

  render() {
    const { charData, dataIsLoaded, searchfield } = this.state;
    const filteredCharData = charData.filter((char) => {
      return char.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!dataIsLoaded) {
      return (
        <div>
          <h1 className="tc">Breaking Bad Character Viewer</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <h1 className="tc"> Loading.... </h1>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="tc">Breaking Bad Character Viewer</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList charData={filteredCharData} />
            </ErrorBoundary>
          </Scroll>
        </>
      );
    }
  }
}

export default App;
