import React from 'react';
import { Link } from 'gatsby';
const ViewTimetable = ({ view }) => {
	return (
		<section className={`grid-center w100 slide-in ${view ? 'on-screen' : ''}`}>
			<h2 className='glow'>timetable</h2>
			<p className='text-center'>Open to see our complete timetable!</p>
			<Link to='/timetable'>
				<button className='btn'>view the timetable</button>
			</Link>
		</section>
	);
};

export default ViewTimetable;
