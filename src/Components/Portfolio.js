import React from 'react';

import '../Stylesheet/PortfolioStylesheet.css';

import RecipeSearchPic from '../Assets/images/recipe-project-picture.jpeg';
import TrainInfoPic from '../Assets/images/train-project-picture-one.jpg';
import ClinicProjectPic from '../Assets/images/clinic-project-picture.jpeg';
import UPayProjectPic from '../Assets/images/online-payment-project-picture.jpg';
import InsuranceClaimPic from '../Assets/images/insurance-claim-project-picture.jpg';
import ProjectItemPanel from './ProjectItemPanel';

import RoutePathConstants from '../Constants/RoutePathConstants';
import ContactLinkSection from './ContactLinkSection';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

const Portfolio = () => (
	<div className="portfolio-container">
		<ProjectItemPanel
			projectItemId="first"
			borderTemplateClassName="yellow-border"
			buttonTextColor="blue-link"
			projectNumberColor="yellow"
			projectNumber="01"
			projectName="Clinic screen"
			projectImageSrc={ClinicProjectPic}
			overlayPosition="bottom"
			projectLink={clinicProject}
			projectLinkSectionPosition="top"
			projectInfoSectionPosition="bottom"
		/>
		<ProjectItemPanel
			projectItemId="second"
			borderTemplateClassName="blue-border"
			buttonTextColor="yellow-link"
			projectNumberColor="blue"
			projectNumber="02"
			projectName="Recipe Search"
			projectImageSrc={RecipeSearchPic}
			overlayPosition="top"
			projectLink={recipeSearch}
			projectLinkSectionPosition="bottom"
			projectInfoSectionPosition="top"
		/>
		<ProjectItemPanel
			projectItemId="third"
			borderTemplateClassName="yellow-border"
			buttonTextColor="blue-link"
			projectNumberColor="yellow"
			projectNumber="03"
			projectName="Train Web App"
			projectImageSrc={TrainInfoPic}
			overlayPosition="bottom"
			projectLink={trainWebApp}
			projectLinkSectionPosition="top"
			projectInfoSectionPosition="bottom"
		/>
		<ProjectItemPanel
			projectItemId="fourth"
			borderTemplateClassName="blue-border"
			buttonTextColor="yellow-link"
			projectNumberColor="blue"
			projectNumber="04"
			projectName="UPay"
			projectImageSrc={UPayProjectPic}
			overlayPosition="top"
			projectLink={upay}
			projectLinkSectionPosition="bottom"
			projectInfoSectionPosition="top"
		/>
		<ProjectItemPanel
			projectItemId="fifth"
			borderTemplateClassName="yellow-border"
			buttonTextColor="blue-link"
			projectNumberColor="yellow"
			projectNumber="05"
			projectName="Insurance Claim"
			projectImageSrc={InsuranceClaimPic}
			overlayPosition="bottom"
			projectLink={insuranceClaim}
			projectLinkSectionPosition="top"
			projectInfoSectionPosition="bottom"
		/>
		<ContactLinkSection/>
	</div>
);

export default Portfolio;