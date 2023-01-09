import { useEffect, useState } from "react";
import "./App.css";
import getDrinks from "./api/api";
import DrinksCard from "./components/DrinksCard";

function App() {
  const [drink, setDrink] = useState("");
  const [dataDrinks, setDataDrinks] = useState([]);

  function getDrinksApi(event = null) {
    if (event) {
      event.preventDefault();
    }
    getDrinks(drink).then((response) =>
      setDataDrinks(response.data.drinks ? response.data.drinks : [])
    );
  }

  useEffect(() => {
    getDrinksApi();
  }, []);

  return (
    <div className="App">
      <form onSubmit={getDrinksApi}>
        <input
          type="text"
          placeholder="Escriba el nombre de una bebida"
          value={drink}
          onChange={(event) => setDrink(event.target.value)}
        />
      </form>

      <DrinksCard dataDrinks={dataDrinks} />
    </div>
  );
}

export default App;
