import React from 'react';

import '../Stylesheet/RecipeProjectStyleSheet.css';
import '../Stylesheet/AboutStylesheet.css';

import RecipeVideoBackground from '../Assets/videos/Recipe-search-bg-video.mp4';
import RecipeDemoPicture from '../Assets/images/recipe-project-demo.png';
import RecipeDemoSelectedFood from '../Assets/images/recipe-project-selected-demo.png';
import RecipeDemoChosenRecipe from '../Assets/images/recipe-project-recipe-demo.png';

import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class RecipeSearchProject extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render () {
		return (
			<div className="recipe-container">
				<div className="recipe-project-top-section">
					<video autoPlay muted loop className="video-bg-recipe">
						<source src={RecipeVideoBackground}/>
					</video>
					<div className="introduction-recipe-project">
						<p>Recipe Search</p>
					</div>
				</div>
				<div className="recipe-description">
					<h2>About the project</h2>
					<div className="recipe-divider"/>
					<p>Recipe search project is my personal project to acquire deeper knowledge about React.js</p>
					<p>
						This project is aimed for user to search for recipe based on their preferences. It will show more information about the dish
						and a link to open the page where there is recipe and steps to make that dish.
					</p>
					<p>
						This project is created by using React.js and working with real API calls (JSON).
					</p>
					<div className="sub-description-recipe">
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
				<div className="recipe-project-detail">
					<div className="recipe-demo">
						<img src={RecipeDemoPicture} alt="recipe project demo"/>
						<span className="page-label-description">Home page</span>
					</div>
					<div className="recipe-demo">
						<img src={RecipeDemoSelectedFood} alt="choose specific dish demo"/>
						<span className="page-label-one-description">Chosen Food Page</span>
					</div>
					<div className="recipe-demo-two">
						<img src={RecipeDemoChosenRecipe} alt="show chosen recipe demo"/>
						<span className="page-label-two-description">Chosen Recipe Page</span>
					</div>
				</div>
				<TheEndSection/>
				<MoreProjectShow/>
			</div>
		)
	}
}


export default RecipeSearchProject;