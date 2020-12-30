const axios = require('axios').default;

const api = async(cep) =>{
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const response = resp.data
      console.log(response)
    } catch {
        console.error('Cep não encontrado');
    }
}
module.exports = api;