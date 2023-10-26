import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addCita} from '../../redux/citaDucks'

const AddCitas = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const citas = useSelector((store) => store.citas.array);

    const [nuevaCita, setNuevaCita] = useState({
        name: "",
        description: "",
        duration_minutes : "",
        color_hex_code: "",
      });

      const handleChange = (e) => {
        setNuevaCita({
          ...nuevaCita,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCita(nuevaCita));
        handleClose();
      };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Cita</h5>
          <button type="button" className="close" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="nombre"
                value={nuevaCita.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={nuevaCita.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="number"
                name="duration_minutes"
                value={nuevaCita.duration_minutes}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Color Hex:</label>
              <input
                type="text"
                name="fecha"
                value={nuevaCita.color_hex_code}
                onChange={handleChange}
              />
            </div>
            {/* Agrega más campos del formulario según tus necesidades */}
            <button type="submit">Save Cita</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddCitas
