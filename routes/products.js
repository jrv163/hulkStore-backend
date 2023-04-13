/*
    Rutas de productos / Productos
    host + /api/productos
*/ 

const { Router } = require('express');
const { validarJWT } = require( '../middlewares/validar-jwt' );
const { getProducto, crearProducto, actualizarProducto, eliminarProducto } = require('../controles/products');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.use( validarJWT ); // permite todas las rutas obligatoriamente pasen por la validación del token

// obtener productos
router.get( '/',  getProducto );

// crear productos
router.post( 
    '/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('price', 'El precio es obligatorio y debe ser un numero').not().isEmpty().isNumeric(),
        check('cantidad', 'la cantidad es obligatorio y debe ser un numero').not().isEmpty().isNumeric(),
        check('id', 'El id es obligatorio y debe ser un numero').not().isEmpty().isNumeric(),
        check('category', 'La categoria es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearProducto 
);

// Actualizar productos
router.put( '/:id', actualizarProducto );

// eliminar productos
router.delete( '/:id', eliminarProducto );


module.exports = router;