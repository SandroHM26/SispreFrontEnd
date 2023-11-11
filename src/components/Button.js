import React from 'react';
import '../styles/Button.css';

const Button = ({ text, variant, isActive, onClick }) => {

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button 
            className={`custom-button ${variant} ${isActive ? 'active' : ''}`} 
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
