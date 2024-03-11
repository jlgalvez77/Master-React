// Importar modulos de React / dependencias
import React from 'react';

//Función del componente
const MiComponente = () => {

    const nombre = "José Gálvez";
    const web = "josegalvez.com";

    let usuario = {
        nombre: "José",
        apellido: "Gálvez",
        web: "josegalvez.com",

    }

    return (
        <div>
            <hr />
            <h2>Componente Creado</h2>
            <hr />
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Web: {usuario.web}</li>
            </ul>
            <hr />  
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
};

// Export del componente
export default MiComponente;