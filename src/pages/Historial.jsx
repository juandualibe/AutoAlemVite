import Sidebar from "../components/Sidebar";

export default function Historial() {
  return (
    <div className="container">
      <Sidebar />
      <h2>📜 Historial de Vehículos Vendidos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Fecha Venta</th>
            <th>Propietario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>45</td>
            <td>Ford</td>
            <td>Focus</td>
            <td>2021</td>
            <td>10/01/2024</td>
            <td>Auto Alem</td>
          </tr>
          <tr>
            <td>78</td>
            <td>Toyota</td>
            <td>Yaris</td>
            <td>2022</td>
            <td>15/01/2024</td>
            <td>Otros</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}