'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let dogSchema = Schema({
  name: {type: String, required: true},
  createDate: {type: Date},
  chewToy: [{type:Schema.Types.ObjectId, ref: 'chewToy'}]
});

module.exports = mongoose.model('dog', dogSchema);


// 'use strict'
//
// let mongoose = require('mongoose')
// let Schema = mongoose.Schema
//
// let dogSchema = Schema({
//   name: {type: String, required: true},
//   chewToy: [{type:Schema.Types.ObjectId, ref: 'chewToy'}]
// })
//
// module.exports = mongoose.model('dog', dogSchema)
