const express = require('express');
const router = express.Router();
const buscaCepController = require('./buscaCepController')
const clienteController = require('./clienteController')

router.get('/consulta/', buscaCepController)
router.post('/cliente', clienteController)

module.exports = router;
