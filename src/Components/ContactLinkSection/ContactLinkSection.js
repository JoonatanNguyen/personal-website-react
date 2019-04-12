import React from 'react';

import '../../App.css';
import './ContactLinkStylesheet.css';
import { isCurrentRouteInWhiteListRoutes } from '../../presenters/ContactLinkSectionPresenter';

import ContactLinkedInLogo from '../../Assets/images/linkedin-logo-white.svg';
import ContactEmailLogo from '../../Assets/images/email-logo-transparent.png';
import RoutePathConstants from "../../Constants/RoutePathConstants";

const { about, resume, recipeSearch, upay, insuranceClaim, clinicProject, trainWebApp } = RoutePathConstants;
const routesArray = [about, resume, recipeSearch, upay, insuranceClaim, clinicProject, trainWebApp];

const ContactLinkSection = () => (
	!isCurrentRouteInWhiteListRoutes(routesArray) && <div className="contact-footer">
		<a href="https://www.linkedin.com/in/minh-nguyen-a0315b151/" target="_blank">
			<img className="contact-linkedin-logo" src={ContactLinkedInLogo} alt="LinkedIn logo"/>
		</a>
		<div className="divider">|</div>
		<a href="mailto: minhnguyen181199@gmail.com">
			<img className="contact-email-logo" src={ContactEmailLogo} alt="Email logo"/>
		</a>
		<a className="label-contact" href="mailto: minhnguyen181199@gmail.com">Get in touch</a>
	</div>
);

export default ContactLinkSection;