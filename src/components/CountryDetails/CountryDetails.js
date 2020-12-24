import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  const { name, capital, region, population } = country;
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data && data[0]))
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Region: {region}</h3>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default CountryDetails;
