import React from 'react';

import '../Stylesheet/ContactStylesheet.css';
import ContactLinkedInLogo from "../Assets/images/linkedin-logo-white.svg";
import ContactEmailLogo from "../Assets/images/email-logo-transparent.png";

const Contact = () => (
	<div className='contact-container'>
		<div className='picture-me'/>
		<div className='contact-form'>
			<div className='contact-content'>
				<h1>Contact me:</h1>
				<div className='contact-text'>
					<p><span className='text-decoration'>Name:</span> Nguyen Quang Minh</p>
					<p><span className='text-decoration'>Nickname:</span> Joonatan</p>
					<address>
						<span className='text-decoration'>Email:</span>
						<a href='minhnguyen181199@gmail.com'> minhnguyen181199@gmail.com</a>
					</address>
					<p>
						<span className='text-decoration'>LinkedIn:</span>
						<a href='https://www.linkedin.com/in/minh-nguyen-a0315b151/'> My LinkedIn</a>
					</p>
					<p>
						<span className='text-decoration'>GitHub:</span>
						<a href='https://github.com/JoonatanNguyen'> My GitHub account</a>
					</p>
				</div>
			</div>
		</div>
		<div className='contact-form-layer'/>
		<div className='contact-footer'>
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

export default Contact;