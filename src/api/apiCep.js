const axios = require('axios').default;


const api = async(cep) =>{
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const response = resp.data;
      const reponseObject = {
          cep: response.cep,
          logradouro: response.logradouro,
          complemento: response.complemento,
          bairro: response.bairro,
          localidade: response.localidade,
          uf: response.uf,
          ibge: response.ibge,
          gia: response.gia,
          ddd: response.ddd,
          siafi: response.siafi
      }
      console.log(reponseObject, 'Dados tratados')
      return reponseObject;
    
    } catch {
        console.error('Cep não encontrado');
    }
}

module.exports.api = api;