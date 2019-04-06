import React from 'react';

import '../Stylesheet/ProjectDetailStylesheet.css';

const ProjectDetail = ({
  projectDemoImage
}) => (
	<div className="project-demo">
		<img src={projectDemoImage} alt="" />
	</div>
);

export default ProjectDetail;