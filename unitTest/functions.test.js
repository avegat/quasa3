
const { assert } = require("chai");
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
                ["Este","","","mensaje"],
                ["","es","","","secreto"],
                ["Este","","un","",""]
            ]
            },
            {messages:[
                ["Este","","","mensaje"],
                ["Este","","un",""],
                ["Este","","","","mensaje"],
                ["Este","es","","","claro"]
            ]
            },
            {messages:[
                ["Tenemos","","falla",""],
                ["","","una",""],
                ["Tenemos","","","falla","con"],
                ["Tenemos","una","","","","la","terminal"]
            ]
            }
        ]
    })


    it("Ordena los mensajes recibidos: 'Este es un mensaje secreto'", ()=>{
        try {
            let mensaje=calculator.obtieneMensajeCompleto(allMessajes[0].messages)
            expect( mensaje ).to.be.a( 'string' );
            expect( mensaje ).to.equal( 'Este es un mensaje secreto' );
        } catch (error) {
            console.log("Ocurrió un error al obtener mensaje completo"+error);
            expect(error).to.be.undefined;
        }
    })

    it("Ordena los mensajes recibidos: 'Este es un mensaje claro'", ()=>{
        try {
            let mensaje=calculator.obtieneMensajeCompleto(allMessajes[1].messages)
            expect( mensaje ).to.be.a( 'string' );
            expect( mensaje ).to.equal( 'Este es un mensaje claro' );     
        } catch (error) {
            console.log("Ocurrió un error al obtener mensaje completo"+error);
            expect(error).to.be.undefined;
        }
    })

    it("Ordena los mensajes recibidos: 'Tenemos una falla con la terminal'", ()=>{
        try {
            let mensaje=calculator.obtieneMensajeCompleto(allMessajes[2].messages)
            expect( mensaje ).to.be.a( 'string' );
            expect( mensaje ).to.equal( 'Tenemos una falla con la terminal' );     
        } catch (error) {
            console.log("Ocurrió un error al obtener mensaje completo"+error);
            expect(error).to.be.undefined;
        }
    })
})