const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// npm install -g nodemon / npm i nodemon (local; npm start)  no need to restart node
// https://www.npmjs.com/package/nodemon
// npm install ejs

const app = express()

// how to use a personal middleware 
/* 
const logger = (req, res, next) => {
  console.log('Logging ...')
  next()
}

app.use(logger)
*/

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// set static path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Titles'
  })
})


// how to use bodyParser json
const people = [
  {
    name: 'Jeff',
    age: 30
  },
  {
    name: 'John',
    age: 32
  },
]

app.get('/users', (req, res) => {
  res.json(people)
})


app.listen(3000, function() {
  console.log('Server started on port 3000 ...')
})