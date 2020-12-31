async function validadorCadastro(res, cpf, clientes,email){
    for (const key in clientes){
        if(clientes[key].email === email || clientes[key].cpf === cpf ){
            return res.status(400).json({message: 'Já possui esses dados cadastrado'});
         }
    }
}

module.exports = validadorCadastro;