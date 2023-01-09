import "./DrinksCard.css";

function DrinksCard(props) {
  const { dataDrinks } = props;

  function drinkMap(drink, index) {
    const { strDrinkThumb, strDrink, strInstructions } = drink;
    return (
      <div key={`cards__item-${index}`} className="cards__item">
        <img src={strDrinkThumb} />
        <h2>{strDrink}</h2>
        <p>{strInstructions}</p>
      </div>
    );
  }

  return (
    <div className="cards">
      {dataDrinks.length > 0 ? (
        dataDrinks.map(drinkMap)
      ) : (
        <p> <b>Ups! No tenemos esa bebida!</b></p>
      )}
    </div>
  );
}

export default DrinksCard;
