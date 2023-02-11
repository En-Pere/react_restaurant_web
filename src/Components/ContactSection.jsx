import { Grid } from "@mui/material";
import React from "react";
import "../Styles/contactsection.css";

function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      : Contact :
      <p>
        Restaurant Le Duc 243 bd Raspail 75014 PARIS Le Duc Du lundi au samedi
        01 43 22 59 59 01 43 20 96 30 En dehors des heures d’ouverture 06 23 79
        32 36 dominique.minchelli@restaurantleduc.com
      </p>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={10} md={12}>
          <div className="map-container">
            <iframe
              title="location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23952.47553571476!2d2.19107085!3d41.37279325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a30709605c93%3A0x2600fae14082f052!2sLa%20Barceloneta%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1674755262771!5m2!1ses!2ses"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactSection;
