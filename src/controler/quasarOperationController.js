const services =require('../service/quasarOperationService');
const kenobiSatellite={name:"kenobi",x:-500,y:-200};
const skywalkerSatellite={name:"skywalker",x:100,y:-100};
const satoSatellite={name:"sato",x:500,y:100};

const getLocation=(req, res)=>{
    const satellites=[];
    const messages=[];
    console.log(req.body)
    const requestSatellites=req.body.satellites;
    requestSatellites.forEach(element => {
        messages.push(element.message);
        if(element.name===kenobiSatellite.name){
            satellites.push({
                x:kenobiSatellite.x,
                y:kenobiSatellite.y,
                distance:element.distance
            });
        }else if(element.name===skywalkerSatellite.name){
            satellites.push({
                x:skywalkerSatellite.x,
                y:skywalkerSatellite.y,
                distance:element.distance
            });
        }else if(element.name===satoSatellite.name){
            satellites.push({
                x:satoSatellite.x,
                y:satoSatellite.y,
                distance:element.distance
            });
        }else{
            console.log("Satellite no conocido.");
        }
    });
    if(satellites.length<3)
    {
        console.log("Se requieren 3 o más satélites.")
    }
    
    try{
        let position=services.quasarPosicionService(satellites);
        let message=services.quasarMessagesService(messages);
        res.status(200).send({message,position})
    }catch(error){
        console.log(error);
        res.status(404).send({message,position})
    }
    
    
}

const addSatelliteDistance=(req, res, next)=>{
    console.log("controller")
    const satellite={
        "name":req.params.id,
        "distance":req.body.distance,
        "message":req.body.message
    }
    try{
        let response=services.satelliteDistanceAdd(satellite);
        res.status(200).send(response);
    }catch(error){
        res.status(404).send("No es posible calcular posición")
    }
}
module.exports={getLocation,addSatelliteDistance};

