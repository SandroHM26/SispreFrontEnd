import React, { useState,useContext } from 'react';
import { ConsultaContext } from '../rules/ConsultaContext';
import Button from '../components/Button';
import '../styles/Consulta.css';

const listaSintomas = {
    Fiebre: ['Leve', 'Moderada', 'Alta'],
    Tos: ['Leve', 'Persistente', 'Fuerte'],
    DolorMuscular: [],
    DolorGarganta: [],
    OpresionToracica: [],
    Disnea: []    
     
  };

const Consulta = ({ onCancelar,view,onLogout,onConsulta,onSiguiente }) => {
    const { sintomasSeleccionados, setSintomasSeleccionados } = useContext(ConsultaContext);
    const [sintomaActual, setSintomaActual] = useState('');
    const [intensidadActual, setIntensidadActual] = useState('');
    const [error, setError] = useState('');

    const agregarSintoma = () => {
        if (sintomaActual === '') {
          setError('Debe seleccionar un síntoma.');
          return;
        }
        if (sintomasSeleccionados.find(s => s.nombre === sintomaActual)) {
          setError('No puede agregar el mismo síntoma.');
          return;
        }
        setError('');
        setSintomasSeleccionados([...sintomasSeleccionados, {
          nombre: sintomaActual,
          intensidad: '' // Inicialmente vacío
        }]);
        setSintomaActual('');
    };

    const eliminarSintoma = (sintomaNombre) => {
        setSintomasSeleccionados(sintomasSeleccionados.filter(s => s.nombre !== sintomaNombre));
    };

    const actualizarIntensidad = (nombre, intensidad) => {
        setSintomasSeleccionados(sintomasSeleccionados.map(s => {
          if (s.nombre === nombre) {
            return { ...s, intensidad };
          }
          return s;
        }));
      };

      const verificarIntensidades = () => {
        // Encuentra si hay algún síntoma seleccionado que requiera intensidad y no la tenga.
        const sintomaSinIntensidad = sintomasSeleccionados.some(sintoma => {
            const intensidades = listaSintomas[sintoma.nombre];
            return intensidades.length > 0 && !sintoma.intensidad;
        });
    
        if (sintomaSinIntensidad) {
            setError('Todos los síntomas con opciones de intensidad deben tener una seleccionada.');
            return false; // Retorna false indicando que la validación no pasó
        }
    
        setError('');
        return true; // Retorna true si todo está correcto
    };
    
      return (
        <div className="main-container">
          <div className="consulta-container">
            <div className="botones-consulta">
              <h2>Consulta</h2>
              <Button text="Siguiente" onClick={() => {
                if (verificarIntensidades()) {
                    onSiguiente(); // Solo llama a onSiguiente si verificarIntensidades retorna true
                }
                }}/>
              <Button text="Cancelar" onClick={onCancelar} />
            </div>
            <label>Síntomas que padece</label>
            <div className="sintoma-input">
              <select
                value={sintomaActual}
                onChange={(e) => setSintomaActual(e.target.value)}
              >
                <option value="">Seleccionar síntoma</option>
                {Object.keys(listaSintomas).map(sintoma => (
                  <option key={sintoma} value={sintoma}>{sintoma}</option>
                ))}
              </select>
              <Button text="Añadir" onClick={agregarSintoma} />
            </div>
            {error && <p className="error-message">{error}</p>}
            <ul className="lista-sintomas">
              {sintomasSeleccionados.map((sintoma, index) => (
                <li key={index} className="sintoma-item">
                  <span className="sintoma-text">{`Síntoma ${index+1} : ${sintoma.nombre}`}</span>
                  <div className="intensidad-selector radio-group">
                    {listaSintomas[sintoma.nombre].length > 0 && (
                      listaSintomas[sintoma.nombre].map((intensidad) => (
                        <label key={intensidad}>
                          <input
                            type="radio"
                            name={`intensidad-${sintoma.nombre}`}
                            value={intensidad}
                            checked={sintoma.intensidad === intensidad}
                            onChange={(e) => actualizarIntensidad(sintoma.nombre, e.target.value)}
                          /> {intensidad}
                        </label>
                      ))
                    )}
                  </div>
                  <Button text="Eliminar" onClick={() => eliminarSintoma(sintoma.nombre)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Consulta;
