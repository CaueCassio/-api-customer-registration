const api = require('../apiCep')

function createCliente(req,res){
  const {cep} = req.body;
    console.log(cep);
    return res.send(cep)
}



module.exports = createCliente;



