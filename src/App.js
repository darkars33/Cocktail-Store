import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./component/Navbar"



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cocktail/:id" element={<SingleCocktail />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
