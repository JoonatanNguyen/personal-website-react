import React, { Component } from 'react';

import './PortfolioStylesheet.css';

import ProjectItemPanel from '../ProjectItemPanel/ProjectItemPanel';

import BackArrow from '../../Assets/images/backArrow.svg';
import ForwardArrow from '../../Assets/images/forwardArrow.png';


class Portfolio extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			projects: [],
			currentProjectIndex: 0,
			isOnSmallerScreenSize: false
		}
	}

	componentDidMount() {
		this.throttleHandleWindowResize();
		window.addEventListener('resize', this.throttleHandleWindowResize);
	}

	componentWillMount() {
		fetch('/projects.json')
			.then(response => response.json())
			.then(data => this.setState({ projects: data.data }));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.throttleHandleWindowResize);
	}

	throttleHandleWindowResize = () => {
			this.setState({ isOnSmallerScreenSize: window.innerWidth <= 700 });
	};

	handleNextButtonClick = () => {
		const { currentProjectIndex, projects } = this.state;

		this.setState({
			currentProjectIndex: currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
		});
	};

	handlePreviousButtonClick = () => {
		const { currentProjectIndex, projects } = this.state;

		this.setState({
			currentProjectIndex: currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
		});
	};

	render() {
		const { projects, currentProjectIndex, isOnSmallerScreenSize } = this.state;

		return (
			<div className="portfolio-container">
				<div className="project-controller" onClick={this.handlePreviousButtonClick}>
					<img src={BackArrow} id="back-arrow" alt=""/>
				</div>
				{!isOnSmallerScreenSize ? projects.map((project, id) => (
					<ProjectItemPanel
						key={id}
						projectItemId={project.projectItemId}
						borderTemplateClassName={project.borderTemplateClassName}
						buttonTextColor={project.buttonTextColor}
						projectNumberColor={project.projectNumberColor}
						projectNumber={project.projectNumber}
						projectName={project.projectName}
						projectImageSrc={project.projectImageSrc}
						projectTechnologyUsedLabel={project.projectTechnologyUsedLabel}
						overlayPosition={project.overlayPosition}
						projectLink={project.projectLink}
						projectLinkSectionPosition={project.projectLinkSectionPosition}
						projectInfoSectionPosition={project.projectInfoSectionPosition}
					/>
				)) : projects.length > 0 && <ProjectItemPanel
					key={currentProjectIndex}
					projectItemId={projects[currentProjectIndex].projectItemId}
					borderTemplateClassName={projects[currentProjectIndex].borderTemplateClassName}
					buttonTextColor={projects[currentProjectIndex].buttonTextColor}
					projectNumberColor={projects[currentProjectIndex].projectNumberColor}
					projectNumber={projects[currentProjectIndex].projectNumber}
					projectName={projects[currentProjectIndex].projectName}
					projectImageSrc={projects[currentProjectIndex].projectImageSrc}
					projectTechnologyUsedLabel={projects[currentProjectIndex].projectTechnologyUsedLabel}
					overlayPosition={projects[currentProjectIndex].overlayPosition}
					projectLink={projects[currentProjectIndex].projectLink}
					projectLinkSectionPosition={projects[currentProjectIndex].projectLinkSectionPosition}
					projectInfoSectionPosition={projects[currentProjectIndex].projectInfoSectionPosition}
				/>}
				<div className="project-controller" onClick={this.handleNextButtonClick}>
					<img src={ForwardArrow} id="forward-arrow" alt=""/>
				</div>
			</div>
		)
	};
}

export default Portfolio;