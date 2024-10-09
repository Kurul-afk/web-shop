import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: "100px" }}>
          <Routing />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
