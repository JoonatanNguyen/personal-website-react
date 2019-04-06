import React from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css';

import '../Stylesheet/AboutStylesheet.css';

import ProfilePictureWinter from '../Assets/images/profile-picture-winter.jpg';

import MoreProjectShow from './MoreProjectSection';
import Footer from'./Footer';


class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = { moreProjects: [] }
	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		})
	}

	componentWillMount() {
		fetch('/moreProjects.json')
			.then(response => response.json())
			.then(data => this.setState({ moreProjects: data.data }));
	}

	render() {
		return(
			<div className="about-container">
				<div className="about-introduction-section">
					<div className="introduction-div">
						<div className="greeting-label">
							<span className = "line-decoration"/>
							<span>Let's discover who I am</span>
							<span className = "line-decoration"/>
						</div>
						<p className="my-label">passion and personality</p>
					</div>
				</div>
				<div className="about-me-section">
					<div className="brief-introduction-text">
					<span>
						I am a
						<span className="highlight-word"> fast </span>learner, a
						<span className="highlight-word"> person </span>who is willing to
						<span className="highlight-word"> adapt </span>new things as well as the up to date technology. A person, who is willing to step out of a
						<span className="highlight-word"> comfort zone </span>and
						<span className="highlight-word"> confront </span>with many
						<span className="highlight-word"> obstacles </span>in order to know how to cope with many different problems and learn new
						<span className="highlight-word"> experiences </span>to become a better employee. Having
						<span className="highlight-word"> ambitious </span> and
						<span className="highlight-word"> innovative</span> personality, I can brainstorm and bring out new solutions. A
						<span className="highlight-word"> developer </span> who is living with his passion in technologies and create a website with
						high efficiency and high quality. A type of
						<span className="highlight-word"> colleague </span> who is a good team player, brings joys and friendliness to others
						and be positive in order to encourage them. Always
						<span className="highlight-word"> develop </span> myself and
						<span className="highlight-word"> be the best </span> as I can at work as well as in leisure time.
					</span>
					</div>
					<div className="profile-picture">
						<img src={ProfilePictureWinter} alt="profile"/>
					</div>
				</div>
				<div className="about-my-personal-work">
					<h2>My personal works</h2>
					<p>Have a look at my personal work</p>
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
				<Footer/>
			</div>
		)
	};
}

export default About