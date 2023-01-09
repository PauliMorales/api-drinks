import axios from "axios";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

const getDrinks = (drinkName = "") => {
  return axios.get(`${baseUrl}?s=${drinkName}`);
};

export default getDrinks;
