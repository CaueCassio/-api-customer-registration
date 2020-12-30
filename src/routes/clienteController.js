const api = require('../apiCep')

function createCliente(req,res){
  const { cep } = req.params;
  console.log(cep);

  try {
      let apiTeste = api(cep);
    } catch (error) {
        console.log('error na busca')
  }
    return res.send('oi')
}



module.exports = createCliente;



