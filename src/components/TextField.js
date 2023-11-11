import React from 'react';
import '../styles/TextField.css';

const TextField = ({ type, placeholder, value, onChange }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className="textfield" 
            value={value} 
            onChange={onChange} 
        />
    );
}

export default TextField;