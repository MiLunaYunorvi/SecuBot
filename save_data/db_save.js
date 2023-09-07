const axios = require('axios');

function obtenerFechaFormateada() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}/${month}/${day}`;
  }

  
function obtenerDominio(correoElectronico) {
  // Utiliza una expresión regular para buscar el dominio después de "@"
  const regex = /@([^\.]+)/;
  const match = correoElectronico.match(regex);

  // Si se encuentra una coincidencia, devuelve el dominio (grupo capturado)
  if (match && match[1]) {
    return match[1];
  } else {
    // Si no se encuentra una coincidencia, devuelve null o un mensaje de error
    return null;
  }
}

// Función para almacenar datos en el servidor backend
async function almacenarDatosEnServidor(consulta, persona_datos = null) {
  try {
    const response = await axios.post('http://localhost:3000/guardarconsulta', {
      fecha: obtenerFechaFormateada() ,
      persona: persona_datos ? persona_datos[0] : null,
      consulta: consulta,
      dominio: persona_datos ? persona_datos[1] : null,
    });

    console.log(response.data); // Mensaje de éxito desde el servidor
  } catch (error) {
    console.error('Error al almacenar datos en el servidor:', error.message);
  }
}


module.exports = {almacenarDatosEnServidor, obtenerDominio}