const api = require('../api/apiCep')
const clientes = require('../model/clientes');
async function createCliente(req,res){
  const {cep, email, cpf}  = req.body;

  for (const key in clientes){
     if(clientes[key].cpf === cpf ) 
     return res.status(404).json(`CPF: ${cpf}, Já cadastrado!`)
  }

  for (const key in clientes){
    if(clientes[key].email === email ) 
    return res.status(404).json(`Email: ${email}, Já cadastrado!`)
 }

  if(!cpf || !email || !cep)
      return res.status(404).json({message:'Campos invalido'})
  api.api(cep,email,cpf);

  
  return res.status(201).json({message:'Cliente Cadastrado'})
}


module.exports = createCliente;