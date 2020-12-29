const express = require('express');
const router = express.Router();
const sendGetRequest = require('./../service');


router.get('/consulta/:cep', (req,res) => {
    var cepRecebido = req.params.cep;
    const teste = sendGetRequest(cepRecebido)
    console.log(teste)
  
    return res.send();
})

module.exports = router;