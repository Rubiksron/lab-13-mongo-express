'use strict'

let Router = require('express').Router
let jsonParser = require('body-parser').json()

let ChewToy = require('../models/chew-toy.js')
let router = module.exports = new Router()

router.post('/chewtoy', jsonParser, (req, res, next) => {
  console.log('in post')
  new ChewToy(req.body).save() //this saves to mongoose db
  .then(chewToy => res.json(chewToy))
  .catch(next)
})

router.get('/chewtoy/:id', (req, res, next) => {
  ChewToy.findById(req.params.id)
  .then(chewToy => res.json(chewToy))
  .catch(next)
})

router.put('/chewtoy/:id', (req, res, next) => {
  ChewToy.findByIdAndUpdate(req.params.id)
  .then(chewToy => res.json(chewToy))
  .catch(next)
})

router.delete('/chewtoy/:id', (req, res, next) => {
  console.log('deleted file ')
  ChewToy.findByIdAndRemove(req.params.id)
  .then(chewToy => res.json(chewToy))
  .catch(next)
})
