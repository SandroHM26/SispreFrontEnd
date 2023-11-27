import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registro.css';
import { Modal, Box, Typography, Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Registro = ({ onGuardar }) => {

  const [nombrePaciente, setNombrePaciente] = useState('');
  const [apePaterno, setApePaterno] = useState('');
  const [apeMaterno, setApeMaterno] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [talla, setTalla] = useState('');
  const [contextura, setContextura] = useState('delgada'); // valor inicial
  const [sexo, setSexo] = useState('Masculino'); // valor inicial
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const handleSubmit = async () => {
    try {
        const registroData = {
            nombrePaciente,
            apePaterno,
            apeMaterno,
            correo,
            edad,
            talla,
            contextura,
            sexo,
            usuario,
            contrasena
        };

        const response = await axios.post('http://localhost:8080/api/auth/registro', registroData);
        console.log(response.data);
        setWarningMessage('');
        setModalMessage("Usuario registrado exitosamente");
        setModalOpen(true);
        
    } catch (error) {
        if (error.response && error.response.status === 400) {
            // Usuario ya registrado
            setWarningMessage("Usuario ya registrado. Por favor, crea otro.");
        } else {
            // Otros errores
            console.error('Error en el registro:', error.response);
        }
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    onGuardar();
  };



  return (
    <div className="registro-container">
        <div className="registro-header">
            <h2>SISPRE</h2>
            <h4>SISTEMA DE PREDICCIÓN DE ENFERMEDADES RESPIRATORIAS</h4>
        </div>
        
        <div className="registro-form">
            <h3>Registrar información</h3>
            <input type="text" placeholder="Nombres" value={nombrePaciente} onChange={e => setNombrePaciente(e.target.value)} />
            <input type="text" placeholder="Apellido paterno" value={apePaterno} onChange={e => setApePaterno(e.target.value)} />
            <input type="text" placeholder="Apellido materno" value={apeMaterno} onChange={e => setApeMaterno(e.target.value)} />
            <input type="email" placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
            <input type="number" placeholder="Edad" value={edad} onChange={e => setEdad(e.target.value)} />
            <input type="text" placeholder="Talla" value={talla} onChange={e => setTalla(e.target.value)} />
            <select value={contextura} onChange={e => setContextura(e.target.value)}>
                <option value="delgada">Delgada</option>
                <option value="promedio">Promedio</option>
                <option value="atlética">Atlética</option>
            </select>
            <div className="radio-group">
                <label>
                    <input type="radio" name="sexo" value="Masculino" checked={sexo === 'Masculino'} onChange={e => setSexo(e.target.value)} /> Masculino
                </label>
                <label>
                    <input type="radio" name="sexo" value="Femenino" checked={sexo === 'Femenino'} onChange={e => setSexo(e.target.value)} /> Femenino
                </label>
            </div>
            <input type="text" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} />
            <div className="btn-group">
                <button type="button" onClick={handleSubmit}>Guardar</button>
                <button>Cancelar</button>
            </div>
            {warningMessage && <div className="warning-message">{warningMessage}</div>}
        </div>
        <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalMessage}
            </Typography>
            <Button onClick={handleClose}>Cerrar</Button>
            </Box>
        </Modal>
    </div>
  );
}

export default Registro;
