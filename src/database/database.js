const  calculator = require('../util/calculator');

const updateDataBase= (satellite)=>{
    var fs = require("fs");
    const dataBaseFileDirectory=__dirname+"/satellites.json";
    const data = fs.readFileSync(dataBaseFileDirectory, 'utf8');   

   
    let object = JSON.parse(data);
   
    let messages=[];
    let satellites=[];
    let completedDistanceMessages=0;
    for(let i=0;i<object.satellites.length;i++)
    {
         
          if(object.satellites[i].name===satellite.name)
          {
              object.satellites[i].distance=satellite.distance;
              object.satellites[i].message=satellite.message;
          }
          if(object.satellites[i].distance&&
            object.satellites[i].distance!=0&&
            object.satellites[i].message&&
            object.satellites[i].message!==""){
                messages.push(object.satellites[i].message);
                satellites.push({
                    x:object.satellites[i].coordinates.x,
                    y:object.satellites[i].coordinates.y,
                    distance:object.satellites[i].distance
                });
              completedDistanceMessages=completedDistanceMessages+1;
          }
    }
   
    
    if(completedDistanceMessages===object.satellites.length){
        return {position:calculator.calculaPosicion(satellites),message:calculator.obtieneMensajeCompleto(messages)};
    }
   
    fs.writeFile(dataBaseFileDirectory, JSON.stringify(object), err => {
        console.log("err",err);
      });
    throw "No cuenta con suficiente información";

}


module.exports= {updateDataBase};