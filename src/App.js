import React from "react";
import "./App.css";
import SearchTypeAheadComponent from "./SearchTypeAheadComponent";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState('');
  const [countries, setCountries] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Result is logged ", result);
          setCountries(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setCountries(error);
        }
      );
  }, []);

  debugger;
  return (
    <div className="App">
      <SearchTypeAheadComponent iteams={countries} />
    </div>
  );
}
