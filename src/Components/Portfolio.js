import React from 'react';
import { Link } from 'react-router-dom';

import '../Stylesheet/PortfolioStylesheet.css';

import RecipeSearchPic from '../Assets/images/recipe-project-picture.jpeg';
import TrainInfoPic from '../Assets/images/train-project-picture-one.jpg';
import ClinicProjectPic from '../Assets/images/clinic-project-picture.jpeg';
import UPayProjectPic from '../Assets/images/online-payment-project-picture.jpg';
import InsuranceClaimPic from '../Assets/images/insurance-claim-project-picture.jpg';

import ContactLinkedInLogo from '../Assets/images/linkedin-logo-white.svg';
import ContactEmailLogo from '../Assets/images/email-logo-transparent.png';

import RoutePathConstants from '../Constants/RoutePathConstants';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

const Portfolio = () => (
	<div className='portfolio-container'>
		<div className='first-project'>
			<div className='project-image-top'>
				<div className='project-content-top'>
					<div className='project-number-top'>01</div>
					<div className='project-name-top'>Clinic Screen</div>
					<div className='see-more-top'>
						<Link to={`/${clinicProject}`}>See More</Link>
					</div>
				</div>
				<div className='overlay-bottom'>
					<img src={ClinicProjectPic} alt='hospital cartoon'/>
				</div>
			</div>
			<div className='project-info-bottom'>
				<div className='project-content'>
					<div className='project-number'>01</div>
					<div className='project-name'>Clinic Screen</div>
				</div>
			</div>
		</div>
		<div className='second-project'>
			<div className='project-info-top'>
				<div className='project-content'>
					<div className='project-number-top-blue'>02</div>
					<div className='project-name-top'>Recipe Search</div>
				</div>
			</div>
			<div className='project-image-bottom'>
				<div className='project-content'>
					<div className='project-number-blue'>02</div>
					<div className='project-name'>Recipe Search</div>
					<div className='see-more'>
						<Link to={`/${recipeSearch}`}>See More</Link>
					</div>
				</div>
				<div className='overlay-top'>
					<img src={RecipeSearchPic} alt='Recipe search background'/>
				</div>
			</div>
		</div>
		<div className='third-project'>
				<div className='project-image-top'>
				<div className='project-content-top'>
					<div className='project-number-top'>03</div>
					<div className='project-name-top'>Train Web App</div>
					<div className='see-more-top'>
						<Link to={`/${trainWebApp}`}>See More</Link>
					</div>
				</div>
				<div className='overlay-bottom'>
					<img src={TrainInfoPic} alt='Train information'/>
				</div>
			</div>
			<div className='project-info-bottom'>
				<div className='project-content'>
					<div className='project-number'>03</div>
					<div className='project-name'>Train Web App</div>
				</div>
			</div>
		</div>
		<div className='fourth-project'>
			<div className='project-info-top'>
				<div className='project-content'>
					<div className='project-number-top-blue'>04</div>
					<div className='project-name-top'>UPay</div>
				</div>
			</div>
			<div className='project-image-bottom'>
				<div className='project-content'>
					<div className='project-number-blue'>04</div>
					<div className='project-name'>UPay</div>
					<div className='see-more'>
						<Link to={`/${upay}`}>See More</Link>
					</div>
				</div>
				<div className='overlay-top'>
					<img src={UPayProjectPic} alt='UPay payment logo'/>
				</div>
			</div>
		</div>
		<div className='fifth-project'>
			<div className='project-image-top'>
				<div className='project-content-top'>
					<div className='project-number-top'>05</div>
					<div className='project-name-top'>Insurance Claim</div>
					<div className='see-more-top'>
						<Link to={`/${insuranceClaim}`}>See More</Link>
					</div>
				</div>
				<div className='overlay-bottom'>
					<img src={InsuranceClaimPic} alt='Insurance Claim form'/>
				</div>
			</div>
			<div className='project-info-bottom'>
				<div className='project-content'>
					<div className='project-number'>05</div>
					<div className='project-name'>Insurance Claim</div>
				</div>
			</div>
		</div>
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

export default Portfolio;