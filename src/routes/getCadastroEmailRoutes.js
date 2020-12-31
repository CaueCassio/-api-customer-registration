const clientes = require('../model/clientes');
const buscaPorEmail = require('../validate/validaEmailController');

function getCadastroEmail(req,res){
    const { email } = req.params;
    buscaPorEmail(res, email, clientes);
}

module.exports = getCadastroEmail;