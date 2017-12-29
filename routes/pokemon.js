var express = require('express');
var router = express.Router();
var db = require('../models');
var router = express.Router();


// GET - return a page with favorited Pokemon
router.get('/', function(req, res) {
    // TODO: render favorites
    db.pokemon.findAll().then(function(pokemons){
    	res.render('favorites',{pokemons: pokemons});
    });
});

// POST - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
    // TODO: add to database
    db.pokemon.create(req.body).then(function(pokemon){
    	res.redirect('/favorites');
    })
    res.send(req.body);
});

// GET - go to individual pokemon page
// todo: add sprite, and maybe more info
router.get('/:id', function(req, res){
	db.pokemon.findById(req.body.name).then(function(pokemon){
		res.render('individual',{pokemon: pokemon})
	});
});

// DELETE 
// router.delete('/:name', function(req, res) {
//   db.pokemon.findById(req.body.name).then(function(pokemon) {
//     pokemon.destroy();
//   });
// });


module.exports = router;
