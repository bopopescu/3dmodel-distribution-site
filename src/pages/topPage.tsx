import React, {FC} from "react";
import Header from "../components/header";
import TopMain from "../components/topMain";
import Footer from "../components/footer";
import ResultPage from "./resultPage";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from "react-router-dom";

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
        <Route path="/3d-model/:keyword" exact>
          <h2>いい感じ！</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default TopPage;