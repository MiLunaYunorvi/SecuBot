const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuración del pool de conexiones a la base de datos MySQL en AWS
const pool = mysql.createPool({
  host: 'database-1.caf9eyf7qxj2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Africa44!',
  database: 'BotLog', // El nombre de tu base de datos
  connectionLimit: 10, // Número máximo de conexiones en el pool
});

// Middleware para poder analizar el contenido de las solicitudes en formato JSON
app.use(express.json());

// Ruta para almacenar datos en la tabla ConsultasLOG
app.post('/guardarconsulta', (req, res) => {
  const { fecha, consulta } = req.body;

  // Insertar los datos en la tabla ConsultasLOG
  const sql = 'INSERT INTO ConsultasLOG (fecha, consulta) VALUES (?, ?)';
  pool.query(sql, [fecha, consulta], (err, result) => {
    if (err) {
      console.error('Error al insertar los datos:', err);
      res.status(500).send('Error al insertar los datos en la base de datos.');
    } else {
      console.log('Datos insertados correctamente:', result);
      res.status(200).send('Datos insertados correctamente.');
    }
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor backend escuchando en el puerto 3000.');
});
