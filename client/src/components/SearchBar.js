import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div class="row">
				<div class="col s12 m12">
					<div class="card">
						<div className="card-content">
							<form action="/search/title">
								<div className="nav-wrapper">
									<div className="input-field">
										<input
											name="anime"
											id="anime"
											type="search"
											placeholder="Search for an anime e.g. Naruto"
											required
											autoFocus
										/>
										<label className="label-icon" htmlFor="anime">
											<i className="material-icons">search</i>
										</label>
										<i className="material-icons">close</i>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
