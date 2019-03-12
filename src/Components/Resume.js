import React from 'react';

import '../Stylesheet/ResumeStylesheet.css';
import ResumeBackground from '../Assets/images/Resume-background.jpg';
import LinkedInLogo from "../Assets/images/linkedin-logo.jpg";
import MailLogo from "../Assets/images/email-logo.jpg";

const Resume = () => (
	<div className='resume-container'>
		<div className='resume-top-section'>
			<img src={ResumeBackground} alt='resume background'/>
			<h1>More clear about myself</h1>
			<div className='resume-div-smallText'>
				<span className = 'line-decoration-resume'/>
				<span>Find out what is my skill and my background</span>
				<span className = 'line-decoration-resume'/>
			</div>
			<div className='button-download-CV'>
				<span>Download my CV</span>
			</div>
		</div>
		<div className='skill-education-section'>
			<div className='skill'>
				<h2>Skills & Expertise</h2>
				<div className='sub-div'>
					<p>TECHNOLOGIES:</p>
					<ul>
						<li>HTML5/CSS3</li>
						<li>JavaScript/jQuery</li>
						<li>React.js</li>
						<li>Version control (Git)</li>
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
				<div className='sub-div'>
					<p>EXPERIENCE WITH:</p>
					<ul>
						<li>Web development</li>
						<li>AJAX</li>
						<li>Agile Methodology</li>
						<li>Photoshop</li>
					</ul>
					<p className='under-field-sub-div'>LANGUAGE SKILL:</p>
					<ul>
						<li>Native Vietnamese speaker</li>
						<li>Fluently in English</li>
					</ul>
				</div>
			</div>
			<span className='line-separate'/>
			<div className='education'>
				<h2>Education</h2>
				<div className='sub-education-div'>
					<p>Lahti University of Applied Sciences(Finland) - Bachelor's degree</p>
					<span className='specific-info'>Business Information Technology | 2017- PRESENT</span>
					<br/>
					<span>Passion in programming and develop to be a web developer</span>
					<p className='under-field-sub-education'>Tran Dai Nghia High School for The Gifted</p>
					<span className='specific-info'>High School | 2014 - 2017</span>
					<br/>
					<span>Specialized in English</span>
				</div>
			</div>
		</div>
		<div className='footer'>
			<div className='footer-text'>
				<span className = 'line-decoration-footer'/>
				<span>Get in touch through social media</span>
				<span className = 'line-decoration-footer'/>
			</div>
			<div className='logo-connect'>
				<img className='LinkedInLogo' src={LinkedInLogo} alt='LinkedIn logo'/>
				<img className='EmailLogo' src={MailLogo} alt='E-mail logo'/>
			</div>
		</div>
	</div>
);

export default Resume;