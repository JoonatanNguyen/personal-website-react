import React from 'react';

import '../Stylesheet/UPayStylesheet.css';

import UPayVideoBackGround from '../Assets/videos/UPay-project-video-bg.mp4';

const UPayProject = () => (
	<div className='upay-container'>
		<div className='upay-project-top-section'>
			<video autoPlay muted loop className='video-bg-upay'>
				<source src={UPayVideoBackGround}/>
			</video>
			<div className='introduction-upay-project'>
				<p>UPAY</p>
			</div>
		</div>
		<div className='upay-description'>
			<h2>About the project</h2>
			<div className='upay-divider'/>
			<p>
				This project is my school project, which used pure HTML5/CSS3 and JavaScript.
			</p>
			<p>
				UPay is the web application which is used to replace your normal wallet. The user can use this application to pay a mobile
				services, streaming services, housing bills, and other services from online but not go to the store.
			</p>
			<p>
				This project is just a practice project at my university. Thus, it does not work like a real application.
			</p>
			<div className='sub-description-upay'>
				<ul>
					<span>CLIENT</span>
					<li>My school project</li>
				</ul>
				<ul>
					<span>MY ROLE</span>
					<li>Front-end developer, Project manager</li>
				</ul>
			</div>
		</div>
	</div>
);

export default UPayProject;