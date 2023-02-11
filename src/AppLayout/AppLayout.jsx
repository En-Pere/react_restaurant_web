import * as React from "react";
import { Outlet } from "react-router-dom";
import DrawerAppBar from "../Components/DrawerAppBar";

function AppLayout() {
  return (
    <>
      <DrawerAppBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
