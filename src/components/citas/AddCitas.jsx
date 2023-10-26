import React, { useState } from "react";

const AddCitas = ({ show, handleClose }) => {
    const [nuevaCita, setNuevaCita] = useState({
        name: "",
        description: "",
        // Agrega otros campos según tus necesidades
      });

      const handleChange = (e) => {
        setNuevaCita({
          ...nuevaCita,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar la nueva cita al servidor o actualizar el estado de tus citas.
        handleClose();
      };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Agregar Nueva Cita</h5>
          <button type="button" className="close" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={nuevaCita.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha:</label>
              <input
                type="date"
                name="fecha"
                value={nuevaCita.fecha}
                onChange={handleChange}
              />
            </div>
            {/* Agrega más campos del formulario según tus necesidades */}
            <button type="submit">Guardar Cita</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddCitas
