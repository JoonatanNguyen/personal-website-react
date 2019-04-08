import React from 'react';
import AOS from "aos";

import '../Stylesheet/FooterStylesheet.css';

import LinkedInLogo from "../Assets/images/linkedin-logo.jpg";
import MailLogo from "../Assets/images/email-logo.jpg";


class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		AOS.init({
			duration: 1500
		})
	}

	render() {
		return (
			<div className='footer'>
				<div className='footer-text'>
					<span className = 'line-decoration-footer'/>
					<span>Get in touch through social media</span>
					<span className = 'line-decoration-footer'/>
				</div>
				<div className='logo-connect'>
					<a href="https://www.linkedin.com/in/minh-nguyen-a0315b151/" target="_blank">
						<img className='LinkedInLogo' src={LinkedInLogo} alt='LinkedIn logo'/>
					</a>
					<a href="minhnguyen181199@gmail.com" target="_blank">
						<img className='EmailLogo' src={MailLogo} alt='E-mail logo'/>
					</a>
				</div>
			</div>
		)
	}
}

export default Footer;