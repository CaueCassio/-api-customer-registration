const axios = require('axios').default;

const sendGetRequest = async(cep) =>{
    try {
      const resp = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      return resp.data;
    } catch {
        console.error('Cep não encontrado');
    }
}

module.exports = sendGetRequest;



