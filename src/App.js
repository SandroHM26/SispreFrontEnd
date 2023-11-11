import React, { useState } from 'react';
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

    const handleLogin = (username, password, setError) => {
        const validUsers = [
            { username: 'sandrohm26', password: 'Porcorex123' },
            { username: 'eseBoy', password: '12345' },
            { username: '', password: '' },
            // Agrega más usuarios según sea necesario
        ];

        const isValidUser = validUsers.some(user => user.username === username && user.password === password);

        if (isValidUser) {
            setIsLogged(true);
            setView('dashboard');
            setError('');
        } else {
            setError('Usuario o contraseña incorrecta'); // Utilizar setError para mostrar mensaje de error
        }
    }

    const handleGuardar = () => {
      setView('login');
    }

    const handleResultados = () => {
      setView('resultados'); // Asegúrate de tener un estado 'resultados' correspondiente
      
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
                  {view === 'login' && <Login onCrearCuenta={() => setView('registro')} onLogin={handleLogin} />}
                  {view === 'registro' && <Registro onGuardar={handleGuardar} />}
                  {view === 'dashboard' && <Dashboard onLogout={handleLogout} onConsulta={() => setView('consulta')} view={view}/>}
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

