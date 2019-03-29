import React from 'react';

import '../Stylesheet/ClinicProjectStylesheet.css';

import ClinicVideoBackground from '../Assets/videos/Clinic-project-bg-video.mp4';
import ClinicScreenMonitor from '../Assets/images/monitor-frame.png';
import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class ClinicScreen extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return(
			<div className="clinic-project-container">
				<div className="clinic-project-top-section">
					<video autoPlay muted loop className="video-bg-clinic">
						<source src={ClinicVideoBackground} type="video/mp4"/>
					</video>
					<div className="introduction-clinic-project">
						<p>Clinic Screen</p>
					</div>
				</div>
				<div className="description">
					<h2>About the project</h2>
					<div className="divider"/>
					<p>Nancy clinic is a clinic for children. It is located in Hochiminhcity, Vietnam. </p>
					<p>
						This project is aimed to create a patients waiting screen, which shows whose name is going to be called next
						and which room they should go to see a doctor.
					</p>
					<p>
						This project is created by using React.js and working with real API calls. I have contributed with my brother in this
						project as to improve my knowledge about React.js and React redux.
					</p>
					<div className="sub-description">
						<ul>
							<span>CLIENT</span>
							<li>Nancy Clinic</li>
						</ul>
						<ul>
							<span>MY ROLE</span>
							<li>Front-end developer</li>
						</ul>
					</div>
				</div>
				<div className="project-detail">
					<img src={ClinicScreenMonitor} alt="monitor"/>
				</div>
				<TheEndSection/>
				<MoreProjectShow/>
		</div>
		)
	}
}

export default ClinicScreen;