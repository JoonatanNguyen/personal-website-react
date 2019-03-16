import React from 'react';
import ContactLinkedInLogo from "../Assets/images/linkedin-logo-white.svg";
import ContactEmailLogo from "../Assets/images/email-logo-transparent.png";

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
			<p className='greeting-text'>Hi, I'm</p>
			<h2>MINH NGUYEN</h2>
			<p className='home-description'>Front-end/Software Developer</p>
		</div>
		<div className='contact-footer-home'>
			<a href='https://www.linkedin.com/in/minh-nguyen-a0315b151/'>
				<img className='contact-linkedin-logo' src={ContactLinkedInLogo} alt='LinkedIn logo'/>
			</a>
			<div className='divider'>|</div>
			<a href='minhnguyen181199@gmail.com'>
				<img className='contact-email-logo' src={ContactEmailLogo} alt='Email logo'/>
			</a>
			<a className='label-contact' href='minhnguyen181199@gmail.com'>Get in touch</a>
		</div>
	</div>
);

export default MiddleShape;