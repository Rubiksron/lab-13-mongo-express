'use strict'

let express = require('express')
let mongoose  = require('mongoose')
let jsonParser = require('body-parser').jsonParser

let MONGO_URI = 'mongodb://localhost/dogs'//just a database name, is not pointing to the info
let PORT = process.env.PORT || 3000

mongoose.Promise = Promise
mongoose.connect(MONGO_URI)

let app = express()
let dogRouter = require('./routes/dog-routes')

app.use(dogRouter)

module.exports = app

if(require.main === module) {
  app.listen(PORT, () => console.log(`server started on ${PORT}`))
}
