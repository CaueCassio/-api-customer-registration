
const clientes = require('../model/clientes');

function getCep(req,res){
    return res.status(200).send(clientes)
}
module.exports = getCep;



