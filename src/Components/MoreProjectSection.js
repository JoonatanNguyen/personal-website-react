import React from 'react';
import { Link } from 'react-router-dom';

import '../Stylesheet/MoreProjectStylesheet.css';

import ClinicProjectPic from '../Assets/images/clinic-project-picture.jpeg';
import RecipeSearchPic from '../Assets/images/recipe-project-picture.jpeg';
import TrainInfoPic from '../Assets/images/train-project-picture-one.jpg';
import UPayProjectPic from '../Assets/images/online-payment-project-picture.jpg';
import InsuranceClaimPic from '../Assets/images/insurance-claim-project-picture.jpg';
import RoutePathConstants from '../Constants/RoutePathConstants';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

const MoreProject = () => (
	<div className="project-show-container">
		<div className="about-project first-project-show yellow-border-project">
			<img src={ClinicProjectPic} alt="clinic"/>
			<div className="project-label">
				<div className="button-project-link yellow-button-border">
					<Link to={`/${clinicProject}`}>Clinic Screen</Link>
				</div>
			</div>
		</div>
		<div className="about-project second-project-show blue-border-project">
			<img src={RecipeSearchPic} alt="food"/>
			<div className="project-label">
				<div className="button-project-link blue-button-border">
					<Link to={`/${recipeSearch}`}>Recipe Search</Link>
				</div>
			</div>
		</div>
		<div className="about-project third-project-show yellow-border-project">
			<img src={TrainInfoPic} alt="train"/>
			<div className="project-label">
				<div className="button-project-link yellow-button-border">
					<Link to={`/${trainWebApp}`}>Train Web App</Link>
				</div>
			</div>
		</div>
		<div className="about-project fourth-project-show blue-border-project">
			<img src={UPayProjectPic} alt="payment methods"/>
			<div className="project-label">
				<div className="button-project-link blue-button-border">
					<Link to={`/${upay}`}>UPay</Link>
				</div>
			</div>
		</div>
		<div className="about-project fifth-project-show yellow-border-project">
			<img src={InsuranceClaimPic} alt="claim form"/>
			<div className="project-label">
				<div className="button-project-link yellow-button-border">
					<Link to={`/${insuranceClaim}`}>Insurance Claim </Link>
				</div>
			</div>
		</div>
	</div>
);

export default MoreProject;