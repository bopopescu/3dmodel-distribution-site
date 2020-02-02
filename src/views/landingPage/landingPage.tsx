import * as React from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Grid from '@material-ui/core/Grid';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Grid container justify="center">
        <Header />
        <Main />
       </Grid>
    </div>
  );
}