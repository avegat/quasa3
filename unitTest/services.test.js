
const { assert } = require("chai");
const chai =require("chai");
const expect = chai.expect;

const chaiHttp = require('chai-http');
chai.use(chaiHttp);


var server;

before(()=>{
    server=require("../src/principal");
    
    let satellites=
    {
        "satellites": [{
            "name": "skywalker",
            "distance": 0,
            "coordinates": {
                "x": -500,
                "y": -200
            }
        }, {
            "name": "kenobi",
            "distance": 0,
            "coordinates": {
                "x": 100,
                "y": -100
            }
        }, {
            "name": "sato",
            "distance": 0,
            "coordinates": {
                "x": 500,
                "y": 100
            }
        }]
    };
    
    var fs = require("fs");
    let path=process.cwd()+"/src/database/satellites.json";
    fs.writeFile(path, JSON.stringify(satellites), err => {
       
      });
})



it("/proyecto-quasar/topsecret",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .post('/proyecto-quasar/topsecret')
   .set('content-type', 'application/json')
   .send({
    "satellites": [
        {
            "name": "kenobi",
            "distance": 100.0,
            "message": ["este", "", "", "mensaje", ""]
        },
        {
            "name": "skywalker",
            "distance": 115.5,
            "message": ["", "es", "", "", "secreto"]
        },
        {
            "name": "sato",
            "distance": 142.7,
            "message": ["este", "", "un", "", ""]
        }
    ]
    })
   .end(function (err, res) {
       expect(res).to.have.status(200);
       expect(res.body).to.have.property("position");
       done();
    });
})


it("/proyecto-quasar/topsecret_split",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .get('/proyecto-quasar/topsecret_split')
   .end(function (err, res) {
       expect(res).to.have.status(404);
       expect(res.text).equals("No es posible calcular posición");
       done();
    });
})



it("/proyecto-quasar/topsecret_split/kenobi",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .post('/proyecto-quasar/topsecret_split/kenobi')
   .set('content-type', 'application/json')
   .send({
            "distance": 100.0,
            "message": ["este", "", "", "mensaje", ""]
        })
   .end(function (err, res) {
        expect(res).to.have.status(404);
        expect(res.text).equals("No es posible calcular posición");
        done();
    });
})

it("/proyecto-quasar/topsecret_split/skywalker",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .post('/proyecto-quasar/topsecret_split/skywalker')
   .set('content-type', 'application/json')
   .send({
            "distance": 115.5,
            "message": ["", "es", "", "", "secreto"]
        })
   .end(function (err, res) {
        expect(res).to.have.status(404);
        expect(res.text).equals("No es posible calcular posición");
        done();
    });
})

it("/proyecto-quasar/topsecret_split/sato",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .post('/proyecto-quasar/topsecret_split/sato')
   .set('content-type', 'application/json')
   .send({
            "distance": 142.7,
            "message": ["este", "", "un", "", ""]
        })
   .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("position");
        done();
    });
})


it("/proyecto-quasar/topsecret_split",(done)=>{
    chai
   .request('http://127.0.0.1:8080')
   .get('/proyecto-quasar/topsecret_split')
   .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("position");
        done();
    });
})