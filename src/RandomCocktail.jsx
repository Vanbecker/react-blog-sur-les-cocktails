
const RandomCocktail = ({ cocktails }) => {
  // Générer un index aléatoire pour sélectionner un cocktail aléatoire
  const randomIndex = Math.floor(Math.random() * cocktails.length);
  const randomCocktail = cocktails[randomIndex];

  return (
    <div className="aléatoire red">
      <h2>Cocktail aléatoire</h2>
      <h3>{randomCocktail.name}</h3>
      <p>Prix : {randomCocktail.price}€</p>
      <p>Ingrédients : {randomCocktail.ingredients.join(', ')}</p>
    </div>
  );
};

export default RandomCocktail;
