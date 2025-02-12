// /src/pages/Home.jsx
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <h2>🏠 Bienvenido a Auto Alem</h2>
      <p>Gestión de vehículos usados y en consignación.</p>

      <div className="card">
        <h3>🚗 Vehículos en Stock</h3>
        <p>Total: <strong>120</strong> | Nuevos: <strong>45</strong> | Usados: <strong>75</strong></p>
        <p>📍 En agencia: <strong>80</strong> | 🔧 En taller: <strong>30</strong> | 🎨 En chapista: <strong>10</strong></p>
      </div>

      <div className="card">
        <h3>📅 Próximas Entregas</h3>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Vehículo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>05/02</td>
              <td>15:00</td>
              <td>Ford Fiesta 2019</td>
              <td>En preparación</td>
            </tr>
            <tr>
              <td>05/02</td>
              <td>15:00</td>
              <td>VW Gol 2023</td>
              <td>Listo para entrega</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>🔔 Alertas Activas</h3>
        <div className="alert">⚠️ Ford Fiesta 2019 debe entregarse el 02/02 a las 12:00</div>
        <div className="alert">🔧 Toyota Corolla 2020 pasó de Taller → Agencia</div>
        <div className="alert">⏳ Renault Clio 2020 tiene mantenimiento el 07/02</div>
        <button className="btn" onClick={() => window.location.href = "/alertas"}>Ver todas las alertas</button>
      </div>

      <div className="card">
        <h3>🚀 Accesos Rápidos</h3>
        <button className="btn" onClick={() => window.location.href = "/vehiculos"}>Gestionar Vehículos</button>
        <button className="btn" onClick={() => window.location.href = "/mantenimiento"}>Ver Mantenimiento</button>
        <button className="btn" onClick={() => window.location.href = "/alertas"}>Ver Alertas</button>
      </div>
    </div>
  );
}