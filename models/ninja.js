import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//Create Geo location Schema
const GeoSchema = new Schema({
	type: {
		type: String,
		default: 'Point'
	},
	coordinates: {
		type:[Number],
		index: "2dsphere"
	}
});
//Create Schema & Model
const NinjaSchema = new Schema({
	name: {
		type: String
	},
	rank: {
		type: String
	},
	available: {
		type: Boolean,
		default: false
	},
	geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);
export default Ninja;
