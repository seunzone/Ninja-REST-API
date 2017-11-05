import express from 'express'
import Ninja from '../models/ninja'
//import express router
const router = express.Router();

//Get a List of Nijas from the Database
router.get('/ninjas', (req, res, next) =>{
	/*Ninja.find({}).then(function(ninja){
		res.send(ninja)
	}) */
	Ninja.geoNear(
		{type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
		{maxDistance: 100000, spherical: true}
	).then(function(ninja){
		res.send(ninja);
	});
})
//Add a new Ninja to the database
router.post('/ninjas', (req, res, next) =>{
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);
});
//Update a Ninja in the database
router.put('/ninjas/:id', (req, res, next) =>{
	Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Ninja.findOne({_id: req.params.id}).then(function(ninja){
			res.send(ninja)
		})
	})
})
//Delete a NInja from the DB
router.delete('/ninjas/:id', (req, res, next) =>{
	Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
		res.send(ninja);
	})
	res.send({type: 'DELETE'})
})


export default router;