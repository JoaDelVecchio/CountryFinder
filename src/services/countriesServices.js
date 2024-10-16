import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "There was an error getting the data from the server",
        error
      );
      throw error;
    });
};

export default { getAll };
