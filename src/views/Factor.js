import React, { useContext } from 'react';
import { ConsultaContext } from '../rules/ConsultaContext';
import Button from '../components/Button';
import '../styles/Factor.css'; // Asegúrate de tener esta hoja de estilos creada
import FactorItem from '../components/FactorItem';
const Factor = ({ onCancelar, onConsultar  }) => {
  const factorData = [
    {
      name: 'enfermedad_respiratoria',
      factorName: 'Familiar posee enfermedad respiratoria',
      options: ['Sí', 'No'],
    },
    // Agregar más factores con su respectiva configuración de opciones
    // Por ejemplo:
    {
      name: 'Exposición al tabaco',
      factorName: 'Exposición al tabaco',
      options: ['Bajo', 'Moderado', 'Excesivo'],
    },

    {
      name: 'Contaminación del aire',
      factorName: 'Contaminación del aire',
      options: ['Sí', 'No'],
    },

    {
      name: 'Posee alergia',
      factorName: 'Posee alergia',
      options: ['Sí', 'No'],
    },

    {
      name: 'Contacto con personas con mismo síntomas',
      factorName: 'Contacto con personas con mismo síntomas',
      options: ['Sí', 'No'],
    },

    {
      name: 'Consumo de alcohol',
      factorName: 'Consumo de alcohol',
      options: ['Bajo', 'Moderado', 'Excesivo'],
    },

    {
      name: 'Sistema inmunológico',
      factorName: 'Sistema inmunológico',
      options: ['Débil', 'Moderado', 'Fuerte'],
    },



    
    // ...más factores
  ];

  const { factoresSeleccionados, setFactoresSeleccionados } = useContext(ConsultaContext);

  const actualizarIntensidadFactor = (name, value) => {
    setFactoresSeleccionados({
      ...factoresSeleccionados,
      [name]: value
    });
  };

  return (
    <div className="main-container">
      <div className="consulta-container">
        <div className="botones-consulta">
          <h2>Consulta</h2>
          <Button text="Consultar" onClick={onConsultar} />
          <Button text="Cancelar" onClick={onCancelar} />
        </div>
        <div className="factores-container">
          <h3>Factores</h3>
          {factorData.map((factor, index) => (
            <FactorItem
              key={index}
              name={factor.name}
              factorName={factor.factorName}
              options={factor.options}
              onSelectionChange={(value) => actualizarIntensidadFactor(factor.name, value)}
            />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Factor;