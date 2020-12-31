const clientes = require('../model/clientes');
const buscaPorCpf = require('../validate/validaCpfController');

function getCadastroCpf(req, res){
    const { cpf }  = req.params;
        if(cpf < 11 )
            return res.status(404).json({message: 'cadastro invalido'})
    buscaPorCpf(res, cpf, clientes)
}














module.exports = getCadastroCpf;
