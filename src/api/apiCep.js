const axios = require('axios').default;
const clientes = require('../model/clientes');

const api = async(cep) =>{
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const response = resp.data
      
      let cliente = clientes.push(response)
      console.log(cliente, 'askdmklasmdksmadmasçlmd')


      return response;
    
    } catch {
        console.error('Cep não encontrado');
    }
}

module.exports.api = api;