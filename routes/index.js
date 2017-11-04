import express from 'express'
//import express router
const router = express.Router();

//Get a List of Nijas from the Database
router.get('/ninjas', (req, res) =>{
	res.send({type: 'GET'})
})
//Add a new Ninja to the database
router.post('/ninjas', (req, res) =>{
	res.send({type: 'POST'})
})
//Update a Ninja in the database
router.put('/ninjas/:id', (req, res) =>{
	res.send({type: 'PUT'})
})
//Delete a NInja from the DB
router.delete('/ninjas/:id', (req, res) =>{
	res.send({type: 'DELETE'})
})


export default router;