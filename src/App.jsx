import { useState } from "react";
import Filter from "./components/Filter";

function App() {
  const [filterValue, setFilterValue] = useState(null);
  const [countries, setCountries] = useState([]);
  return (
    <>
      <h1>Country Finder</h1>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <Countries countries={countries} />
    </>
  );
}

export default App;
