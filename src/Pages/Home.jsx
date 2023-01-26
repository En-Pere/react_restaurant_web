import React from "react";
import DrawerAppBar from "../Components/DrawerAppBar";
import GridRestaurant from "../Components/GridRestaurant";
import LaCarte2 from "../Components/LaCarte2";
import LeRestaurant from "../Components/LeRestaurant";
import CarouselRest from "../Components/CarouselRest";
import ContactSection from "../Components/ContactSection";

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
      <DrawerAppBar />
      <CarouselRest items={itemsA} />
      <GridRestaurant />
      <LaCarte2 />
      <LeRestaurant />
      <CarouselRest items={itemsB} />
      <ContactSection />
    </>
  );
}

export default Home;
