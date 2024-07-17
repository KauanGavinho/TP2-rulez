const { log } = require('console')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
 let x = 5
 let y = 4
response.send(`x1 e y tem os seguintes valores: ${x} e ${y} logo, se multiplicados o resultado será: ${x*y}`)
})

app.get('/index', (request, response) => {
response.render('index')
})

const PORT = 8080
app.listen(8080, () => {
    console.log(`Servidor online em: localhost:${PORT}`)
})