import React from 'react';

import '../Stylesheet/TrainProjectStylesheet.css';

import TrainProjectVideoBackground from '../Assets/videos/Train-project-bg-video.mp4';

import MoreProjectShow from'./MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class Train extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div className="train-container">
				<div className="train-project-top-section">
					<video autoPlay muted loop className="video-bg-train">
						<source src={TrainProjectVideoBackground}/>
					</video>
					<div className="introduction-train-project">
						<p>Train Web App</p>
					</div>
				</div>
				<div className="train-description">
					<h2>About the project</h2>
					<div className="train-divider"/>
					<p>
						TR is the web application from my school project which is used to implement my knowledge about how front-end and back-end
						communicate with each other through API call.
					</p>
					<p>
						This project is aimed for user to see the schedule of a specific chosen train. The user can choose train type either "Long
						distance" or "Commuter".
					</p>
					<p>
						This project is created by using pure HTML5/CSS3, ASP.NET, C#, API (JSON).
					</p>
					<div className="sub-description-train">
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
				<TheEndSection/>
				<MoreProjectShow/>
			</div>
		)
	}
}

export default Train;