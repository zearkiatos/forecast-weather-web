import React from "react";
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

const AppFrame = (props) => {
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
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6">Weather Forecast</Typography>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12} sm={10} md={10} bg={8}>
        Bacon ipsum dolor amet beef landjaeger buffalo porchetta tongue jowl
        leberkas chuck sausage bresaola ham hock. Doner turducken short ribs,
        jowl ground round porchetta cupim pork loin turkey andouille brisket
        tenderloin spare ribs landjaeger. Pork flank swine, leberkas salami
        turkey meatloaf sausage short ribs. Meatloaf chicken short loin shoulder
        tenderloin prosciutto. T-bone boudin cow beef ribs burgdoggen chicken
        ribeye landjaeger. Pork belly t-bone short ribs fatback frankfurter.
        Fatback flank spare ribs pig short ribs turducken. Frankfurter pork
        belly beef ribs, meatball burgdoggen sirloin ground round venison
        picanha. T-bone beef strip steak brisket tenderloin. Capicola pork belly
        tongue fatback t-bone ham hock turkey cow. Tri-tip shoulder beef beef
        ribs pork chop alcatra biltong pancetta buffalo chicken venison meatloaf
        jerky kevin. Prosciutto pig bacon, tenderloin shank turducken spare ribs
        pork belly salami capicola shoulder pork chop cupim bresaola swine.
        Turducken tail filet mignon tri-tip. Meatloaf pork chop chicken, jerky
        corned beef shoulder porchetta turducken alcatra tongue tenderloin
        kevin. Ribeye boudin jowl biltong meatball chuck pig. Shoulder venison
        corned beef, leberkas turkey swine tri-tip pork belly. Ball tip chuck
        brisket alcatra prosciutto flank, boudin ham meatball spare ribs. Rump
        jowl short ribs hamburger pig pork venison. Beef ribs cow frankfurter
        tongue, kielbasa corned beef tenderloin shank chicken t-bone meatball
        ground round biltong meatloaf swine. Filet mignon t-bone jowl venison
        burgdoggen bacon cow corned beef fatback porchetta ball tip beef. Jerky
        andouille sirloin picanha ham hock, prosciutto pancetta biltong flank
        t-bone jowl salami beef ribs cow leberkas. Ribeye sausage fatback shank
        andouille. Drumstick pancetta short ribs, tail ham hock chuck meatball
        flank frankfurter kevin shank buffalo cupim pork loin ribeye. Short loin
        fatback turducken leberkas andouille, pork chop salami chislic. Short
        ribs buffalo strip steak andouille turducken ham hock kevin pork chop
        spare ribs kielbasa shoulder pork loin drumstick meatball fatback.
        Sirloin frankfurter tri-tip cow meatball short loin pork chop pork loin,
        kevin ground round. Salami ball tip landjaeger biltong. Turkey flank
        sirloin buffalo jerky fatback, alcatra tri-tip prosciutto. Venison
        burgdoggen t-bone leberkas ball tip swine. Does your lorem ipsum text
        long for something a little meatier? Give our generator a try… it’s
        tasty!
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {};

export default AppFrame;
