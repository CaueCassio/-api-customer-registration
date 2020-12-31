const axios = require('axios').default;
const clientes = require('../model/clientes');
const validate = require('../validate/validaCadastroController')


const api = async(cep,email,cpf) =>{

  validate();
 
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const response = resp.data;

      let dadosCliente = {
        email: email,
        cpf : cpf,
        cep: response.cep,
        logradouro: response.logradouro,
        complemento: response.complemento,
        bairro: response.bairro,
        localidade: response.localidade,
        uf: response.uf,
        }

        if (email, cpf, cep) {
          for (const key in clientes){
            if(clientes[key].email === email){
                console.log('estou aqui')
                return res.status(404).json({message: 'dados já cadastrado'});;
             }
         }

        } else {

          clientes.push(dadosCliente)
          return dadosCliente;
        }
    } catch(e) {
       console.log('error')
    }
}




module.exports.api = api;