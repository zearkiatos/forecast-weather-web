import React, { useMemo } from "react";
import { Link as LinkRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import {
  Toolbar,
  Grid,
  AppBar,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { WiDaySunny } from "react-icons/wi";

const AppFrame = ({ children }) => {
  const iconContextSize = useMemo(
    () => ({
      size: "2em",
    }),
    []
  );
  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              component={LinkRouter}
              to="/main"
              color="inherit"
              aria-label="menu"
            >
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6">Weather Forecast</Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppFrame;
