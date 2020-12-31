const api = require('../apiCep')
const clientes = require('../model/clientes');

function createCliente(req,res){
  const {cep, email, cpf}  = req.body;


    api.api(cep)
    
   
    return res.send(cep)
}



module.exports = createCliente;



