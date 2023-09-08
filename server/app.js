const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuración del pool de conexiones a la base de datos MySQL en AWS
const pool = mysql.createPool({
  host: 'secubot0db.cbgchnjnb4mc.us-east-2.rds.amazonaws.com',
  user: 'milunauser',
  password: 'Africa44!',
  database: 'SecuBotDB', // El nombre de tu base de datos
  connectionLimit: 15, // Número máximo de conexiones en el pool
});

// Middleware para poder analizar el contenido de las solicitudes en formato JSON
app.use(express.json());

app.get('/pruebabot', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

// Ruta para almacenar datos en la tabla ConsultasLOG
app.post('/guardarconsulta', (req, res) => {
  const { fecha, persona, consulta, dominio } = req.body;

  // Insertar los datos en la tabla ConsultasLOG
  const sql = 'INSERT INTO ConsultasLOG (fecha, persona, consulta, dominio) VALUES (?, ?, ?, ?)';
  pool.query(sql, [fecha, persona, consulta, dominio], (err, result) => {
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

