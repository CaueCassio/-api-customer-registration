function validate(res, email,clientes){
    for (const key in clientes){
        if(clientes[key].email === email){
            console.log('estou aqui')
            return true;
         }
    }
}


module.exports = validate;