import React from 'react';

import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Seasonals from './components/Seasonals';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				{/* <Route exact path="/" component={Landing} /> */}
				<Route exact path="/seasonals" component={Seasonals} />

				<Route exact path="/" component={SearchBar} />
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
