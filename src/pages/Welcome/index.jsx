import React, { useMemo } from "react";
import { Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import WelcomeScreen from "../../components/Welcome";

const Welcome = () => {
  const iconContextSize = useMemo(() => ({ size: "6em" }), []);
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
              <IconContext.Provider value={iconContextSize}>
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
              <Link
                color="inherit"
                aria-label="menu"
                component={RouterLink}
                to="/main"
              >
                Get into
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default Welcome;
