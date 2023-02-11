import React from "react";
import GridRestaurant from "../../Components/GridRestaurant";
import LaCarte2 from "../../Components/LaCarte2";
import LeRestaurant from "../../Components/LeRestaurant";
import CarouselRest from "../../Components/CarouselRest";
import ContactSection from "../../Components/ContactSection";
import ThemeChange from "../../Components/ThemeChange";
import Translation from "../../Components/i18n/Translation";

function Home() {
  var itemsA = [
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
  var itemsB = [
    {
      img: "/images/r-1.jpg",
    },
    {
      img: "/images/r-2.jpg",
    },
    {
      img: "/images/r-3.jpg",
    },
  ];

  return (
    <>
      <CarouselRest items={itemsA} />
      <GridRestaurant />
      <LaCarte2 />
      <LeRestaurant />
      <CarouselRest items={itemsB} />
      <ContactSection />
      <ThemeChange />
      <Translation />
    </>
  );
}

export default Home;
