import { useEffect, useState } from "react";
import countriesServices from "./services/countriesServices";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [filterValue, setFilterValue] = useState(null);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    countriesServices
      .getAll()
      .then((data) => setCountries(data))
      .catch((err) => {
        setError(err), console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Country Finder</h1>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {error ? <p>{error}</p> : <Countries countries={countries} />}
    </>
  );
}

export default App;
