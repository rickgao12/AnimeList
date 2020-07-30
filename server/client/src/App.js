import React, { useState, useEffect } from 'react';
import Landing from './layout/Landing';
import Header from './layout/Header';
import Seasonals from './components/Seasonal/Seasonals';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import { AnimeContext } from './utils/AnimeContext';
import AnimeInfo from './components/Anime/Anime';
import TopAnime from './components/Top/TopAnime';
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions';
import Favorite from './components/Favorite';

function App() {
	const [ anime, setAnime ] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
	});

	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Route exact path="/seasonals" component={Seasonals} />
				<Route exact path="/id/:id" component={AnimeInfo} />
				<Route exact path="/top" component={TopAnime} />
				<Route exact path="/favorite" component={Favorite} />
				<AnimeContext.Provider value={{ anime, setAnime }}>
					<Route exact path="/" component={Landing} />
				</AnimeContext.Provider>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
