const axios = require('axios').default;
const clientes = require('../model/clientes');

const api = async(cep,email,cpf) =>{
    
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
        clientes.push(dadosCliente)
  
    } catch {
       console.error("Deu ruim no axios");
    }
}

module.exports.api = api;