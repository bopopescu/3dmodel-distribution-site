import * as React from "react";
import Header from "../../components/header/Header";
import TopMain from "../../components/topMain/TopMain";
import Footer from "../../components/footer/Footer";

export default function LandingPage() {
  return (
    <div className="LandingPage">
        <Header />
        <TopMain />
        <Footer />
    </div>
  );
}