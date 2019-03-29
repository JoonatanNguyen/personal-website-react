import React from 'react';

import '../Stylesheet/UPayStylesheet.css';

import UPayVideoBackGround from '../Assets/videos/UPay-project-video-bg.mp4';
import UPayDemoVideo from '../Assets/videos/UPay-demo-video.mp4';
import UPayDemoPictSubscription from '../Assets/images/project_UPAY2.png';
import UPayDemoPicPersonalInfo from '../Assets/images/project_UPAY_personal_Info.png';

import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class UPayProject extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(<div className="upay-container">
			<div className="upay-project-top-section">
				<video autoPlay muted loop className="video-bg-upay">
					<source src={UPayVideoBackGround}/>
				</video>
				<div className="introduction-upay-project">
					<p>UPAY</p>
				</div>
			</div>
			<div className="upay-description">
				<h2>About the project</h2>
				<div className="upay-divider"/>
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
				<div className="sub-description-upay">
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
			<div className="upay-project-detail">
				<div className="upay-project-demo">
					<video autoPlay muted loop className="video-demo-upay">
						<source src={UPayDemoVideo}/>
					</video>
					<span className="upay-label description">Home page</span>
				</div>
				<div className="upay-project-demo">
					<img src={UPayDemoPictSubscription}/>
					<span className="upay-label subscription">Subscription page</span>
				</div>
				<div className="upay-project-demo">
					<img className="demo-personal-info" src={UPayDemoPicPersonalInfo}/>
					<span className="upay-label personal-info">Personal information page</span>
				</div>
			</div>
			<TheEndSection/>
			<MoreProjectShow/>
		</div>
		)
	}
}

export default UPayProject;