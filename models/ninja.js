import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//Create Schema & Model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	rank: {
		type: String
	},
	available: {
		type: Boolean,
		default: false
	}
	//add geo location later
})