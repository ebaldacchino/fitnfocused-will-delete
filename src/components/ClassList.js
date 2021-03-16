import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/class-lists.css';
const query = graphql`
	{
		allWpClass {
			classes: nodes {
				title
				excerpt
				slug
			}
		}
	}
`;
const ClassList = ({ view, path }) => { 
	const {
		allWpClass: { classes },
	} = useStaticQuery(query);
	return (
		<>
			<section
				className={`slide-in ${view ? 'on-screen' : ''} ${
					path === '/classes/' ? 'no-margin-top' : ''
				} w100 grid-center classes-section`}>
				{path !== '/classes/' && <h2 className='glow'>classes</h2>}
				<p className='text-center'>
					Feel free to click on any of our group fitness classes below to find
					out more!
				</p>
				<ul className='col2'>
					{classes.map(({ title, slug }, id) => {
						return (
							<li key={id}>
								<Link to={`/fitness-classes/${slug}`}>{title}</Link>
							</li>
						);
					})}
				</ul>
				{!['/classes/', '/timetable/'].find((string) => string === path) && (
					<Link to='/timetable'>
						<button className='btn'>see the timetable</button>
					</Link>
				)}
			</section>
		</>
	);
};
export default ClassList;
