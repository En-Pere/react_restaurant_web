import React from "react";
import "../Styles/gridrestaurant.css";

function GridRestaurant() {
  return (
    <>
      <div className="grid-container" id="restaurantleduc">
        <div className="column-a">Restaurant Le Duc</div>
        <span className="separator-column"></span>
        <div className="column-b">
          Finies les vacances ,nous sommes de retour !!!!!!! Le restaurant est
          ouvert du lundi au samedi pour déjeuner et diner.; En temps normal
          ,Nous prenons les réservations au 01 43 22 59 59 et au 01 43 20 96 30
          .Le week end et pendant la pause , 06 23 79 32 36 ou
          dominique.minchelli@restaurantleduc.com. Vous pouvez aussi visiter
          notre instagram https://www.instagram.com/leducparis/?hl=fr
        </div>
        <span className="separator-column"></span>
        <div className="column-c">
          Restaurant de poissons et fruits de mer depuis 1967, Le Duc est un
          rendez vous gastronomique immanquable pour tout amateur de bonne
          pêche. Un lieu de caractère installé à deux pas des ateliers de César
          et Dali, dont la carte se dessine suivant les arrivages journaliers.
        </div>
      </div>
    </>
  );
}

export default GridRestaurant;
