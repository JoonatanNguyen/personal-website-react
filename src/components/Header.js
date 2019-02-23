import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<div className="navigation-bar">
		<NavLink to='/' exact activeStyle={
			{color: 'blue'}
		}>About</NavLink>
		<NavLink to='/Portfolio' exact activeStyle={
			{color: 'blue'}
		}>Portfolio</NavLink>
		<NavLink to='/Resume' exact activeStyle={
			{color: 'blue'}
		}>Resume</NavLink>
		<NavLink to='/Contact' exact activeStyle={
			{color: 'blue'}
		}>Contact</NavLink>
	</div>
);

export default Header;
