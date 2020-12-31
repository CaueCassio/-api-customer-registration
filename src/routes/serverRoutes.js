const express = require('express');
const router = express.Router();
const buscaCepController = require('./buscaAllCadastrosController')
const clienteController = require('./createClienteController')
const getCadastroEmail = require('./buscaOneCadastroController');

router.get('/cadastro/:cpf', getCadastroEmail)
router.get('/cadastro', buscaCepController)
router.post('/cliente', clienteController)

module.exports = router;
