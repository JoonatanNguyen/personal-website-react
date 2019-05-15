import React from 'react';

import './SlideShowStylesheet.css';

const SlideShow = ({
   projectDemoImage
 }) => (
	<div className="project-demo">
		<img src={projectDemoImage} alt="" />
		<span>Home Page</span>
	</div>
);

export default SlideShow;