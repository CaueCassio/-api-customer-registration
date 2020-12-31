const api = require('../api/apiCep')
const validaCadastro = require('../validate/validaCadastroController')

function createCliente(req,res){
  const {cep, email, cpf}  = req.body;

  if(!cpf || !email || !cep){
      return res.status(404).json({message:'Campos invalido'})
  } else {
  validaCadastro(email,cpf)
  api.api(cep,email,cpf);
  return res.status(201).json({message:'Cliente Cadastrado' })
}

}


module.exports = createCliente;