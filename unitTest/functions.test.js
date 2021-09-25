
const chai =require("chai");
const expect = chai.expect;

const chaiHttp = require('chai-http');
const calculator = require('../src/util/calculator');

chai.use(chaiHttp);




describe("getMessages",()=>{
    let allMessajes=[];
    before(()=>{
        allMessajes=[
            {messages:[
                ["Este","es","","mensaje"],
                ["Este","","un",""],
                ["Este","","","","mensaje"],
                ["Este","","","",""]
            ]
            },
            {messages:[
                ["Este","es","","mensaje"],
                ["Este","","un",""],
                ["Este","","","","mensaje"],
                ["Este","","","",""]
            ]
            },
            {messages:[
                ["Este","es","","mensaje"],
                ["Este","","un",""],
                ["Este","","","","mensaje"],
                ["Este","","","",""]
            ]
            },
            {messages:[
                ["Este","es","","mensaje"],
                ["Este","","un",""],
                ["Este","","","","mensaje"],
                ["Este","","","",""]
            ]
            }
        ]
    })


    it("Ordena los mensajes recibidos", ()=>{
        try {
            const mensaje=calculator.obtieneMensajeCompleto(allMessajes[0].messages)
            console.log("mensaje",mensaje);
        } catch (error) {
            console.log("axios esta tronando: "+error);
            expect(error).to.be.undefined;
        }
    })
})