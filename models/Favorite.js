const mongoose = require('mongoose');
const { Schema } = mongoose;
const AnimeSchema = require('./Anime');

const favoriteSchema = new Schema({
	anime: [ AnimeSchema ],
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('favorites', favoriteSchema);
