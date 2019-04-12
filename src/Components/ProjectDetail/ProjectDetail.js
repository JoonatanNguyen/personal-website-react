import React from 'react';

import './ProjectDetailStylesheet.css';

const ProjectDetail = ({
  projectDemoImage
}) => (
	<div className="project-demo">
		<img src={projectDemoImage} alt="" />
		<span>Home Page</span>
	</div>
);

export default ProjectDetail;