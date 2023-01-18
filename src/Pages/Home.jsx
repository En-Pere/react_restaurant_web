import React from "react";
import MyCarousel from "../Components/MyCarousel";
import DrawerAppBar from "../Components/DrawerAppBar";
import GridRestaurant from "../Components/GridRestaurant";

function Home() {
  return (
    <>
      <DrawerAppBar />
      <MyCarousel />
      <GridRestaurant />
    </>
  );
}

export default Home;
