const clientes = require('../model/clientes');
const buscaPorCpf = require('../validate/validaCpf');

function getCadastroEmail(req, res){
    const { cpf }  = req.params;
    buscaPorCpf(res, cpf, clientes)
}


module.exports = getCadastroEmail;
