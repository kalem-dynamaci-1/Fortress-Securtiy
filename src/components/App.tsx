import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RoutesList from "./RoutesList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
