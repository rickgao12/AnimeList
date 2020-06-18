import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	render() {
		return (
			<nav className="light-blue">
				<div style={{ marginLeft: '2%' }} className="nav-wrapper">
					<Link to="/" className="brand-logo left">
						Animely
					</Link>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link to="/">
								<i className="material-icons left">search</i>Search
							</Link>
						</li>
						<li>
							<Link to="/seasonals">
								<i className="material-icons left">whatshot</i>Seasonal anime
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
