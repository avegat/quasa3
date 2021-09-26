const database =require('../database/database');

const {calculaPosicion,obtieneMensajeCompleto} =require('../util/calculator');

/**
 * @fileoverview Obtiene posición del emisor.
 * @author Arturo Vega
 * @description  Calcula la posición con el arreglo de satellites recibido
 */
const quasarPosicionService=(locations)=>{
    return calculaPosicion(locations);
}

/**
 * @fileoverview Obtiene mensaje completo recibido por cada satelite.
 * @author Arturo Vega
 * @description  Homologa el mensaje final con el recibido por cada satelite.
 */
const quasarMessagesService=(messages)=>{
    return obtieneMensajeCompleto(messages)
}

/**
 * @fileoverview Actualiza información por satelite.
 * @author Arturo Vega
 * @description  Recibe la información por cada satelite independiente.
 */
const satelliteDistanceAdd=(satellite)=>{
    return database.updateDataBase(satellite);
}

/**
 * @fileoverview Obtiene la posición y mensaje del emisor.
 * @author Arturo Vega
 * @description  Obtiene la posición y mensaje del emisor una vez completado la recepción individual.
 */
const satelliteDistanceStored=()=>{
    return database.getDataBaseInfo();
}



module.exports= {quasarPosicionService,quasarMessagesService,satelliteDistanceAdd,satelliteDistanceStored};
