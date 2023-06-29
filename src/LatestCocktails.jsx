const LatestCocktails = ({ cocktails }) => {
    // Filtrer les cocktails publiés et obtenir les trois derniers
    const latestCocktails = cocktails
        .filter(cocktail => cocktail.isPublished)
        .slice(-3); // Récupérer les trois derniers éléments

    return (
        <div className="aperitif red">
            <h2>Derniers cocktails</h2>
            {latestCocktails.map(cocktail => (
                <div key={cocktail.id}>
                    <h3>{cocktail.name}</h3>
                    <p>Prix : {cocktail.price}€</p>
                    <p>Ingrédients : {cocktail.ingredients.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default LatestCocktails;
