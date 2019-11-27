import React from "react";
import Header from "./Header";
import Main from "./Main";
import Main2 from "./Main2";
import Footer from "./Footer";
import FooterBtm from "./FooterBtm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="header" />
      <div class="clrfix">
        <Footer title="footer" />
        <Main title="main" />
        <Main2 title="aaaaaaaaaaaaa" />
      </div>
      <FooterBtm title="Footer" />
    </div>
  );
}

export default App;
