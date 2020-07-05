import React, { useState } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import Seasonals from './components/Seasonals';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { AnimeContext } from './components/AnimeContext';

function App() {
	const [ anime, setAnime ] = useState('');
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<AnimeContext.Provider value={{ anime, setAnime }}>
					<Route exact path="/seasonals" component={Seasonals} />
					<Route exact path="/" component={Landing} />
				</AnimeContext.Provider>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
