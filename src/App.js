// Import des modules et des composants
import './App.css'; // Import du fichier CSS pour le style de l'application
import Header from './Header';
import RandomCocktail from './RandomCocktail';
import LatestCocktails from './LatestCocktails';
import AllCocktails from './AllCocktails';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  // Définition des données utilisateur
  const userFromApi = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    email: 'contact@johndoe.fr',
    phone: '0123456789',
    address: '1 rue de la Paix',
    city: 'Paris',
    zipCode: '75000',
    country: 'France',
    job: 'Développeur web',
  }

  // Définition des données des cocktails
  const cocktailsFromApi = [
    {
      id: 1,
      name: 'Mojito',
      price: 8,
      ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Eau gazeuse'],
      isPublished: true,
    },
    {
      id: 2,
      name: 'Margarita',
      price: 10,
      ingredients: ['Tequila', 'Triple sec', 'Citron vert'],
      isPublished: true,
    },
    {
      id: 3,
      name: 'Sangria',
      price: 6,
      ingredients: ['Vin rouge', 'Fruits', 'Sucre'],
      isPublished: false,
    },
    {
      id: 4,
      name: 'Pina colada',
      price: 12,
      ingredients: ['Rhum', 'Lait de coco', 'Jus d\'ananas'],
      isPublished: true,
    },
  ];

  // Affichage du composant App
  return (
    <div className="blocinfo">
      <Header user={userFromApi} /> {/* Affichage du composant Header avec les données utilisateur */}
      <RandomCocktail cocktails={cocktailsFromApi} /> {/* Correction: Utilisation de la prop "cocktails" */}
      <LatestCocktails cocktails={cocktailsFromApi} /> {/* Affichage du composant LatestCocktails avec les données des cocktails */}
      <AllCocktails cocktails={cocktailsFromApi} /> {/* Affichage du composant AllCocktails avec les données des cocktails */}
      <aside>
        <Sidebar user={userFromApi} /> {/* Affichage du composant Sidebar avec les données utilisateur */}
      </aside>
      <Footer /> {/* Affichage du composant Footer */}
    </div>
  );
}

export default App;



// INDEX

{/* <aside> : l'élément aparté
L'élément <aside> (en français, « aparté ») représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d'encadrés ou de boîtes de légende. */}
