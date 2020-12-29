const axios = require('axios').default;

const sendGetRequest = async(cep) =>{
    try {
      const resp = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
        console.log(resp.data);
    } catch {
        console.error('Cep não encontrado');
    }
}

// sendGetRequest(23010525)
module.exports = sendGetRequest();



