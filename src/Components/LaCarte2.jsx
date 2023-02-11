import { Grid } from "@mui/material";
import React from "react";
import "../Styles/lacarte2.css";

function LaCarte2() {
  return (
    <div className="lacarte-background" id="lacarte">
      : La Carte :
      <img src="/images/p-1.png" alt="fish-one" id="fish-one" />
      <img src="/images/p-2.png" alt="fish-two" id="fish-two" />
      <img src="/images/p-3.png" alt="fish-three" id="fish-three" />
      <img src="/images/p-4.png" alt="fish-four" id="fish-four" />
      <img src="/images/p-5.png" alt="fish-five" id="fish-five" />
      <img src="/images/p-6.png" alt="fish-six" id="fish-six" />
      <img src="/images/p-7.png" alt="fish-seven" id="fish-seven" />
      <img src="/images/p-8.png" alt="fish-eight" id="fish-eight" />
      <div className="main-container-lacarte">
        <Grid
          container
          sx={{ flexGrow: 1 }}
          justifyContent="center"
          marginBottom={4}
        >
          <Grid item xs={10} md={6}>
            <div className="menu1">
              menú de la mer
              <p>
                SERVI SEULEMENT AU DÉJEÛNER - 55 € <br />- Thon germon en
                tartare , concombre et coriandre ou Sardine en beignet , tomate
                et menthe Lotte tiède aux herbes d’été ou palourdes à l’ail
                Gâteau au chocolat ou salade d’agrumes
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-end"
          spacing={8}
          marginBottom={4}
        >
          <Grid item xs={10} md={4}>
            <div className="menu2">
              Poissons crus
              <p>
                Tartare de Bar et Saumon 20€ <br />
                Saumon au naturel 25€ <br />
                Escalopes de Saumon aux deux poivres 17€ <br />
                Coquilles Saint-Jacques crues 40€ Bar cru
              </p>
            </div>
          </Grid>
          <Grid item xs={10} md={6}>
            <div className="menu3">
              Les entrées
              <p>
                Poissons Assortiment de poissons fumés, tièdes 30€ <br />
                Escalope de Lotte tiède à l'huile d'olive et citron vert 30€{" "}
                <br />
                Friture d'Encornets nature 28€ Encornets poêlés à l'ail 28€{" "}
                <br />
                Thon blanc à l'huile d'olive douce 30€ Sardines à l'escabèche
              </p>
              <p>
                Coquillages & crustacés Les Huîtres spéciales tièdes 40€ <br />
                Les Huîtres spéciales n°3 (la douzaine) 48€ <br />
                Les Huîtres de Belon (la 1/2 douzaine) 60€ Moules marinières 25€{" "}
                <br />
                Moules poêlées Madras 25€ <br />
                Palourdes sautées au thym 35€ <br />
                Salade de Crabe frais 40€ <br />
                Queues de Langoustines aux douces épices 60€ <br />
                Langoustines soufflées nature 60€ <br />
                Langoustines mayonnaise 60€
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ flexGrow: 2 }}
          justifyContent="center"
          alignItems="flex-end"
          spacing={8}
        >
          <Grid item xs={10} md={8}>
            <div className="menu4">
              Les plats
              <p>
                Poissons Beignets (lotte, homard, langoustine, crevette) 75€
                <br />
                Rougets Barbets poêlés à l’huile d’olive sauce piquante 40€
                <br />
                Rougets Barbets meunière à notre façon 40€ <br />
                Rougets Barbets poêlés à l’huile d’olive 40€ Filet de Bar à la
                vapeur d’algues 50€ Bar nature en vessie (2pers.) 90€/KG <br />
                Aiguillettes de Bar au citron vert 52€ <br />
                Filet de Bar au basilic 52€ Escalopes de Bar au gingembre 52€{" "}
                <br />
                Sole meunière 65€ Fricassée de Lotte à la provençale 54€ Pavé de
                Cabillaud à la vapeur d’algues 45€ <br />
                Escalope de Saint-Pierre au beurre vodka 59€ Pavé de Turbot à la
                vapeur 85€ <br />
                Coquillages & crustacés Langoustines rôties au gingembre 60€{" "}
                <br />
                Langoustines en folie 60€ <br />
                Langoustines à la nage 60€ <br />
                Crevettes sautées nature, à l’ail ou sauce piquante 60€ <br />
                Crevettes château de feuilles 70€ Homard breton château de
                feuilles 125€/KG <br />
                Homard breton sauté à l’orange 125€/KG <br />
                Homard breton à la nage 120€/KG <br />
                Homard breton grillé nature sauce corail 120€/KG <br />
                Homard breton poché pulpe de tomates, huile d’olive, basilic
                120€/KG <br />
                homard breton poché tiède huile d’olive & citron 120€/KG
              </p>
            </div>
          </Grid>
          <Grid item xs={10} md={4}>
            <div className="menu5">
              Poissons grillés
              <p>
                Rougets Barbets grillés au beurre d’anchois 40€ <br />
                Bar de ligne grillé 90€/KG <br />
                Turbotin grillé 84€/KG Sole grillée à la peau 60€
              </p>
              Formages & deserts
              <p>
                Roquefort artisanal 15€ <br />
                Patisseries maison 20€ <br />
                Glaces & sorbets Maison Berthillon 18€ <br />
                Fruits rouges 25€
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LaCarte2;
