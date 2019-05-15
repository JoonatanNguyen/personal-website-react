import React, { Component } from 'react';

import './style.css';

import RoutePathConstants from '../../Constants/RoutePathConstants';
import { NavLink } from "react-router-dom";
import history from "../../history";
const { home, about, portfolio, contact, resume } = RoutePathConstants;

class NagivationLinks extends Component {
	render() {
		const isAtHome = history.location.pathname === `/${home}`;

		return (
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
		)
	}
}

export default NagivationLinks;