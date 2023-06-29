
const AllCocktails = ({ cocktails }) => {
    return (
        <div className="apéro red">
            <h2>Tous les cocktails</h2>
            {cocktails.map(cocktail => (
                <div key={cocktail.id}>
                    <h3>{cocktail.name}</h3>
                    <p>Prix : {cocktail.price}€</p>
                    <p>Ingrédients : {cocktail.ingredients.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default AllCocktails;
