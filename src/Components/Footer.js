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
			<div className='footer' data-aos='fade-up'>
				<div className='footer-text'>
					<span className = 'line-decoration-footer'/>
					<span>Get in touch through social media</span>
					<span className = 'line-decoration-footer'/>
				</div>
				<div className='logo-connect'>
					<img className='LinkedInLogo' src={LinkedInLogo} alt='LinkedIn logo'/>
					<img className='EmailLogo' src={MailLogo} alt='E-mail logo'/>
				</div>
			</div>
		)
	}
}

export default Footer;