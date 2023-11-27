import React, { useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';
import '../styles/Login.css';

const Login = ({ onCrearCuenta, onLogin, error, setError  }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

    const handleLoginClick = () => {
        onLogin(username, password); // Pasar setUsername para que App.js pueda modificar el estado
    };

    const handleCrearCuentaClick = () => {
        console.log("Botón Crear Cuenta clickeado");
        onCrearCuenta();
    };
    return (
        <div className="container"> {/* Cambiado a container para coincidir con CSS */}
            {/* Sección de la izquierda: Logo y eslogan */}
            <div className="logo-section">
                <h1>SISPRE</h1>
                <p>Sistema de predicción de enfermedades respiratorias</p>
            </div>

            {/* Sección de la derecha: Formulario de inicio de sesión */}
            <div className="login-section">
                <h2>Login</h2>
                <TextField type="text" placeholder="Usuario" aria-label="Usuario" value = {username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField 
                type="password" 
                placeholder="Contraseña" 
                aria-label="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
                {error && <div className="error-message">{error}</div>}
                
                <div className="buttons-container">
                    <Button text="Iniciar Sesión" variant="primary" onClick={handleLoginClick} />
                    <Button text="Crear Cuenta" variant="secondary" onClick={handleCrearCuentaClick} />
                </div>
                
                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
            </div>
        </div>
    );
}

export default Login;
