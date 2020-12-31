const { uuid } = require('uuidv4');
const api = require('../api/apiCep')
const clientes = require('../model/clientes');


function createCliente(req,res){
  const {cep, email, cpf}  = req.body;

 const cliente = { id: uuid(), email, cpf, cep}
 clientes.push(cliente)
 api.api(cep)
    
    return res.json(cliente)
}





module.exports = createCliente;