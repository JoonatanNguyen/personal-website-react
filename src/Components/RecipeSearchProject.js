import React from 'react';

import '../Stylesheet/RecipeProjectStyleSheet.css';

import RecipeVideoBackground from '../Assets/videos/Recipe-search-bg-video.mp4';
import RecipeDemoPicture from '../Assets/images/recipe-project-demo.png';
import RecipeDemoSelectedFood from '../Assets/images/recipe-project-selected-demo.png';
import RecipeDemoChosenRecipe from '../Assets/images/recipe-project-recipe-demo.png';

import ProjectDescription from './ProjectDescription';
import ProjectDetail from './ProjectDetail';
import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class RecipeSearchProject extends React.Component {
	constructor(props) {
		super(props);

		this.state = { moreProjects: [] }
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}

	componentWillMount() {
		fetch('/moreProjects.json')
			.then(response => response.json())
			.then(data => this.setState({ moreProjects: data.data }));
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
					<ProjectDescription
						descriptionContent={
							<div>
								<p>Recipe search project is my personal project to acquire deeper knowledge about React.js</p>
								<p>
									This project is aimed for user to search for recipe based on their preferences. It will show more information about the dish
									and a link to open the page where there is recipe and steps to make that dish.
								</p>
								<p>
									This project is created by using React.js and working with real API calls (JSON).
								</p>
							</div>
						}
						labelColor="blue"
						underlineColor="blue"
						projectClient="My personal page"
						myRoleInProject="Front-end developer"
					/>
				</div>
				<div className="recipe-project-detail">
					<ProjectDetail
						projectDemoImage={RecipeDemoPicture}
					/>
					<ProjectDetail
						projectDemoImage={RecipeDemoChosenRecipe}
					/>
				</div>
				<TheEndSection/>
				<div className="project-show-container">
					{this.state.moreProjects.map((moreProjects, id) => (
						<MoreProjectShow
							key={id}
							borderTemplateClassName={moreProjects.borderTemplateClassName}
							buttonBorderClassName={moreProjects.buttonBorderClassName}
							projectImageSrc={moreProjects.projectImageSrc}
							projectName={moreProjects.projectName}
							projectLink={moreProjects.projectLink}
						/>
					))}
				</div>
			</div>
		)
	}
}


export default RecipeSearchProject;