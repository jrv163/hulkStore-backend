const { response } = require('express');
const Producto = require('../models/Producto')


const getProducto = async ( req, res = response  ) => {

    const productos = await Producto.find()
                                    .populate('user','name')

    res.json({
    ok: true,
    productos
})
}

const crearProducto = async ( req, res = response  ) => {

    //console.log( req.body );
    const producto = new Producto( req.body );

    try {

        producto.user = req.uid;

       const productoGuardado = await producto.save();

        res.json({
            ok: true,
            productoGuardado
        })
        
    } catch (error) {
        console.log( error )
        res.status(500).json({
            ok: false,
            msg: 'Hable con el area de tecnología'
        });
    }

}


const actualizarProducto = async ( req, res = response  ) => {

     const productoId = req.params.id;
    const uid = req.uid;
    

     try {

     const producto = await Producto.findById( productoId );


        if ( !producto ){
          return  res.status(404).json({
                ok: false,
                msg:'El producto no existe por ese id'
            });
        }

        if ( producto.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para editar este producto'
            })
        }

        const nuevoProducto = {
            ...req.body, 
            user: uid
        }



        const productoActualizado = await Producto.findByIdAndUpdate( productoId, nuevoProducto, { new: true } );

        res.json({
            ok: true,
            producto: productoActualizado
         
        });

        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Hable con el area de tecnología'
        });
    }

}


const eliminarProducto = async ( req, res = response  ) => {

    const productoId = req.params.id;
    const uid = req.uid;
    

     try {

     const producto = await Producto.findById( productoId );


        if ( !producto ){
          return  res.status(404).json({
                ok: false,
                msg:'El producto no existe por ese id'
            });
        }

        if ( producto.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para eliminar este producto'
            })
        }

        const productoEliminado = await Producto.findByIdAndDelete( productoId, { new: true } );

        res.json({
            ok: true,
        });

        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Hable con el area de tecnología'
        });
    }

}

module.exports = {
    actualizarProducto,
    crearProducto,
    eliminarProducto,
    getProducto
}


