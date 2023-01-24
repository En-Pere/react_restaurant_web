import React from "react";
import MyCarousel from "../Components/MyCarousel";
import DrawerAppBar from "../Components/DrawerAppBar";
import GridRestaurant from "../Components/GridRestaurant";
import LaCarte2 from "../Components/LaCarte2";

function Home() {
  return (
    <>
      <DrawerAppBar />
      <MyCarousel />
      <GridRestaurant />
      <LaCarte2 />
    </>
  );
}

export default Home;
