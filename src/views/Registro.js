import React from 'react';
import '../styles/Registro.css';

const Registro = ({ onGuardar }) => {
  return (
    <div className="registro-container">
      <div className="registro-header">
        <h2>SISPRE</h2>
        <h4>SISTEMA DE PREDICCIÓN DE ENFERMEDADES RESPIRATORIAS</h4>
      </div>
      
      <div className="registro-form">
        <h3>Registrar información</h3>
        <input type="text" placeholder="Nombres" />
        <input type="text" placeholder="Apellido paterno" />
        <input type="text" placeholder="Apellido materno" />
        <input type="email" placeholder="Correo" />
        <input type="number" placeholder="Edad" />
        <select>
          <option value="delgada">Delgada</option>
          <option value="promedio">Promedio</option>
          <option value="atlética">Atlética</option>
        </select>
        <div className="radio-group">
          <label>
            <input type="radio" name="sexo" value="Masculino" /> Masculino
          </label>
          <label>
            <input type="radio" name="sexo" value="Femenino" /> Femenino
          </label>
        </div>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <div className="btn-group">
          <button onClick={onGuardar}>Guardar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Registro;
