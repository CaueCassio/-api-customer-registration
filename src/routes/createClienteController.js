const api = require('../api/apiCep')

function createCliente(req,res){
  const {cep, email, cpf}  = req.body;
  api.api(cep,email,cpf);

  return res.status(201).json({message:' dados criado' })

}


module.exports = createCliente;