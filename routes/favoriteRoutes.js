const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Favorite = mongoose.model('favorites');

module.exports = (app) => {
	app.post('/api/favorites', requireLogin, async (req, res) => {
		if (req.body) {
			const favorite = new Favorite({
				anime: req.body,
				_user: req.user.id
			});
			try {
				await favorite.save();
				const user = await req.user.save();
				res.send(user);
			} catch (e) {
				res.status(422).send(e);
			}
		} else {
			res.status(400).send('Error');
		}
	});

	app.get('/api/favorites', async (req, res) => {
		try {
			const favorites = await Favorite.find({
				_user: req.user.id
			});
			res.send(favorites);
		} catch (e) {
			res.status(401).send(e);
		}
	});
};
