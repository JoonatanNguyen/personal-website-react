import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import './HeaderStylesheet.css';
import RoutePathConstants from '../../Constants/RoutePathConstants';
import HiddenMenu from '../hiddenMenu/hiddenMenu';
import history from '../../history';
import NavigationLinks from '../NavigationLinks/navigationLinks';

const { home } = RoutePathConstants;

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
				{!isAtHome ? !isOnSmallerScreenSize ? <NavigationLinks/> : <HiddenMenu /> : <NavigationLinks/>}
			</div>
		);
	}
}

export default Header;
