const clientes = require('../model/clientes');
const buscaPorCpf = require('../validate/validaCpf');

function getCadastroCpf(req, res){
    const { cpf }  = req.params;
    buscaPorCpf(res, cpf, clientes)
}


module.exports = getCadastroCpf;
