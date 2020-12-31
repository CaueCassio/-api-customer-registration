
function buscaPorCpf(res, cpf, clientes){
    for (const key in clientes){
        if(clientes[key].cpf === cpf){
            return res.send(clientes[key]);
         }
            return res.status(400).json({message:' não existe esse CPF no banco de dados'});
    }
}

module.exports = buscaPorCpf;