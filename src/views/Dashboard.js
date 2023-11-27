import React from 'react';
import FaqItem from '../components/FaqItem';  // Importar el componente FAQItem
import '../styles/Dashboard.css';

const Dashboard = ({ nombreUsuario, sexoUsuario, onLogout, onConsulta}) => {
    const saludo = sexoUsuario === 'Femenino' ? 'Bienvenida' : 'Bienvenido';
    return (
        <div className="dashboard-container">
            {/* Main content */}
            <div className="main-content">
                <h1>{saludo}, {nombreUsuario}</h1>
                <div className="faq-section">
                    <h3>Preguntas frecuentes</h3>
                    <div className="faq-item">
                    <FaqItem pregunta="¿Qué es SISPRE?" respuesta="SISPRE es un Sistema de Predicción de Enfermedades Respiratorias que utiliza información sobre síntomas y factores de riesgo para proporcionar una evaluación preliminar sobre posibles afecciones respiratorias. Su propósito es ofrecer información que pueda ser útil para entender mejor los síntomas y fomentar una consulta médica oportuna." />
                    <FaqItem pregunta="¿Cómo utilizo SISPRE para obtener información sobre mis síntomas?" respuesta="Para utilizar SISPRE, simplemente regístrese o inicie sesión, ingrese sus síntomas y cualquier otro factor relevante que el sistema le solicite. SISPRE analizará esta información y le proporcionará una evaluación basada en su sistema de reglas. Esta evaluación es un punto de partida para entender mejor sus síntomas y no debe ser considerada como un consejo médico." />
                    <FaqItem pregunta="¿Las predicciones son exactas?" respuesta="Las evaluaciones de SISPRE se basan en un conjunto de reglas y datos, pero no son definitivas ni exhaustivas. Son una herramienta de orientación inicial para ayudar a los usuarios a comprender mejor sus síntomas. Siempre se recomienda consultar a un profesional de la salud para obtener una evaluación completa y un asesoramiento adecuado." />
                    <FaqItem pregunta="¿Esto reemplaza a un médico?" respuesta="No, SISPRE no está diseñado para reemplazar la consulta con un médico. Se trata de una herramienta de apoyo que proporciona información basada en los datos ingresados por el usuario. La interpretación y el asesoramiento médico deben ser siempre realizados por un profesional de la salud" />
                    <FaqItem pregunta="¿Qué realiza la opción de perfil?" respuesta="SISPRE es un sistema de predicción de enfermedades respiratorias..." />      
                    </div>
                    {/* ... Agrega más preguntas y respuestas aquí ... */}
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
