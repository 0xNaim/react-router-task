import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  const { name, capital } = props.country;
  return (
    <div className="country-detail">
      <h2>Name: {name}</h2>
      <h4>Capital: {capital}</h4>
      <p>
        <Link to={`/details/${name}`}>Show detail of {name}</Link>
      </p>
    </div>
  );
};

export default Country;
