import React from 'react';
import { Link } from "react-router-dom";

import '../Stylesheet/RecipeProjectStyleSheet.css';
import '../Stylesheet/AboutStylesheet.css';

import RecipeVideoBackground from '../Assets/videos/Recipe-search-bg-video.mp4';
import RecipeDemoPicture from '../Assets/images/recipe-project-demo.png';
import RecipeDemoSelectedFood from '../Assets/images/recipe-project-selected-demo.png';
import RecipeDemoChosenRecipe from '../Assets/images/recipe-project-recipe-demo.png';
import ClinicProjectPic from "../Assets/images/clinic-project-picture.jpeg";
import RecipeSearchPic from "../Assets/images/recipe-project-picture.jpeg";
import TrainInfoPic from "../Assets/images/train-project-picture-one.jpg";
import UPayProjectPic from "../Assets/images/online-payment-project-picture.jpg";
import InsuranceClaimPic from "../Assets/images/insurance-claim-project-picture.jpg";

import RoutePathConstants from '../Constants/RoutePathConstants';

const { clinicProject, recipeSearch, trainWebApp, upay, insuranceClaim } = RoutePathConstants;

const RecipeSearchProject = () => (
	<div className='recipe-container'>
		<div className='recipe-project-top-section'>
			<video autoPlay muted loop className='video-bg-recipe'>
				<source src={RecipeVideoBackground}/>
			</video>
			<div className='introduction-recipe-project'>
				<p>Recipe Search</p>
			</div>
		</div>
		<div className='recipe-description'>
			<h2>About the project</h2>
			<div className='recipe-divider'/>
			<p>Recipe search project is my personal project to acquire deeper knowledge about React.js</p>
			<p>
				This project is aimed for user to search for recipe based on their preferences. It will show more information about the dish
				and a link to open the page where there is recipe and steps to make that dish.
			</p>
			<p>
				This project is created by using React.js and working with real API calls (JSON).
			</p>
			<div className='sub-description-recipe'>
				<ul>
					<span>CLIENT</span>
					<li>My personal page</li>
				</ul>
				<ul>
					<span>MY ROLE</span>
					<li>Front-end developer</li>
				</ul>
			</div>
		</div>
		<div className='recipe-project-detail'>
			<div className='recipe-demo-homepage'>
				<img src={RecipeDemoPicture} alt='recipe project demo'/>
				<span className='page-label-description'>Home page</span>
			</div>
			<div className='recipe-demo-homepage'>
				<img src={RecipeDemoSelectedFood} alt='choose specific dish demo'/>
				<span className='page-label-one-description'>Chosen Food Page</span>
			</div>
			<div className='recipe-demo-two-homepage'>
				<img src={RecipeDemoChosenRecipe} alt='show chosen recipe demo'/>
				<span className='page-label-two-description'>Chosen Recipe Page</span>
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
);

export default RecipeSearchProject;