import * as React from "react";
import Header from "../../components/header/header";
import Grid from '@material-ui/core/Grid';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Grid container>
        <Header />
       </Grid>
    </div>
  );
}