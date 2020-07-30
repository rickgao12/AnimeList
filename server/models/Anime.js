const mongoose = require('mongoose');
const { Schema } = mongoose;

const animeSchema = new Schema({
	id: { type: String, unique: true },
	title: { type: String, unique: true },
	imgUrl: { type: String, unique: true }
});

module.exports = animeSchema;
