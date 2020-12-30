const express = require('express')
const app = express()
const cepRoutes = require('./routes') 
const port = 4000;

app.use(express.json());
app.use(cepRoutes)

app.listen(port, () => {
  console.log(`Exemplo de aplicativo ouvindo em http://localhost:${port}`)
})