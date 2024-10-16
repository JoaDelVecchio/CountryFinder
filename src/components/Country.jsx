const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png || country.flag.svg}
        alt={country.flags.alt}
      />
    </div>
  );
};

export default Country;
