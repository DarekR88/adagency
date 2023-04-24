import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Website from "./components/Website/Website";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
