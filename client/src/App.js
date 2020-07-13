import React, { useState } from 'react';
import Landing from './layout/Landing';
import Header from './layout/Header';
import Seasonals from './components/Seasonals';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import { AnimeContext } from './utils/AnimeContext';
import AnimeInfo from './components/Anime/Anime';

function App() {
	const [ anime, setAnime ] = useState('');

	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Route exact path="/seasonals" component={Seasonals} />

				<Route exact path="/id/:id" component={AnimeInfo} />
				<AnimeContext.Provider value={{ anime, setAnime }}>
					<Route exact path="/" component={Landing} />
				</AnimeContext.Provider>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
