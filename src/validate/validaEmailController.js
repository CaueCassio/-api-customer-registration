function buscaPorEmail(res, email, clientes){
    for (const key in clientes){
        if(clientes[key].email === email){
            return res.send(clientes[key]);
         }
            return res.status(400).json({message:' não existe esse EMAIL no banco de dados'});
    }
}

module.exports = buscaPorEmail;