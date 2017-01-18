'use strict'

let Router = require('express').Router
let jsonParser = require('body-parser').json()
let Dog = require('../models/dog.js')
let ChewToy = require('../models/chew-toy.js')
let router = module.exports = new Router()

router.post('/dog/:id/chewtoy', jsonParser, (req, res, next) => {
  console.log('in post')
  let newChewToy;
  new ChewToy(req.body).save()
  .then(chewToy => {
    newChewToy = chewToy
    return Dog.findById(req.params.id)
  })
  .then(dog => {
    dog.chewToy.push(newChewToy.id)
    return dog.save()
  })
  .then(newChewToy => res.send(newChewToy))
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
// 'use strict'
//
// let Router = require('express').Router
// let jsonParser = require('body-parser').json()
//
// let ChewToy = require('../models/chew-toy.js')
// let router = module.exports = new Router()
//
// router.post('/dogs/:id/chewtoy', jsonParser, (req, res, next) => {
//   new ChewToy(req.body).save() //this saves to mongoose db
//   .then(chewToy => res.json(chewToy))
//   .catch(next)
// })
//
// router.get('/chewtoy/:id', (req, res, next) => {
//   console.log('inside router.get!')
//   ChewToy.findById(req.params.id)
//   .populate('dogs')
//   .then(chewToy => res.json(chewToy))
//   .catch(next)
// })
//
// router.put('/chewtoy/:id', (req, res, next) => {
//   ChewToy.findByIdAndUpdate(req.params.id)
//   .then(chewToy => res.json(chewToy))
//   .catch(next)
// })
//
// router.delete('/chewtoy/:id', (req, res, next) => {
//   console.log('inside router.delete!');
//   ChewToy.findByIdAndRemove(req.params.id)
//   .then(chewToy => res.json(chewToy))
//   .catch(next)
// })
