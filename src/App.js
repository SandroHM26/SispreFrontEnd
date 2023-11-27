import React, { useState } from 'react';
import axios from 'axios';
import { ConsultaProvider  } from './rules/ConsultaContext';
import Sidebar from './components/Sidebar'; // Asegúrate de que la ruta sea correcta
import Consulta from './views/Consulta';
import Login from './views/Login';
import Registro from './views/Registro';
import Dashboard from './views/Dashboard';
import Factor from './views/Factor'; 
import Resultados from './views/Resultados';
import './App.css'
// Importa cualquier otro componente que estés utilizando

function App() {
    const [view, setView] = useState('login');  // Este estado determina qué vista está activa
    const [isLogged, setIsLogged] = useState(false);
    const [activeSidebarButton, setActiveSidebarButton] = useState('dashboard');
    const [error, setError] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState(''); // Estado para el nombre del usuario
    const [sexoUsuario, setSexoUsuario] = useState('');
    // Función para manejar el cambio de vista


    
    const handleViewChange = (selectedView) => {
        setView(selectedView);
    };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        // Aquí puedes manejar lógica adicional, como eliminar tokens de autenticación, etc.
        setView('login');
    };

    // Función para manejar la consulta
    const handleConsulta = () => {
        setView('consulta');
        setActiveSidebarButton('consulta');
    };

    const handleFactores = () => {
      setView('factores'); // Asumiendo que 'factores' es el nombre del estado para esta vista
    };

    // Función para manejar el clic en el logo y regresar a la vista principal
    const handleLogoClick = () => {
        setView('main'); // O cualquier otra vista que consideres como principal después del login
    };

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                nombreUsuario: username,
                contrasena: password
            });

            // Aquí manejarías la respuesta del login, como almacenar el token si es necesario
            setNombreUsuario(response.data.nombrePaciente);
            setSexoUsuario(response.data.sexo);
            setIsLogged(true);
            setView('dashboard');
            setError('');
        } catch (error) {
            setError('Usuario o contraseña incorrecta');
            console.error('Error en el login:', error);
        }
    };

    const handleGuardar = () => {
      setView('login');
    }

    const handleResultados = () => {
      setView('resultados'); // Asegúrate de tener un estado 'resultados' correspondiente
      
    };
  
    const handleCrearCuenta = () => {
        setView('registro');
        console.log("Cambiando a vista de registro");
    };


    return (
    <ConsultaProvider>  
      <div className="App">
          <div className={`layout-container ${view}`}>
            
              {view !== 'login' && view !== 'registro' && (
                  <Sidebar 
                      onConsulta={handleConsulta} 
                      onLogout={handleLogout} 
                      onViewChange={handleViewChange} 
                      onLogoClick={handleLogoClick} 
                      view={view}
                      activeButton={activeSidebarButton}
                      setActiveButton={setActiveSidebarButton}
                  />
              )}
            
              <div className="main-content">
                  {view === 'login' && <Login onCrearCuenta={handleCrearCuenta} onLogin={handleLogin} error={error} setError={setError} />}
                  {view === 'registro' && <Registro onGuardar={handleGuardar} />}
                  {view === 'dashboard' && <Dashboard nombreUsuario={nombreUsuario} sexoUsuario={sexoUsuario} onLogout={handleLogout} onConsulta={() => setView('consulta')} />}
                  {view === 'consulta' && <Consulta onSiguiente={handleFactores}/>}
                  {view === 'factores' && <Factor onConsultar={handleResultados} />}
                  {view === 'resultados' && <Resultados />}
                  {/* ... y así sucesivamente para cada vista */}
              </div>
          </div>
      </div>
    </ConsultaProvider>
   );
}

export default App;

