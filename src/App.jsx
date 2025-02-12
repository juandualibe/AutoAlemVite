import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Vehiculos from "./pages/Vehiculos";
import Mantenimiento from "./pages/Mantenimiento";
import Historial from "./pages/Historial";
import Alertas from "./pages/Alertas";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/alertas" element={<Alertas />} />
      </Routes>
    </Router>
  );
}

export default App;