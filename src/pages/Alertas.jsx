import Sidebar from "../components/Sidebar";

export default function Alertas() {
  const handleDismiss = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <div className="container">
      <Sidebar />
      <h2>🔔 Alertas y Notificaciones</h2>
      <div className="alert">
        <span>[ALERTA] Ford Fiesta 2019 debe estar listo para entrega el 02/02/2024 a las 12:00.</span>
        <button className="btn" onClick={handleDismiss}>✔ Marcar como vista</button>
      </div>
      <div className="alert">
        <span>[ALERTA] Toyota Corolla 2020 cambió de ubicación: Taller → Agencia.</span>
        <button className="btn" onClick={handleDismiss}>✔ Marcar como vista</button>
      </div>
      <div className="alert">
        <span>[ALERTA] Renault Clio 2020 tiene mantenimiento pendiente para el 07/02/2024.</span>
        <button className="btn" onClick={handleDismiss}>✔ Marcar como vista</button>
      </div>
    </div>
  );
}