import React from "react";
import { Grid, Typography } from "@mui/material";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
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
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Weather Application
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default Welcome;
