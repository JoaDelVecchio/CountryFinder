const Countries = ({ countries, filterValue }) => {
  return (
    <ul>
      {countries
        .filter((country) =>
          !filterValue
            ? true
            : country.name.common
                .toLowerCase()
                .includes(filterValue.toLowerCase())
        )
        .map((country, i) => (
          <li key={i}>{country.name.common}</li>
        ))}
    </ul>
  );
};

export default Countries;
