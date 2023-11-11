import React from 'react';
import Button from './Button'; // Asegúrate de que esta ruta sea correcta.
import '../styles/Sidebar.css';

const Sidebar = ({ onConsulta, onLogout, onViewChange, activeButton, setActiveButton, onLogoClick, view }) => {
    const handleButtonClick = (selectedView) => {
        if (selectedView !== activeButton) {
            setActiveButton(selectedView);
            onViewChange(selectedView);
        }
    };

    return (
        <div className="sidebar">
            <h1 onClick={onLogoClick} style={{ cursor: 'pointer' }}>SISPRE</h1>
            <div className="menu-items">
                <Button 
                    text="Perfil" 
                    variant="sidebar" 
                    isActive={view === 'Perfil'} 
                    onClick={() => handleButtonClick('Perfil')}
                />
                <Button 
                    text="Consulta" 
                    variant="sidebar" 
                    isActive={activeButton === 'consulta'} 
                    onClick={() => handleButtonClick('consulta') }
                />
                <Button 
                    text="Resultados" 
                    variant="sidebar" 
                    isActive={view === 'Resultados'} 
                    onClick={() => handleButtonClick('Resultados')}
                />
                <Button 
                    text="Cerrar Sesión" 
                    variant="sidebar" 
                    onClick={onLogout} 
                />
            </div>
        </div>
    );
}

export default Sidebar;
