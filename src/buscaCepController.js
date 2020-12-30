const api = require('./apiCep')

function getCep(req,res){
  const { cep } = req.params;
  console.log(cep);

  try {
        
    } catch (error) {
        console.log('error na busca')
  }
    return res.send('oi')
}



module.exports = getCep;



