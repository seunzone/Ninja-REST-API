import express from 'express'
import volleyball from 'volleyball'
import bodyParser from 'body-parser'
//import Routes
import routes from './routes'
// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();
//use imported router
app.use('/api',routes)

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/api', (req, res)=>{
	res.send({name:"Seun"})
})


// Anyother route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothing',
}));

app.listen(port);