import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css"; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <h2>Auto Alem</h2>
        <ul>
          <li><Link to="/">🏠 Inicio</Link></li>
          <li><Link to="/vehiculos">🚗 Vehículos</Link></li>
          <li><Link to="/mantenimiento">🔧 Mantenimiento</Link></li>
          <li><Link to="/historial">📜 Historial de Vendidos</Link></li>
          <li><Link to="/alertas">🔔 Alertas</Link></li>
        </ul>
      </div>
    </>
  );
}