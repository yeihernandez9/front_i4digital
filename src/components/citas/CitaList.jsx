import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCitaAction, deleteCita} from '../../redux/citaDucks'
import AddCitas from './AddCitas';

const CitaList = () => {
  
  const dispatch = useDispatch();
  const citas = useSelector((store) => store.citas.array);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCitas = Array.isArray(citas) ? citas.slice(startIndex, endIndex) : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModal = () => {
    console.log("si esta llamando el modal")
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (citaId) => {
    console.log(citaId)
    dispatch(deleteCita(citaId));

    // Lógica para eliminar la cita con el identificador citaId
    // Puedes utilizar el método `filter` u otra lógica para eliminar la cita
  };

  return (
    <>
    <div>
      <h2>Lista de Citas</h2>
      <button onClick={handleOpenModal}>Agregar Cita</button>
      <AddCitas show={showModal} handleClose={handleCloseModal} />
      <button onClick={() => dispatch(getCitaAction())}>Obtener</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentCitas.map((cita, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: cita.color_hex_code }}>{cita.name}</td>
              <td style={{ backgroundColor: cita.color_hex_code }}>{cita.description}</td>
              <td style={{ backgroundColor: cita.color_hex_code }}>{cita.duration_minutes}</td>
              <td style={{ backgroundColor: cita.color_hex_code }}>
      <button
        className="btn btn-danger"
        onClick={() => handleDelete(cita.id)}
      >
        Eliminar
      </button>
    </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          {Array(Math.ceil(citas.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <li
                key={i}
                className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>
      
      
    </div>
    </>
  )
}

export default CitaList;
