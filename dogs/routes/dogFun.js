const express = require("express");
const router = express.Router();

const Dog = '../models/dogs';

router.post('/', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Dog.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

router.get('/', async(req, res) => {
    try {
      const notaDb = await Dog.find();
      res.json(notaDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

module.exports = router;