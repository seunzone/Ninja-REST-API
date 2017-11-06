import express from 'express'
import volleyball from 'volleyball'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
//import Routes
import routes from './routes/index'
// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();
//Connect to Mongo DB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public')); 
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use imported router
app.use('/api',routes)
//Error Handling Middleware
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
})

// Log requests to the console.
app.use(volleyball);

//Routes
app.get('/api', (req, res)=>{
	res.send({name:"Seun"})
})


// Anyother route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothing',
}));

app.listen(port);