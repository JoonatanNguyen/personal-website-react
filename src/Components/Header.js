import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../Stylesheet/HeaderStylesheet.css';
import RoutePathConstants from '../Constants/RoutePathConstants';
import history from '../history';

const { home, about, portfolio, contact, resume } = RoutePathConstants;

class Header extends Component {
	render() {
		const isAtHome = history.location.pathname === `/${home}`;

		return (
			<div className='navigation-bar-container'>
				{!isAtHome && <NavLink className='nav-link-home' exact to='/'>Home</NavLink>}
				<div className={`navigation-bar ${isAtHome ? '' : 'not-home'}`}>
						<NavLink
							className='navLink'
							exact
							to={`/${about}`}
							activeStyle={{ color: '#ffc722' }}
						>
							About
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${portfolio}`}
							activeStyle={{ color: '#ffc722' }}
						>
							Portfolio
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${resume}`}
							activeStyle={{ color: '#ffc722' }}
						>
							Resume
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${contact}`}
							activeStyle={{ color: '#ffc722' }}
						>
							Contact
						</NavLink>
				</div>
			</div>
		);
	}
}

export default Header;
