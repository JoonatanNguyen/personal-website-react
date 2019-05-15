import React, {Component} from 'react';

import './style.css';
import {NavLink} from "react-router-dom";
import RoutePathConstants from '../../Constants/RoutePathConstants';
const { about, portfolio, contact, resume } = RoutePathConstants;

class HiddenMenu extends Component {
	constructor(props, context){
		super(props, context);

		this.state = { isMenuOpen: false }
	}

	componentWillMount() {
		document.addEventListener('mousedown', this.handleHideHiddenMenu, false);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'mousedown',
			this.handleHideHiddenMenu,
			false
		);
	}

	handleDisplayHiddenMenuClick = () => {
		this.setState({
			isMenuOpen: true
		})
	};

	handleHideHiddenMenu = e => {
		if(this.node.contains(e.target)) return;

		this.setState({ isMenuOpen: false });
	};

	render() {
		const { isMenuOpen } = this.state;

		let hiddenMenuStyle = {};

		if (isMenuOpen) {
			hiddenMenuStyle = {
				opacity: 1,
				visibility: 'visible'
			};
		}

		return (
			<div className="hidden-menu-container">
				<div className="menu-box-shape" onClick={this.handleDisplayHiddenMenuClick}/>
				<div className="show-hidden-menu" style={hiddenMenuStyle} ref={node => (this.node = node)}>
					<NavLink
						className='navLink-hidden'
						exact
						to={`/${about}`}
						activeStyle={{ color: '#ffc722' }}
					>
						About
					</NavLink>
					<NavLink
						className='navLink-hidden'
						exact
						to={`/${portfolio}`}
						activeStyle={{ color: '#ffc722' }}
					>
						Portfolio
					</NavLink>
					<NavLink
						className='navLink-hidden'
						exact
						to={`/${resume}`}
						activeStyle={{ color: '#ffc722' }}
					>
						Resume
					</NavLink>
					<NavLink
						className='navLink-hidden'
						exact
						to={`/${contact}`}
						activeStyle={{ color: '#ffc722' }}
					>
						Contact
					</NavLink>
				</div>
			</div>
		)
	}
}

export default HiddenMenu;