'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chewToySchema = Schema({
  name: {type: String, required: true},
  objectId: {type: String, required: true}
})

module.exports = mongoose.model('chewToy', chewToySchema)
