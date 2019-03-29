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
	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		})
	}

	render() {
		return(
			<div className="about-container">
				<div className="about-introduction-section">
					<div className="introduction-div">
						<div className="greeting-label">
							<span className = "line-decoration"/>
							<span>Hey, I'm</span>
							<span className = "line-decoration"/>
						</div>
						<p className="my-name">Minh Nguyen</p>
						<p className="my-slogan">A Software Developer who works with passion and creative mind.</p>
					</div>
				</div>
				<div className="about-me-section">
					<div className="brief-introduction-text">
					<span>
						I am a
						<span className="highlight-word"> fast </span>learner, a
						<span className="highlight-word"> person </span>who is willing to
						<span className="highlight-word"> learn </span> and
						<span className="highlight-word"> adapt </span>new things as well as the latest technology. A person, who is willing to step out of a
						<span className="highlight-word"> comfort zone </span>and
						<span className="highlight-word"> confront </span>with many
						<span className="highlight-word"> obstacles </span>in order to learn from my own mistakes and many
						<span className="highlight-word"> experiences </span>to become a better employee. Besides, with my
						<span className="highlight-word"> curiosity </span> and
						<span className="highlight-word"> innovative </span> I can bring out many creative ideas. A
						<span className="highlight-word"> developer </span> who is living with his passion in technologies,
						brainstorming for new solutions, and learning new experiences as well as teamwork experiences. A type of
						<span className="highlight-word"> colleague </span> who brings joys and friendliness to others
						and be positive in order to encourage them.
					</span>
					</div>
					<div className="profile-picture">
						<img src={ProfilePictureWinter} alt="profile"/>
					</div>
				</div>
				<div className="about-my-personal-work">
					<h2>My personal works</h2>
					<p>Have a look at my personal work</p>
					<MoreProjectShow/>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default About