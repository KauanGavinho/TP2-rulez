const { log } = require('console')
const express = require('express')
const { request } = require('http')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
var resposta =""

response.render('rayane',{resposta})
})

app.post('/resultado1', (request, response) => {
     resposta = parseFloat (request.body.n1) + parseFloat(request.body.n2)
    
response.render('rayane')
})

app.post('/resultado2', (request, response) => {
    resposta = parseFloat (request.body.n1) - parseFloat(request.body.n2)
    
response.render('rayane')
})

app.post('/resultado3', (request, response) => {
     resposta = parseFloat (request.body.n1) * parseFloat(request.body.n2)
    
response.render('rayane')
})

app.post('/resultado4', (request, response) => {
     resposta = parseFloat (request.body.n1) / parseFloat(request.body.n2)
    
response.render('rayane')
})

const PORT = 8080
app.listen(8080, () => {
    console.log(`Servidor online em: localhost:${PORT}`)
})