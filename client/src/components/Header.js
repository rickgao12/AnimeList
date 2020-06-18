import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="right brand-logo">
						Anime List
					</Link>
					<form action="/search">
						<div className="input-field">
							<input name="anime" id="anime" type="search" required />
							<label className="label-icon" htmlFor="anime">
								<i className="material-icons">search</i>
							</label>
							<i className="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
		);
	}
}

export default Header;
