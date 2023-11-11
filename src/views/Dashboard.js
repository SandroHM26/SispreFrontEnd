import React from 'react';
import FaqItem from '../components/FaqItem';  // Importar el componente FAQItem
import '../styles/Dashboard.css';

const Dashboard = ({ onLogout,onConsulta,view}) => {
    return (
        <div className="dashboard-container">
            {/* Main content */}
            <div className="main-content">
                <h1>Bienvenido, Sandro</h1> 
                <div className="faq-section">
                    <h3>Preguntas frecuentes</h3>
                    <div className="faq-item">
                    <FaqItem pregunta="¿Qué es SISPRE?" respuesta="SISPRE es un sistema de predicción de enfermedades respiratorias..." />
                    <FaqItem pregunta="¿Qué realiza la opción de perfil?" respuesta="SISPRE es un sistema de predicción de enfermedades respiratorias..." />
                    <FaqItem pregunta="¿Las predicciones son exactas?" respuesta="SISPRE es un sistema de predicción de enfermedades respiratorias..." />
                    <FaqItem pregunta="¿Esto reemplaza a un médico?" respuesta="SISPRE es un sistema de predicción de enfermedades respiratorias..." />      
                    </div>
                    {/* ... Agrega más preguntas y respuestas aquí ... */}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
