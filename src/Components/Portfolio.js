import React from 'react';

import '../Stylesheet/PortfolioStylesheet.css';
import RecipeSearchPic from '../Assets/images/recipe-project-picture.jpeg';
import TrainInfoPic from '../Assets/images/train-project-picture-one.jpg';
import ClinicProjectPic from '../Assets/images/clinic-project-picture.jpeg';
import UPayProjectPic from '../Assets/images/online-payment-project-picture.jpg';
import InsuranceClaimPic from '../Assets/images/insurance-claim-project-picture.jpg';

const Portfolio = () => (
	<div className='portfolio-container'>
		<div className='first-project'>
			<div className='project-image-top'>
				<div className='project-content-top'>
					<div className='project-number-top'>01</div>
					<div className='project-name-top'>Clinic Screen</div>
					<button>See More</button>
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
					<button>See More</button>
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
					<button>See More</button>
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
					<button>See More</button>
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
					<button>See More</button>
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
	</div>
);

export default Portfolio;