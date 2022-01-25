import "./SearchTypeAheadDropDown.css";
import React from "react";

export default class SearchTypeAheadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      countries: [],
    };
  }

  onTextChange = (e) => {
    const { iteams } = this.props;
    let countries = [];

    debugger;
    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      countries = iteams.filter((v) => {
        return v.name.common.includes(value);
      });
    }

    console.log("Suggestions after filter", countries.length);

    this.setState(() => ({
      text: value,
      countries,
    }));
  };

  suggestionSelected = (value) => {
    this.setState(() => ({
      text: value,
      countries: [],
    }));
  };

  renderSuggestions = () => {
    let countries = this.state.countries;

    if (countries === undefined || countries.length === 0) {
      const items = this.props.iteams;
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
            onClick={(e) => this.suggestionSelected(country.name.common)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { text } = this.state;
    console.log("text looking for ", text);
    return (
      <div className="SearchAheadDropDown">
        <input
          onChange={this.onTextChange}
          placeholder="Search Country name"
          value={text}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
