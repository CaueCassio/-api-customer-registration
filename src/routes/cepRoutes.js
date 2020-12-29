const express = require('express');
const router = express.Router();
const sendGetRequest = require('./../service');


router.get('/consulta/:cep', (req,res) => {
    let cepRecebido = req.params.cep;

    const teste23 = sendGetRequest(cepRecebido)
        .then(function(teste){
            console.log(teste)
    })
        .catch(function(error){
            console.log(error)
    })

    return res.json(teste23.then());

})

module.exports = router;