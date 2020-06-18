import React from 'react';
import Landing from './components/Landing';
import Search from './components/Search';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="container">
				<Route exact path="/" component={Landing} />
				<Route path="/:id" component={Search} />
			</div>
		</BrowserRouter>
	);
}

export default App;
