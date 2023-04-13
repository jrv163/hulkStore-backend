const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({

    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true 
    },
    category:{
        type: String,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
    
});

// ProductoSchema.method('toJSON', function(){
//     const { __v, _id, ...object } = this.ObjectId();
//     object.id = _id;
//     return object;
// })

module.exports = model('Producto', ProductoSchema );
