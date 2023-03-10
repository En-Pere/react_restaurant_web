import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "../Styles/lerestaurant.css";

function LeRestaurant() {
  const { t } = useTranslation();
  return (
    <div className="lerestaurant-section" id="lerestaurant">
      {t("lerestaurant")}
      {/* : Le Restaurant : */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={10} md={4}>
          <div className="historia-container">
            <div className="lerestaurant-image-container">
              <img src="./images/h-1.png" alt="historia foto" />
            </div>
            {t("historia")}
            {/* Historia */}
            <p>
              {t("texthistoria")}
              {/* Crée par Jean Minchelli à la fin des années 60, homme de la mer et
              ami du Tout Paris en vogue, Le Duc fait partie de la Nouvelle
              Vague culinaire qui va déferler sur l’Hexagone: rompant avec les
              dogmes de la cuisine traditionnelle et bourgeoise, le restaurant
              ose la simplicité du naturel, réduisant quantité de sauces et
              temps de cuisson pour gagner en saveur et légèreté. C’est ici
              qu’apparurent les premiers poissons servis crus, du jamais vu
              alors! Cette cuisine très actuelle assure au « Duc » longévité et
              modernité. Signé Slavik, le décor d’origine teinté d’embruns ancre
              le lieu dans un chic intemporel. */}
            </p>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div className="productos-container">
            <div className="lerestaurant-image-container">
              <img src="./images/h-2.png" alt="productos foto" />
            </div>
            {t("productos")}
            {/* Productos */}
            <p>
              {t("textproductos")}
              {/* Depuis sa création, qualité et fraicheur sont les maitres mots de
              cet établissement de haute lignée. Poissons, coquillages et
              crustacés sont issus des cotes françaises, sortis de l’eau par de
              petits pêcheurs. La carte suit les marées et les saisons, pour ne
              livrer que le meilleur des arrivages : homard breton, huitres de
              Belon ou bar de ligne sont mis en valeur par la simplicité des
              préparations et la justesse des cuissons. Quant aux épices et aux
              herbes aromatiques, elles savent révéler la vraie nature de ces
              produits uniques, qu’ils soient luxueux comme le turbot ou
              populaires comme la sardine. */}
            </p>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div className="equipo-container">
            <div className="lerestaurant-image-container">
              <img src="./images/h-3.png" alt="equipo foto" />
            </div>
            {t("equipo")}
            {/* Equipo */}
            <p>
              {t("textequipo")}
              {/* Les équipes se succèdent chez Le Duc mais l'esprit Minchelli est
              toujours là. Dominique Minchelli secondé par Pascal Hélard et
              Senthuran Vignesvaran en cuisine fait en sorte que esprit de
              famille et modernité aillent de pair . L'équipe de salle est
              présente au rendez vous et s'occupe de tous les clients avec la
              même attention , que ce soit de vieux habitués ou des futurs */}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LeRestaurant;
