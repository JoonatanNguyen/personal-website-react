import React, { Component } from 'react';

import '../Stylesheet/PortfolioStylesheet.css';

import ProjectItemPanel from './ProjectItemPanel';

class Portfolio extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = { projects: [] }
	}

	componentWillMount() {
		fetch('/projects.json')
			.then(response => response.json())
			.then(data => this.setState({ projects: data.data }));
	}

	render() {
		return (
			<div className="portfolio-container">
				{this.state.projects.map((project, id) => (
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
				))}
			</div>
		)
	};
}

export default Portfolio;