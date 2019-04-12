import React from 'react';

import './TrainProjectStylesheet.css';

import TrainProjectVideoBackground from '../../Assets/videos/Train-project-bg-video.mp4';
import TrainFront from '../../Assets/images/Front_page_TR_App.PNG';
import LongDistanceChoose from '../../Assets/images/Long_distance_choose_page.PNG';
import LongDistanceShow from '../../Assets/images/Long_Distance_Show_1.png';
import CommuterChoose from '../../Assets/images/Commuter_choose_page.PNG';
import CommuterShow from '../../Assets/images/Commuter_Show.png';

import ProjectDesctiption from '../ProjectDescription/ProjectDescription';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import MoreProjectShow from '../MoreProjectSection/MoreProjectSection';

class Train extends React.Component {
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
					<ProjectDesctiption
						descriptionContent={
							<div>
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
							</div>
						}
						labelColor="yellow"
						underlineColor="yellow"
						projectClient="My school project"
						myRoleInProject="Front-end developer, Project manager"
					/>
				</div>
				<div className="train-app-detail">
					<ProjectDetail
						projectDemoImage={TrainFront}
					/>
					<ProjectDetail
						projectDemoImage={LongDistanceChoose}
					/>
					<ProjectDetail
						projectDemoImage={LongDistanceShow}
					/>
					<ProjectDetail
						projectDemoImage={CommuterChoose}
					/>
					<ProjectDetail
						projectDemoImage={CommuterShow}
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

export default Train;