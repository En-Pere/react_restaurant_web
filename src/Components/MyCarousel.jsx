import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../Styles/mycarousel.css";

function MyCarousel() {
  var items = [
    {
      img: "/images/1.jpg",
    },
    {
      img: "/images/2.jpg",
    },
    {
      img: "/images/3.jpg",
    },
  ];

  return (
    <Carousel sx={{ width: "100%", heigh: "auto" }}>
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
