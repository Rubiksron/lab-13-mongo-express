'use strict'
let express = require('express')
let mongoose  = require('mongoose')
let jsonParser = require('body-parser').json()
let morgan = require('morgan')

let MONGO_URI = 'mongodb://localhost/dogs'
let PORT = process.env.PORT || 3000

mongoose.Promise = Promise
mongoose.connect(MONGO_URI)

let app = express()
app.use(morgan('dev'))
let dogRouter = require('./routes/dog-routes')
let chewToyRouter = require('./routes/chew-toy-routes.js')

app.use(jsonParser)
app.use(dogRouter)
app.use(chewToyRouter)

if(require.main === module) {
  app.listen(PORT, () => console.log(`server started on ${PORT}`))
}

module.exports = app
