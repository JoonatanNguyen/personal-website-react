import React from 'react';

import ContactLinkSection from './ContactLinkSection';

const MiddleShape = () => (
	<div className="middle-shape">
		<div className="triangle-one" />
		<div className="triangle-two" />
		<div className="triangle-three" />
		<div className="triangle-four" />
		<div className="line-one"/>
		<div className="line-two"/>
		<div className="line-three"/>
		<div className="square-shape"/>
		<div className="diamond-shape rotate-first">
			<p className="greeting-text">Hi, I'm</p>
			<h2>MINH NGUYEN</h2>
			<p className="home-description">Front-end/Software Developer</p>
		</div>
		<ContactLinkSection/>
	</div>
);

export default MiddleShape;