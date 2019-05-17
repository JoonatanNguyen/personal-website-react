import React from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css';

import './ResumeStylesheet.css';

import Footer from '../Footer/Footer';

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		AOS.init({
			duration: 1500
		})
	}

	render() {
		return (
			<div className="resume-container">
				<div className="resume-top-section">
					<div className="resume-introduction-div">
						<h1>More clear about myself</h1>
						<div className="resume-div-smallText">
							<span className = "line-decoration-resume"/>
							<span>Find out what is my skill and my background</span>
							<span className ="line-decoration-resume"/>
						</div>
						<div className="button-download-CV">
							<span>Download my CV</span>
						</div>
					</div>
				</div>
				<div className="skill-education-section">
					<div className="resume-detail skill">
						<h2>Skills & Expertise</h2>
						<div className="sub-skill-div">
							<p>TECHNOLOGIES:</p>
							<ul>
								<li>HTML5/CSS3</li>
								<li>JavaScript/jQuery</li>
								<li>React.js</li>
								<li>Version control (Git)</li>
								<li>Node.js/Express.js</li>
								<li>MySQL, MSSQL</li>
								<li>C#, ASP.NET</li>
								<li>PHP</li>
								<li>Bootstrap</li>
							</ul>
							<br/>
							<p>BUSINESS:</p>
							<ul>
								<li>Accounting</li>
								<li>Logistics</li>
								<li>Customer marketing</li>
								<li>Human resources management</li>
								<li>Business law</li>
								<li>Fundamental Economics</li>
							</ul>
						</div>
						<div className="sub-skill-div">
							<p>EXPERIENCE WITH:</p>
							<ul>
								<li>Web development</li>
								<li>AJAX</li>
								<li>Agile Methodology</li>
								<li>Photoshop</li>
							</ul>
							<p className="under-field-sub-div">LANGUAGE SKILL:</p>
							<ul>
								<li>Native Vietnamese speaker</li>
								<li>Fluent in English</li>
							</ul>
						</div>
					</div>
					<div className="resume-detail education">
						<h2>Education</h2>
						<div className="education-div">
							<div className="sub-education-div">
								<p>Lahti University of Applied Sciences(Finland) - Bachelor's degree</p>
								<span className="specific-info">Business Information Technology | 2017- PRESENT</span>
								<br/>
								<span className="education-description">Passion in programming and develop to be a web developer</span>
							</div>
							<div className="sub-education-div">
								<p className="under-field-sub-education">Tran Dai Nghia High School for The Gifted</p>
								<span className="specific-info">High School | 2014 - 2017</span>
								<br/>
								<span className="education-description">Specialized in English</span>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Resume;