const api = require('../api/apiCep')
const clientes = require('../model/clientes');

async function createCliente(req,res){
  const {cep, email, cpf}  = req.body;

  for (let cpf in clientes){
      clientes[cpf].size
      return res.status(404).json({message:'CEP JÁ CADASTRADO'})
  }


  if(!cpf || !email || !cep)
      return res.status(404).json({message:'Campos invalido'})
 
  api.api(cep,email,cpf);

  
  return res.status(201).json({message:'Cliente Cadastrado'})


}


module.exports = createCliente;