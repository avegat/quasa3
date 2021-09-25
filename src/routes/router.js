var express = require('express');
var router= express.Router();
const controller =require('../controler/quasarOperationController');



router.post("/topsecret",controller.getLocation);
router.post("/topsecret_split/:id",controller.addSatelliteDistance);

module.exports= router;