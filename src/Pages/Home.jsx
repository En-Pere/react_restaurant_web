import React from "react";
import MyCarousel from "../Components/MyCarousel";
import DrawerAppBar from "../Components/DrawerAppBar";
import GridRestaurant from "../Components/GridRestaurant";
import LaCarte from "../Components/LaCarte";

function Home() {
  return (
    <>
      <DrawerAppBar />
      <MyCarousel />
      <GridRestaurant />
      <LaCarte />
    </>
  );
}

export default Home;
