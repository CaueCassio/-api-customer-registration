const express = require('express');
const router = express.Router();
const buscaCepController = require('./routes/buscaCepController')
const clienteController = require('./routes/clienteController')

router.get('/consulta/:cep', buscaCepController)
router.post('/cliente', clienteController)

module.exports = router;
