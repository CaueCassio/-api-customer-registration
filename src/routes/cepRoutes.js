const express = require('express');
const router = express.Router();


router.get('/consulta/:cep', (req,res ) => {
    var cepRecebido = req.params.cep;
    console.log(cepRecebido);
    
    return res.send(cepRecebido);
})

module.exports = router;