
const clientes = require('../model/clientes');


function getCep(req,res){
    // return res.send(clientes[0].cpf)
    return res.send(clientes)
}


module.exports = getCep;



