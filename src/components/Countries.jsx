import Country from "./Country";

import { useState, useEffect } from "react";

const Countries = ({ countries, filterValue }) => {
  const [countriesToShow, setCountriesToShow] = useState([]);
  useEffect(() => {
    setCountriesToShow(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [filterValue]);

  const totalOfCountriesDisplayed = countriesToShow.length;

  const handleShowCountry = (id) => {
    const selectedCountry = countries.find((country) => country.ccn3 === id);
    if (selectedCountry) {
      setCountriesToShow([selectedCountry]);
    }
  };

  return (
    <div>
      {totalOfCountriesDisplayed > 10 ? (
        <p>Too many matches, be more specific</p>
      ) : totalOfCountriesDisplayed > 1 ? (
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.ccn3}>
              {country.name.common}
              <button onClick={() => handleShowCountry(country.ccn3)}>
                Show
              </button>
            </li>
          ))}
        </ul>
      ) : totalOfCountriesDisplayed === 1 ? (
        <Country country={countriesToShow[0]} />
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
};

export default Countries;
