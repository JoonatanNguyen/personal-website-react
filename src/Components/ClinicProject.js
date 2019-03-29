import React from 'react';
import { Link } from "react-router-dom";

import '../Stylesheet/ClinicProjectStylesheet.css';
import '../Stylesheet/AboutStylesheet.css';

import ClinicVideoBackground from '../Assets/videos/Clinic-project-bg-video.mp4';
import ClinicScreenMonitor from '../Assets/images/monitor-frame.png';
import ClinicProjectPic from "../Assets/images/clinic-project-picture.jpeg";
import RecipeSearchPic from "../Assets/images/recipe-project-picture.jpeg";
import TrainInfoPic from "../Assets/images/train-project-picture-one.jpg";
import UPayProjectPic from "../Assets/images/online-payment-project-picture.jpg";
import InsuranceClaimPic from "../Assets/images/insurance-claim-project-picture.jpg";

import RoutePathConstants from '../Constants/RoutePathConstants';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

class ClinicScreen extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(<div className='clinic-project-container'>
			<div className='clinic-project-top-section'>
				<video autoPlay muted loop className="video-bg-clinic">
					<source src={ClinicVideoBackground} type="video/mp4"/>
				</video>
				<div className='introduction-clinic-project'>
					<p>Clinic Screen</p>
				</div>
			</div>
			<div className='description'>
				<h2>About the project</h2>
				<div className='divider'/>
				<p>Nancy clinic is a clinic for children. It is located in Hochiminhcity, Vietnam. </p>
				<p>
					This project is aimed to create a patients waiting screen, which shows whose name is going to be called next
					and which room they should go to see a doctor.
				</p>
				<p>
					This project is created by using React.js and working with real API calls. I have contributed with my brother in this
					project as to improve my knowledge about React.js and React redux.
				</p>
				<div className='sub-description'>
					<ul>
						<span>CLIENT</span>
						<li>Nancy Clinic</li>
					</ul>
					<ul>
						<span>MY ROLE</span>
						<li>Front-end developer</li>
					</ul>
				</div>
			</div>
			<div className='project-detail'>
				<img src={ClinicScreenMonitor} alt='monitor'/>
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

export default ClinicScreen;