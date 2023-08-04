const axios = require('axios');

function obtenerFechaFormateada() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}/${month}/${day}`;
  }


// Función para almacenar datos en el servidor backend
async function almacenarDatosEnServidor(consulta) {
  try {
    const response = await axios.post('http://localhost:3000/guardarconsulta', {
      fecha: obtenerFechaFormateada() ,
      consulta: consulta
    });

    console.log(response.data); // Mensaje de éxito desde el servidor
  } catch (error) {
    console.error('Error al almacenar datos en el servidor:', error.message);
  }
}


module.exports = {almacenarDatosEnServidor}