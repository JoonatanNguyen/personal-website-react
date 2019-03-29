import React from 'react';
import {Link} from "react-router-dom";

import '../Stylesheet/UPayStylesheet.css';
import '../Stylesheet/AboutStylesheet.css';

import UPayVideoBackGround from '../Assets/videos/UPay-project-video-bg.mp4';
import UPayDemoVideo from '../Assets/videos/UPay-demo-video.mp4';
import UPayDemoPictSubscription from '../Assets/images/project_UPAY2.png';
import UPayDemoPicPersonalInfo from '../Assets/images/project_UPAY_personal_Info.png';
import ClinicProjectPic from "../Assets/images/clinic-project-picture.jpeg";

import RecipeSearchPic from "../Assets/images/recipe-project-picture.jpeg";
import TrainInfoPic from "../Assets/images/train-project-picture-one.jpg";
import UPayProjectPic from "../Assets/images/online-payment-project-picture.jpg";
import InsuranceClaimPic from "../Assets/images/insurance-claim-project-picture.jpg";

import RoutePathConstants from '../Constants/RoutePathConstants';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

class UPayProject extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(<div className='upay-container'>
			<div className='upay-project-top-section'>
				<video autoPlay muted loop className='video-bg-upay'>
					<source src={UPayVideoBackGround}/>
				</video>
				<div className='introduction-upay-project'>
					<p>UPAY</p>
				</div>
			</div>
			<div className='upay-description'>
				<h2>About the project</h2>
				<div className='upay-divider'/>
				<p>
					This project is my school project, which used pure HTML5/CSS3 and JavaScript.
				</p>
				<p>
					UPay is the web application which is used to replace your normal wallet. The user can use this application to pay a mobile
					services, streaming services, housing bills, and other services from online but not go to the store.
				</p>
				<p>
					This project is just a practice project at my university. Thus, it does not work like a real application.
				</p>
				<div className='sub-description-upay'>
					<ul>
						<span>CLIENT</span>
						<li>My school project</li>
					</ul>
					<ul>
						<span>MY ROLE</span>
						<li>Front-end developer, Project manager</li>
					</ul>
				</div>
			</div>
			<div className='upay-project-detail'>
				<div className='upay-project-demo'>
					<video autoPlay muted loop className='video-demo-upay'>
						<source src={UPayDemoVideo}/>
					</video>
					<span className='upay-label-description'>Home page</span>
				</div>
				<div className='upay-project-demo'>
					<img src={UPayDemoPictSubscription}/>
					<span className='label-description-subscription'>Subscription page</span>
				</div>
				<div className='upay-project-demo'>
					<img className='demo-personal-info' src={UPayDemoPicPersonalInfo}/>
					<span className='label-description-personal-info'>Personal information page</span>
				</div>
			</div>
			<div className='the-end-div'>
				<span>THE END</span>
			</div>
			<div className='other-projects'>
				<div className='about-project-show'>
					<div className='about-project first-project-show yellow-border-project'>
						<img src={ClinicProjectPic} alt='clinic'/>
						<div className='project-label'>
							<div className='text-yellow'>
								<Link to={`/${clinicProject}`}>Clinic Screen</Link>
							</div>
						</div>
					</div>
					<div className='about-project second-project-show blue-border-project'>
						<img src={RecipeSearchPic} alt='food'/>
						<div className='project-label'>
							<div className='text-blue'>
								<Link to={`/${recipeSearch}`}>Recipe Search</Link>
							</div>
						</div>
					</div>
					<div className='about-project third-project-show yellow-border-project'>
						<img src={TrainInfoPic} alt='train'/>
						<div className='project-label'>
							<div className='text-yellow'>
								<Link to={`/${trainWebApp}`}>Train Web App</Link>
							</div>
						</div>
					</div>
					<div className='about-project fourth-project-show blue-border-project'>
						<img src={UPayProjectPic} alt='payment methods'/>
						<div className='project-label'>
							<div className='text-blue'>
								<Link to={`/${upay}`}>UPay</Link>
							</div>
						</div>
					</div>
					<div className='about-project fifth-project-show yellow-border-project'>
						<img src={InsuranceClaimPic} alt='claim form'/>
						<div className='project-label'>
							<div className='text-yellow'>
								<Link to={`/${insuranceClaim}`}>Insurance Claim </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default UPayProject;