import React from 'react';
import { Link } from 'gatsby';
const GetSignup = ({ view, title, description, buttonText }) => {
	return (
		<section className={`grid-center slide-in ${view ? 'on-screen' : ''}`}>
			<h2 className='glow'>{title}</h2>
			<p className='text-center'>{description}</p>
			<Link to='/signup'>
				<button className='btn'>{buttonText}</button>
			</Link>
		</section>
	);
};

export default GetSignup;
