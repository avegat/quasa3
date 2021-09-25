

const helmet = require("helmet");               //Solucion al error por CSP
const cookieParser = require('cookie-parser');     //Solucion al error Xsrf
const bodyParser = require('body-parser');
const compression = require("compression");
const express=require('express');
const cors = require('cors');
const xss =require('xss-clean');
require('express-async-errors');
const routes =require('./routes/router');
const byDefault = require('./routes/by-default')

/**
 * @fileoverview Configuracion de la aplicación Express.
 * @author Arturo Vega
 */

const app = express();

app.use(helmet.contentSecurityPolicy());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(xss());
app.use(cookieParser());


app.use('/proyecto-quasar', routes);
app.use('*',byDefault);


module.exports= app;
