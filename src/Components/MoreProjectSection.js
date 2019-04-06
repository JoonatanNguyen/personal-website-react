import React from 'react';
import { Link } from 'react-router-dom';

import '../Stylesheet/MoreProjectStylesheet.css';

const MoreProject = ({
  borderTemplateClassName,
	buttonBorderClassName,
  projectName,
  projectImageSrc,
  projectLink
}) => (
		<div className={`about-project ${borderTemplateClassName}`}>
			<img src={projectImageSrc} alt=""/>
			<div className="project-label">
				<div className={`button-project-link ${buttonBorderClassName}`}>
					<Link to={`/${projectLink}`}>{projectName}</Link>
				</div>
			</div>
		</div>
);

export default MoreProject;