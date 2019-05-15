import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderStylesheet.css';
import RoutePathConstants from '../../Constants/RoutePathConstants';
import HiddenMenu from '../hiddenMenu/hiddenMenu';
import history from '../../history';

const { home, about, portfolio, contact, resume } = RoutePathConstants;

class Header extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = { isOnSmallerScreenSize: false }
	}

	componentDidMount() {
		this.handleWindowResize();
		window.addEventListener('resize', this.handleWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowResize);
	}

	handleWindowResize = () => {
		this.setState({ isOnSmallerScreenSize: window.innerWidth <= 850 });
	};

	render() {
		const isAtHome = history.location.pathname === `/${home}`;
		const { isOnSmallerScreenSize } = this.state;

		return (
			<div className='navigation-bar-container'>
				{!isAtHome && <NavLink className='nav-link-home' exact to='/'>Home</NavLink>}
				{!isOnSmallerScreenSize ? <div className={`navigation-bar ${isAtHome ? '' : 'not-home'}`}>
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
				</div> : <HiddenMenu />}
			</div>
		);
	}
}

export default Header;
