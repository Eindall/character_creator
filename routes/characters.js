var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = require('../models/Character.js');

/* GET every characters */
router.get('/', function(req, res, next) {
  Character.find(function(err, characters) {
    if (err) return next(err);
    res.json(characters);
  });
});

/* GET character by id */
router.get('/:id', function(req, res, next) {
  Character.findById(req.params.id, function(err, character) {
    if (err) return next(err);
    res.json(character);
  });
});

/* POST new character */
router.post('/', function(req, res, next) {
  Character.create(req.body, function(err, character) {
    if (err) return next(err);
    res.json(character);
  });
});

/* PUT edited character */
router.put('/:id', function(req, res, next) {
  Character.findByIdAndUpdate(req.params.id, req.body, function(err, character) {
    if (err) return next(err);
    res.json(character);
  });
});

/* DELETE character */
router.delete('/:id', function(req, res, next) {
  Character.findByIdAndRemove(req.params.id, function(err, character) {
    if (err) return next(err);
    res.json(character);
  });
});

module.exports = router;