import React from 'react';

import '../Stylesheet/InsuranceProjectStylesheet.css';

import InsuranceVideoBackground from '../Assets/videos/Insurance-project-video-bg.mp4';

import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class InsuranceProject extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div className="insurance-container">
				<div className="insurance-project-top-section">
					<video autoPlay muted loop className="video-bg-insurance">
						<source src={InsuranceVideoBackground}/>
					</video>
					<div className="introduction-insurance-project">
						<p>Insurance Claim</p>
					</div>
				</div>
				<div className="insurance-description">
					<h2>About the project</h2>
					<div className="insurance-divider"/>
					<p>Insurance claim project is the web application from my school project which is about web application development.</p>
					<p>
						This project is aimed for user to claim their insurances. The project has three rolls: Client, Admin, Agent. The Admin is
						responsible for managing clients and agents, and the Agent is able to confirm the claim as well as reject claim from clients.
					</p>
					<p>
						This project is created by using C#, WebForm with MVC model.
					</p>
					<div className="sub-description-insurance">
						<ul>
							<span>CLIENT</span>
							<li>My school project</li>
						</ul>
						<ul>
							<span>MY ROLE</span>
							<li>Front-end developer, Back-end developer</li>
						</ul>
					</div>
				</div>
				<TheEndSection/>
				<MoreProjectShow/>
			</div>
		)
	}
}

export default InsuranceProject;