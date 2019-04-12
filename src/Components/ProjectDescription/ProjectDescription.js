import React from 'react';

import './ProjectDescriptionStylesheet.css';

const ProjectDescription = ({
	descriptionContent,
	labelColor,
	underlineColor,
	projectClient,
	myRoleInProject
}) => (
	<div className="project-description">
		<h2>About the project</h2>
		<div className="header-divider"/>
		<div className="description-content">{descriptionContent}</div>
		<div className={`sub-description ${labelColor}`}>
			<ul>
				<span>CLIENT</span>
				<div className={`label-underline ${underlineColor}`}/>
				<li>{projectClient}</li>
			</ul>
			<ul>
				<span>MY ROLE</span>
				<div className={`label-underline ${underlineColor}`}/>
				<li>{myRoleInProject}</li>
			</ul>
		</div>
	</div>
);

export default ProjectDescription;