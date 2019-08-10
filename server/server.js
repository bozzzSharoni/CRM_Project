const express = require('express')
const app = express()
const Client = require('../ClientSchema')
const jsonData = require('../src/data.json')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

mongoose.connect('mongodb://localhost:27017/CRM', { useNewUrlParser: true })



app.get('/clients', function (req, res) {
  Client.find({}, function (err, data) {
    res.send(data)
  })
})

app.post('/actions', function (req, res) {
  const client = req.body
  const c1 = new Client(client)
  c1.save()
})

app.put('/actions/:id', function (req, res) {
  const id = req.params.id
  const updatedData = req.body
  Client.findOneAndUpdate({"_id":id}, updatedData, function(){
    res.end()
  })
})


app.listen(8080, function () {
  console.log('The NSA is listening on port 8080')
})