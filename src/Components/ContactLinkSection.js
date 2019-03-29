import React from 'react';

import '../App.css';
import '../Stylesheet/ContactLinkStylesheet.css';

import ContactLinkedInLogo from '../Assets/images/linkedin-logo-white.svg';
import ContactEmailLogo from '../Assets/images/email-logo-transparent.png';

const ContactLinkSection = () => (
	<div className="contact-footer">
		<a href="https://www.linkedin.com/in/minh-nguyen-a0315b151/">
			<img className="contact-linkedin-logo" src={ContactLinkedInLogo} alt="LinkedIn logo"/>
		</a>
		<div className="divider">|</div>
		<a href="minhnguyen181199@gmail.com">
			<img className="contact-email-logo" src={ContactEmailLogo} alt="Email logo"/>
		</a>
		<a className="label-contact" href="minhnguyen181199@gmail.com">Get in touch</a>
	</div>
);

export default ContactLinkSection;