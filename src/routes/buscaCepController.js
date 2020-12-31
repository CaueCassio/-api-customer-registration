const api = require('../api/apiCep')
const clientes = require('../model/clientes');


function getCep(req,res){
    return res.send(clientes)
}


module.exports = getCep;



