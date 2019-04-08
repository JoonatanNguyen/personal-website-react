import React from 'react';

import '../Stylesheet/ClinicProjectStylesheet.css';

import ClinicVideoBackground from '../Assets/videos/Clinic-project-bg-video.mp4';
import ClinicScreenMonitor from '../Assets/images/monitor-frame.png';

import ProjectDescription from './ProjectDescription';
import ProjectDetail from './ProjectDetail';
import MoreProjectShow from './MoreProjectSection';
import TheEndSection from './ProjectEndGreetings';

class ClinicScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = { moreProjects: [] }
	}

	componentDidMount() {
		window.scrollTo(0,0);
	}

	componentWillMount() {
		fetch('/moreProjects.json')
			.then(response => response.json())
			.then(data => this.setState({ moreProjects: data.data }));
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
					<ProjectDescription
						descriptionContent={
							<div>
								<p>
									This project is aimed to create a patients waiting screen, which shows whose name is going to be called next
									and which room they should go to see a doctor.
								</p>
								<p>
									This project is created by using React.js and working with real API calls. I have contributed with my brother in this
									project as to improve my knowledge about React.js and React redux.
								</p>
							</div>
						}
						labelColor="yellow"
						underlineColor="yellow"
						projectClient="Nancy Clinic"
						myRoleInProject="Front-end developer"
					/>
				</div>
				<div className="project-detail">
					<ProjectDetail
						projectDemoImage={ClinicScreenMonitor}
					/>
				</div>
				<div className="project-show-container">
					{this.state.moreProjects.map((moreProjects, id) => (
						<MoreProjectShow
							key={id}
							borderTemplateClassName={moreProjects.borderTemplateClassName}
							buttonBorderClassName={moreProjects.buttonBorderClassName}
							projectImageSrc={moreProjects.projectImageSrc}
							projectName={moreProjects.projectName}
							projectLink={moreProjects.projectLink}
						/>
					))}
				</div>
		</div>
		)
	}
}

export default ClinicScreen;