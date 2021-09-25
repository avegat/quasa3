
const express = require('express');
const ruteo = express.Router();


var cors=require('cors');
 
var api = express.Router();
api.use(cors());

ruteo.get('*', (req, res) => {
  res.status(404).send('No es posible calcular la posición');
});

ruteo.post('*', (req, res) => {
  res.status(404).send('No es posible calcular la posición');
});

ruteo.put('*', (req, res) => {
  res.status(404).send('No es posible calcular la posición');
});

ruteo.delete('*', (req, res) => {
  res.status(404).send('No es posible calcular la posición');
});

module.exports=ruteo;
