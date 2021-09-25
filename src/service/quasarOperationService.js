const database =require('../database/database');

const {calculaPosicion,obtieneMensajeCompleto} =require('../util/calculator');


const quasarPosicionService=(locations)=>{
    return calculaPosicion(locations);
}

const quasarMessagesService=(messages)=>{
    return obtieneMensajeCompleto(messages)
}

const satelliteDistanceAdd=(satellite)=>{
    return database.updateDataBase(satellite);
}





module.exports= {quasarPosicionService,quasarMessagesService,satelliteDistanceAdd};
