import React, {FC} from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";

import Footer from "../components/footer";
import Header from "../components/header";
import DownloadPage from "./downloadPage";
import ResultPage from "./resultPage";
import TopMain from "../components/topMain";


const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <TopMain />
          <Footer />
        </Route>
        <Route path="/:keyword" exact>
          <ResultPage />
        </Route>
        <Route path="/download/:keyword" exact>
          <DownloadPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;