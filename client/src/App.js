import React from 'react';
import './App.css';
import logo from './logo.svg';
import Landing from './components/Landing';
import Search from './components/Search';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Route exact path="/" component={Landing} />
				<Route path="/:id" component={Search} />
			</div>
		</BrowserRouter>
	);
}

export default App;
