var express = require('express')
var app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static('./'))


var porta = process.env.PORT || 3030


module.exports = {app,porta}