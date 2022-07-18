import React from "react";
import { Grid } from "@mui/material";
import WelcomeScreen from "../../components/Welcome";
const Welcome = () => {
  return (
    <WelcomeScreen>
      <Grid
        container
        className="full"
        direction="column"
        justifyContent="center"
      >
        <div className="highlight">

        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default Welcome;
