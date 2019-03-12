import React from 'react';

import '../Stylesheet/PortfolioStyleshee.css';
import RecipeSearchPic from '../Assets/images/recipe-project-picture.jpg';
import TrainInfoPic from '../Assets/images/train-info-project-picture.jpg';
import ClinicProjectPic from '../Assets/images/clinic-project-picture.jpg';
import UPayProjectPic from '../Assets/images/UPAY.jpeg';
import InsuranceClaimPic from '../Assets/images/insurance-claim-project-picture.jpg';

const Portfolio = () => (
	<div className='portfolio-container'>
		<div className='first-project'>
			<div className='project-image-top'>
				<img src={ClinicProjectPic} alt='Hospital cartoon'/>
			</div>
			<div className='project-info-bottom'>
				<div className='overlay-bottom'>
				</div>
				<div className='project-content'>
					<div className='project-number'>01</div>
					<div className='project-name'>Clinic screen</div>
				</div>
			</div>
		</div>
		<div className='second-project'>
			<div className='project-info-top'>
				<div className='overlay-top'></div>
			</div>
			<div className='project-image-bottom'>
				<img src={RecipeSearchPic} alt='Recipe search background'/>
			</div>
		</div>
		<div className='third-project'>
			<div className='project-image-top'>
				<img src={UPayProjectPic} alt='UPay payment logo'/>
			</div>
			<div className='project-info-bottom'>
				<div className='overlay-bottom'></div>
			</div>
		</div>
		<div className='fourth-project'>
			<div className='project-info-top'>
				<div className='overlay-top'></div>
			</div>
			<div className='project-image-bottom'>
				<img src={TrainInfoPic} alt='Train information'/>
			</div>
		</div>
		<div className='fifth-project'>
			<div className='project-image-top'>
				<img src={InsuranceClaimPic} alt='Insurance Claim form'/>
			</div>
			<div className='project-info-bottom'>
				<div className='overlay-bottom'></div>
			</div>
		</div>
	</div>
);

export default Portfolio;