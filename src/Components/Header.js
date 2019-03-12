import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import RoutePathConstants from '../Constants/RoutePathConstants';
import history from '../history';

const { home, about, portfolio, contact, resume } = RoutePathConstants;

class Header extends Component {
	render() {
		const isAtHome = history.location.pathname === `/${home}`;

		return (
			<div className='navigation-bar-container'>
				{!isAtHome && <NavLink exact to='/'>Home</NavLink>}
				<div className={`navigation-bar ${isAtHome ? '' : 'not-home'}`}>
					{/*<div className='navigation-links'>*/}
						<NavLink
							className='navLink'
							exact
							to={`/${about}`}
							activeStyle={{ color: 'blue' }}
						>
							About
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${portfolio}`}
							activeStyle={{ color: 'blue' }}
						>
							Portfolio
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${resume}`}
							activeStyle={{ color: 'blue' }}
						>
							Resume
						</NavLink>
						<NavLink
							className='navLink'
							exact
							to={`/${contact}`}
							activeStyle={{ color: 'blue' }}
						>
							Contact
						</NavLink>
					{/*</div>*/}
				</div>
			</div>
		);
	}
}

export default Header;
