import React from 'react';
import Button from '../components/Button';
import FaqItem from '../components/FaqItem';
import '../styles/Resultados.css'; // Debes crear esta hoja de estilos

const Resultados = ({ enfermedad, detalle, factores, tratamiento, onVolver, onSalir }) => {
  return (
    <div className="resultados-container">
      <div className="resultados-header">
        <h2>Resultado de la consulta</h2>
        <div className="resultados-actions">
          <Button text="Volver a consultar" onClick={onVolver} />
          <Button text="Salir" onClick={onSalir} />
        </div>
      </div>
      <div className="resultados-content">
      <FaqItem pregunta="Enfermedad" respuesta="Enfermedad pulmonar obstructiva" />
      <FaqItem pregunta="Detalle" respuesta="La enfermedad pulmonar obstructiva es..." />
      <FaqItem pregunta="Factores" respuesta="Los principales factores que conllevan a esta enfermedad es..." />
      <FaqItem pregunta="Tratamiento" respuesta="El tratamiento para la enfermedad pulmonar obstructiva crónica se basa en..." />

      </div>
    </div>
  );
};

export default Resultados;
