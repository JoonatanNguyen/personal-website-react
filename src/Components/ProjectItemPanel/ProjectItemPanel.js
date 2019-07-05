import React from 'react';

import { Link } from 'react-router-dom';

const ProjectItemPanel = ({
	projectItemId,
	borderTemplateClassName,
	buttonTextColor,
	projectNumberColor,
	projectNumber,
	projectName,
	projectImageSrc,
	projectTechnologyUsedLabel,
	overlayPosition,
	projectLink,
	projectLinkSectionPosition,
	projectInfoSectionPosition
}) => (
	<div id={projectItemId} className={`project-panel ${borderTemplateClassName}`}>
		<div className={`project-link-section ${projectLinkSectionPosition}`}>
			<div className="project-content">
				<div className={`project-number ${projectNumberColor}`}>{projectNumber}</div>
				<div className="project-name">{projectName}</div>
				<div className={`see-more ${borderTemplateClassName}`}>
					<Link to={`/${projectLink}`} className={buttonTextColor}>See More</Link>
				</div>
			</div>
		</div>
		<div className={`overlay ${overlayPosition}`}>
			<img src={projectImageSrc} alt=""/>
		</div>
		<div className={`project-info-section ${projectInfoSectionPosition}`}>
			<div className="project-content">
				<div className={`project-number ${projectNumberColor}`}>{projectNumber}</div>
				<div className="project-name">{projectName}</div>
				<div className="technology-used-label">{projectTechnologyUsedLabel}</div>
			</div>
		</div>
	</div>
);

export default ProjectItemPanel;