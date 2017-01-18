'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let chewToySchema = Schema({
  name: {type: String, required: true},
  dogId: {type:Schema.Types.ObjectId, ref: 'dog'}
})

module.exports = mongoose.model('chewToy', chewToySchema)
