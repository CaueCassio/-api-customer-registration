function validate(email,clientes){
    for (var i = 0; i < clientes.email.length; i++){
        if(clientes.email === email){
            console.log('estou aqui')
            return true;
         }
    }
    return false
}

module.exports = validate;