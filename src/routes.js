const express = require('express');
const router = express.Router();
const buscaCepController = require('./buscaCepController')

router.get('/consulta/:cep', buscaCepController)

module.exports = router;
