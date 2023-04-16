const express = require('express');
const { dbConnetion } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//const { getData } = require('./routes/listProducts')


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


app.get('/api/list', upload.single('image') ,(req, res) => {
    res.send(data);
    console.log(data);
})



// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/productos', require('./routes/products'));





// Escuchando peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});