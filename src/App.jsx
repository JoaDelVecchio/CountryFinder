import { useEffect, useState } from "react";
import countriesServices from "./services/countriesServices";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = countriesServices
      .getAll()
      .then((data) => {
        setCountries(data), setLoading(false);
      })
      .catch((err) => {
        setError(err), console.error(err), setLoading(false);
      });
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>Country Finder</h1>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {error ? (
        <p>{error}</p>
      ) : (
        <Countries countries={countries} filterValue={filterValue} />
      )}
    </>
  );
}

export default App;
