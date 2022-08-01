// import React from "react";
import { Grid } from "@mui/material";
import AppNavigation from "./AppNavigation";
// import SideBar from "./SideBar";
import Home from "../pages/Home";
// import LeftMenu from "./LeftMenu";

const Layout = () => {
  return (
    <>
      <AppNavigation />

      <Grid>
        {/* <Grid item xs={2}>
          <LeftMenu />
        </Grid> */}
        <Grid item xs={8}>
          <Home />
        </Grid>
        {/* <Grid item xs={2}>
          <SideBar />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Layout;
