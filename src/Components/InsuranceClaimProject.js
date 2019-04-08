import React from 'react';

import '../Stylesheet/InsuranceProjectStylesheet.css';

import InsuranceVideoBackground from '../Assets/videos/Insurance-project-video-bg.mp4';
import InsuranceFront from '../Assets/images/Front_page_Insurance_claim.PNG';
import UserFrontView from '../Assets/images/User_Front_View.PNG';
import UserClaimView from '../Assets/images/User_Claims_View.PNG';
import CreateClaimView from '../Assets/images/User_Claims_View.PNG';
import AgentFrontView from'../Assets/images/Agent_Front_View.PNG';
import AgentClaimsView from '../Assets/images/Agent_Claims_View.PNG';
import AgentCustomerListView from '../Assets/images/Agent_Customer_View.PNG';
import AdminFrontView from '../Assets/images/Admin_Front_View.PNG';
import AdminCreateView from '../Assets/images/Admin_Create_Agent_View.PNG';
import AdminAgentListView from '../Assets/images/Admin_Agent_Lists_View.PNG';

import ProjectDescription from './ProjectDescription';
import ProjectDetail from './ProjectDetail';
import MoreProjectShow from './MoreProjectSection';

class InsuranceProject extends React.Component {
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
					<ProjectDescription
						descriptionContent={
							<div>
								<p>Insurance claim project is the web application from my school project which is about web application development.</p>
								<p>
									This project is aimed for user to claim their insurances. The project has three rolls: Client, Admin, Agent. The Admin is
									responsible for managing clients and agents, and the Agent is able to confirm the claim as well as reject claim from clients.
								</p>
								<p>
									This project is created by using C#, WebForm with MVC model.
								</p>
							</div>
						}
						labelColor="yellow"
						underlineColor="yellow"
						projectClient="My school project"
						myRoleInProject="Front-end developer, Back-end developer"
					/>
				</div>
				<div className="insurance-project-detail">
					<ProjectDetail
						projectDemoImage={InsuranceFront}
					/>
					<ProjectDetail
						projectDemoImage={UserFrontView}
					/>
					<ProjectDetail
						projectDemoImage={CreateClaimView}
					/>
					<ProjectDetail
						projectDemoImage={UserClaimView}
					/>
					<ProjectDetail
						projectDemoImage={AgentFrontView}
					/>
					<ProjectDetail
						projectDemoImage={AgentCustomerListView}
					/>
					<ProjectDetail
						projectDemoImage={AgentClaimsView}
					/>
					<ProjectDetail
						projectDemoImage={AdminFrontView}
					/>
					<ProjectDetail
						projectDemoImage={AdminAgentListView}
					/>
					<ProjectDetail
						projectDemoImage={AdminCreateView}
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

export default InsuranceProject;