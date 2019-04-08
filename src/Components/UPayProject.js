import React from 'react';

import '../Stylesheet/UPayStylesheet.css';

import UPayVideoBackGround from '../Assets/videos/UPay-project-video-bg.mp4';
import UPayDemoVideo from '../Assets/videos/UPay-demo-video.mp4';
import UPayDemoPictSubscription from '../Assets/images/project_UPAY2.png';
import UPayDemoPicPersonalInfo from '../Assets/images/project_UPAY_personal_Info.png';

import ProjectDescription from './ProjectDescription';
import ProjectDetail from './ProjectDetail';
import MoreProjectShow from './MoreProjectSection';

class UPayProject extends React.Component {
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
			<div className="upay-container">
			<div className="upay-project-top-section">
				<video autoPlay muted loop className="video-bg-upay">
					<source src={UPayVideoBackGround}/>
				</video>
				<div className="introduction-upay-project">
					<p>UPAY</p>
				</div>
			</div>
			<div className="upay-description">
				<ProjectDescription
					descriptionContent={
						<div>
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
						</div>
					}
					labelColor="blue"
					underlineColor="blue"
					projectClient="My school project"
					myRoleInProject="Front-end developer, Project manager"
				/>
			</div>
			<div className="upay-project-detail">
				<div className="upay-project-demo-video">
					<video autoPlay muted loop className="video-demo-upay">
						<source src={UPayDemoVideo}/>
					</video>
				</div>
				<ProjectDetail
					projectDemoImage={UPayDemoPictSubscription}
				/>
				<ProjectDetail
					projectDemoImage={UPayDemoPicPersonalInfo}
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

export default UPayProject;