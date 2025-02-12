import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../index.css"; // Si los estilos van a ser agregados aquí

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    marca: "",
    modelo: "",
    año: "",
    estado: "En agencia",
    fecha_entrega: "",
    concesionaria_id: 1, // Asegúrate de que esta concesionaria existe
  });

  // Obtener la URL base desde las variables de entorno
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/vehiculos`)
      .then((response) => {
        setVehiculos(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los vehículos:", error);
      });
  }, [API_URL]);

  const handleChange = (e) => {
    setNuevoVehiculo({
      ...nuevoVehiculo,
      [e.target.name]: e.target.value,
    });
  };

  const agregarVehiculo = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/vehiculos`, nuevoVehiculo)
      .then((response) => {
        setVehiculos([...vehiculos, response.data]); // Agregar el nuevo vehículo a la lista
        setNuevoVehiculo({
          marca: "",
          modelo: "",
          año: "",
          estado: "En agencia",
          fecha_entrega: "",
          concesionaria_id: 1, // Resetear con el mismo ID
        });
      })
      .catch((error) => {
        console.error("Error al agregar el vehículo:", error);
      });
  };

  return (
    <div className="container">
      <Sidebar />
      <h2>🚗 Gestión de Vehículos</h2>

      {/* Formulario para agregar un vehículo */}
      <h3>Agregar Vehículo</h3>
      <form onSubmit={agregarVehiculo}>
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={nuevoVehiculo.marca}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={nuevoVehiculo.modelo}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="año"
          placeholder="Año"
          value={nuevoVehiculo.año}
          onChange={handleChange}
          required
        />
        <select name="estado" value={nuevoVehiculo.estado} onChange={handleChange}>
          <option value="En agencia">En agencia</option>
          <option value="En chapista">En chapista</option>
          <option value="En taller">En taller</option>
        </select>
        <input
          type="datetime-local"
          name="fecha_entrega"
          value={nuevoVehiculo.fecha_entrega}
          onChange={handleChange}
        />
        <input
          type="number"
          name="concesionaria_id"
          placeholder="ID Concesionaria"
          value={nuevoVehiculo.concesionaria_id}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Vehículo</button>
      </form>

      {/* Lista de Vehículos en formato tabla */}
      <h3>Lista de Vehículos</h3>
      {vehiculos.length > 0 ? (
        <table className="vehiculos-table">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Estado</th>
              <th>Fecha de Entrega</th>
              <th>Concesionaria ID</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo) => (
              <tr key={vehiculo.id}>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
                <td>{vehiculo.año}</td>
                <td>{vehiculo.estado}</td>
                <td>{vehiculo.fecha_entrega}</td>
                <td>{vehiculo.concesionaria_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay vehículos disponibles.</p>
      )}
    </div>
  );
}