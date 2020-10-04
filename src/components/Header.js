import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<div className="flex">
				<img src="/logo.png" alt="logo" className="logo" />
				<NavLink to="/" className="header-title">
					Hook News
				</NavLink>
				<NavLink to="/" className="header-link">
					new
				</NavLink>

				<span className="divider">|</span>
				<NavLink to="/top" className="header-link">
					top
				</NavLink>
                <span className="divider">|</span>
                <NavLink to="/search" className="header-link">
					Search
				</NavLink>
				<span className="divider">|</span>
				<NavLink to="/create" className="header-link">
					submit
				</NavLink>
			</div>

			<div className="flex">
				<NavLink to="/login" className="header-link">
					login
				</NavLink>
			</div>
		</div>
	);
};
export default withRouter(Header);
