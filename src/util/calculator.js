const trilateration = require('node-trilateration');


function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}


const calculaPosicion=(locations)=>{
    let position = trilateration.calculate(locations);
    return position;
}

const obtieneMensajeCompleto=(satelliteMessages)=>{
    let messages=[];
    let posicionLongitudMayor=0;
        let longitudMayor=0;
        for(let i=0; i<satelliteMessages.length;i++)
        {
            messages.push(satelliteMessages[i]);
            if(longitudMayor<messages[i].length){
                longitudMayor=messages[i].length;
                posicionLongitudMayor=i;
            }
        }
        let mensaje=[];

        for (let i = 0; i < messages[posicionLongitudMayor].length; i++) {
            for(let j=0;j<messages.length;j++)
            {
                if(messages[j][i]&&!mensaje.includes(messages[j][i]))
                {
                    mensaje.push(messages[j][i])
                }
            }
        }
        return mensaje.join(' ').trim();

}

module.exports = {calculaPosicion,obtieneMensajeCompleto}
