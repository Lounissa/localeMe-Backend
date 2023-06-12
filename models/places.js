const mongoose = require ('mongoose');

const placeSchema = new mongoose.Schema({
    nickname: String,
    name: String,
    latitude: Number,
    longitude: Number,
});


const Place = mongoose.model('place', placeSchema);
module.exports = Place;


