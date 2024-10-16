import Country from "./Country";
const Countries = ({ countries, filterValue }) => {
  const countriesToShow = countries.filter((country) =>
    !filterValue
      ? true
      : country.name.common.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalOfCountriesDisplayed = countriesToShow.length;

  return (
    <div>
      {totalOfCountriesDisplayed > 10 ? (
        <p>Too many matches, be more specific</p>
      ) : totalOfCountriesDisplayed > 1 ? (
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.ccn3}>{country.name.common}</li>
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
