'use strict'

let Router = require('express').Router
let jsonParser = require('body-parser').json()
let Dog = require('../models/dog.js')
let ChewToy = require('../models/chew-toy.js')
let router = module.exports = new Router()

router.post('/dogs/:id/chewtoy', jsonParser, (req, res, next) => {
  let newChewToy;
  Dog.findById(req.params.id)
  .then(dog => {
    new ChewToy(req.body).save()

  .then(chewToy => {
    console.log(chewToy);
    dog.chewToy.push(chewToy)
    newChewToy = chewToy;
    dog.save()
  })
  .then(() => res.json(newChewToy))
  .catch(next)
  })
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
