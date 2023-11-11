import React, { createContext, useState } from 'react';

export const ConsultaContext = createContext();

export const ConsultaProvider = ({ children }) => {
  const [sintomasSeleccionados, setSintomasSeleccionados] = useState([]);
  const [factoresSeleccionados, setFactoresSeleccionados] = useState({});

  // Agrega cualquier otra lógica de estado y función que necesites compartir aquí

  return (
    <ConsultaContext.Provider value={{ 
        sintomasSeleccionados, 
        setSintomasSeleccionados,
        factoresSeleccionados,
        setFactoresSeleccionados
    }}>
      {children}
    </ConsultaContext.Provider>
  );
};
