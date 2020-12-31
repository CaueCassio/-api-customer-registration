const express = require('express');
const router = express.Router();
const buscaCepController = require('./getCadastrosRoutes')
const clienteController = require('./createClienteRoutes')
const getCadastroCpf = require('./getCadastroCpfRoutes');
const getCadastroEmail = require('./getCadastroEmailRoutes');

router.get('/cpf/:cpf', getCadastroCpf)
router.get('/email/:email', getCadastroEmail)
router.get('/cadastro', buscaCepController)
router.post('/cliente', clienteController)

module.exports = router;
