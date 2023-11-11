import React from 'react';
import '../styles/FactorItem.css';
const FactorItem = ({ factorName, options, name,onSelectionChange  }) => {

  const handleRadioChange = (event) => {
    if (onSelectionChange) {
      onSelectionChange(event.target.value);
    }
  };

   return (
    <div className="factor">
      <input type="text" className="factor-name" value={factorName} readOnly />
      <div className="radio-group">
        {options.map((option, index) => (
          <label key={index}>
            <input 
              type="radio" 
              name={name} 
              value={option}
              onChange={handleRadioChange} // Manejador de evento onChange para cada opción
            /> 
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FactorItem;