import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Catalogo } from "./pages/Catalog";

export function AppRoutes() {
  return (
    <Router> 
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/catalog" element={<Catalogo/>}/>

      </Routes>
    </Router>
  )
}