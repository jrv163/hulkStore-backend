const express = require('express');
const { dbConnetion } = require('./database/config');
require('dotenv').config();
const cors = require('cors');



// creando el servidor de express
const app = express();


// Base de datos
dbConnetion();

// CORS
app.use( cors() )


// Directorio público
app.use( express.static('public') );


// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));


// Escuchando peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});