import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../Styles/mycarousel.css";

function MyCarousel() {
  var items = [
    {
      img: "/images/b-1.jpg",
    },
    {
      img: "/images/b-2.jpg",
    },
    {
      img: "/images/b-3.jpg",
    },
  ];

  return (
    <Carousel
      sx={{ aspectRatio: "2.4" }}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "50px",
          zIndex: "5",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="carousel-container">
      <Paper>
        <img src={props.item.img} alt="imagen" className="carousel-img"></img>
      </Paper>
    </div>
  );
}

export default MyCarousel;
