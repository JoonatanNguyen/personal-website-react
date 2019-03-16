import React from 'react';

import '../Stylesheet/ContactStylesheet.css';

const Contact = () => (
	<div className='contact-container'>
		<div className='picture-me'/>
		<div className='contact-form'>
			<div className='contact-content'>
				<h1>Contact me:</h1>
				<div className='contact-text'>
					<p><span className='text-decoration'>Name:</span> Nguyen Quang Minh</p>
					<p><span className='text-decoration'>Nickname:</span> Joonatan</p>
					<address>
						<span className='text-decoration'>Email:</span>
						<a href='minhnguyen181199@gmail.com'> minhnguyen181199@gmail.com</a>
					</address>
					<p>
						<span className='text-decoration'>LinkedIn:</span>
						<a href='https://www.linkedin.com/in/minh-nguyen-a0315b151/'> My LinkedIn</a>
					</p>
					<p>
						<span className='text-decoration'>GitHub:</span>
						<a href='https://github.com/JoonatanNguyen'> My GitHub account</a>
					</p>
				</div>
			</div>
		</div>
		<div className='contact-form-layer'/>
	</div>
);

export default Contact;