import "./SearchTypeAheadDropDown.css";
import React from "react";
import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

export default function SearchTypeAheadComponent(props) {
  const [text, setText] = useState("");
  const [countries, setCountries] = useState([]);

  const onTextChange = (e) => {
    debugger;
    const { iteams } = props;
    let countries = [];

    const value = e.target.value;

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      countries = iteams.filter((v) => {
        return v.name.common.includes(value);
      });
    }

    console.log("Suggestions after filter", countries.length);

    setText(value);
    setCountries(countries);
  };

  const suggestionSelected = (value) => {
    setText(value);
    setCountries(countries);
  };

  const renderSuggestions = (props) => {
    if (countries === undefined || countries.length === 0) {
      const items = props.iteams;
    }

    console.log(" renderSuggestions countries :", countries);
    if (countries === undefined || countries.length === 0) {
      return null;
    }
    return (
      <ul>
        {countries.map((country) => (
          <li
            key={country.name.common}
            onClick={(e) => suggestionSelected(country.name.common)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    );
  };

  console.log("text looking for ", text);
  return (
    <div className="SearchAheadDropDown">
      <input
        onChange={onTextChange}
        placeholder="Search Country name"
        value={text}
        type="text"
      />
      {renderSuggestions(props)}
    </div>
  );
}
