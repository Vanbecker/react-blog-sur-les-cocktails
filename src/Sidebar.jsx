import React from 'react';

// Composant Sidebar qui affiche les informations de l'utilisateur
const Sidebar = ({ user }) => {
    return (
        <div className='info red'>
            <h2>Informations utilisateur</h2>
            <p>Prénom : {user.firstName}</p>
            <p>Nom : {user.lastName}</p>
            <p>Âge : {user.age}</p>
            <p>Email : {user.email}</p>
            <p>Téléphone : {user.phone}</p>
            <p>Adresse : {user.address}</p>
            <p>Ville : {user.city}</p>
            <p>Code postal : {user.zipCode}</p>
            <p>Pays : {user.country}</p>
            <p>Profession : {user.job}</p>
        </div>
    );
};

export default Sidebar;
