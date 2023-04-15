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


//productos

const data = {
    
    items: [
        {
            id: 1,
            title: "dc-arrow",
            price: 401,
            //image: './assets/dc-arrow.jpg',
            image: "https://image.tmdb.org/t/p/original/bJtWyFBYjundsi1wwgpEvh1ysTv.jpg",
            category: "DC",
            img1: "https://image.tmdb.org/t/p/original/bJtWyFBYjundsi1wwgpEvh1ysTv.jpg",
            img2: "http://br.web.img3.acsta.net/pictures/17/10/02/19/20/5681659.jpg.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000",
            cantidad: 1,
          },
          {
            id: 2,
            title: "dc-batman",
            price: 304,
            //image: require('./assets/dc-batman.jpg'),
            image: "https://hdqwalls.com/wallpapers/batman-comic-artwork-si.jpg",
            category: "DC",
            img1: "https://hdqwalls.com/wallpapers/batman-comic-artwork-si.jpg",
            img2: "https://www.cartoonpics.net/data/media/14/batman_cartoon_style.jpg",
            cantidad: 1
          },
          {
            id: 3,
            title: "dc-black",
            price: 475,
            //image: require('./assets/dc-black.jpg'),
            image:"https://tse3.mm.bing.net/th?id=OIP.7oSe1FP4FNEc94ldcKt6nAHaH0&pid=Api&P=0",
            category: "DC",
            img1: "https://tse3.mm.bing.net/th?id=OIP.7oSe1FP4FNEc94ldcKt6nAHaH0&pid=Api&P=0",
            img2: "https://www.washingtonpost.com/graphics/entertainment/black-superheroes/img/heroes/wally-west/character.png?v4",
            cantidad: 1
          },
          {
            id: 4,
            title: "dc-blue",
            price: 399,
            image:"https://i.pinimg.com/originals/ff/27/4d/ff274dc86d50257bb271e26f818fdec7.png",
            //image: require('../assets/dc-blue.jpg'),
            category: "DC",
            img1: "https://i.pinimg.com/originals/ff/27/4d/ff274dc86d50257bb271e26f818fdec7.png",
            img2: "https://tse4.mm.bing.net/th?id=OIP.9u-u79vOZdjsfxO4004-WAHaLJ&pid=Api&P=0",
            cantidad: 1
          },
          {
            id: 5,
            title: "dc-flash",
            price: 405,
            image:"https://hdwallpaperim.com/wp-content/uploads/2017/08/23/465639-Flash-superhero-DC_Comics.jpg",
            //image: require('../assets/dc-flash.jpg'),
            category: "DC",
            img1: "https://i5.walmartimages.com/asr/2efdc99c-f4bf-4cdb-920f-9583ca7912ee_1.d6a460be34ed2d6a0e6d58eb7592a5f7.jpeg",
            img2: "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/465639-Flash-superhero-DC_Comics.jpg",
            cantidad: 1
          },
          {
            id: 6,
            title: "dc-green",
            price: 285,
            image:"https://i.pinimg.com/originals/b1/9d/e2/b19de291236f0b7cee43e6cfb143ef5d.jpg",
            //image: require('../assets/dc-green.jpg'),
            category: "DC",
            img1: "https://i.pinimg.com/originals/29/6b/c0/296bc04f69969cd1b9596382acc87265.jpg",
            img2: "https://i.pinimg.com/originals/b1/9d/e2/b19de291236f0b7cee43e6cfb143ef5d.jpg",
            cantidad: 1
          }
        
    ]

}
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