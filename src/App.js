import React from "react";
import "./App.css";
import SearchTypeAheadComponent from "./SearchTypeAheadComponent";
import cities from "./cities";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
      countries: [],
    };
  }
  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Result is logged ", result);
          this.setState({
            isLoaded: true,
            countries: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { countries } = this.state;
    debugger;
    return (
      <div className="App">
        <SearchTypeAheadComponent iteams={countries} />
      </div>
    );
  }
}
