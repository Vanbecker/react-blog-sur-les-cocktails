const Footer = () => {
    const openingHours = "Lundi - Vendredi : 17h00 - 2h00 | Samedi - Dimanche : 14h00 - 2h00";

    return (
        <footer>
            <div className="opening-hours">
                <p>Horaires d'ouverture :</p>
                <p>{openingHours}</p>
            </div>
            <img src="https://media.giphy.com/media/Zw3oBUuOlDJ3W/giphy.gif" alt="unsplash" />
        </footer>
    );
};


export default Footer;