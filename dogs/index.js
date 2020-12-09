const express = require('express');
const app = express();
const Dog = require('./models/dog.js');

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb+srv://luis501angel:legion@mongodb@cluster0.2fomx.mongodb.net/dogs?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);

module.exports = async function (context, req) {
    const body = req.body;
    try {
        const notaDB = await Dog.create(body);
        context.res.status(200).json(notaDB);
        console.log('agregado')
    } catch (error) {
        
        console.log(error);
        return context.res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }

    context.done();
};

module.exports = async function (context, req) {
    try {
        const notaDb = await Dog.find();
        context.res.json(notaDb);
      } catch (error) {
        return context.res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
        })
      }

    context.done();
};

