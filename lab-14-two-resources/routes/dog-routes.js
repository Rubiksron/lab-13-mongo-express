'use strict'

let Router = require('express').Router
let jsonParser = require('body-parser').json()

let Dog = require('../models/dog.js')
let router = module.exports = new Router()

router.post('/dogs', jsonParser, (req, res, next) => {
  new Dog(req.body).save()
  .then(dog => res.json(dog))
  .catch(next)
})

router.get('/dogs/:id', (req, res, next) => {
  Dog.findById(req.params.id)
  .populate('chewToy')
  .then(dog => res.json(dog))
  .catch(next)
})

router.put('/dogs/:id', (req, res, next) =>{
  Dog.findByIdAndUpdate(req.params.id)
  .then(dog => res.json(dog))
  .catch(next)
})


router.delete('/dogs/:id', (req, res, next) =>{
  console.log('deleted file ')
  Dog.findByIdAndRemove(req.params.id)
  .then(dog => res.json(dog))
  .catch(next)
})
