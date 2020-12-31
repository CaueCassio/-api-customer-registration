const clientes = require('../model/clientes');
const buscaPorEmail = require('../validate/validaEmail');

function getCadastroEmail(req,res){
    const { email } = req.params;
    console.log(email, 'asmdasmdkaskdasmdp')
    buscaPorEmail(res, email, clientes);
}

module.exports = getCadastroEmail;