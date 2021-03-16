import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import TryNow from '../components/getSignup';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
	{
		allWpProgram {
			programs: nodes {
				title
				excerpt
				slug
			}
		}
	}
`;
const Programs = () => {
	const {
		allWpProgram: { programs },
	} = useStaticQuery(query);

	const { isHalfShown } = useApp();
	const description = `At Fit 'n' Focused, no two programs are the same. Our team of amazing coaches will motivate and inspire you to bring out the best in you. Come try any of our programs including${programs.map(
		(session, id) =>
			` ${id === programs.length - 1 ? 'and ' : ''}${session.title}`
	)}!`;
	return (
		<Layout title='Programs' description={description}>
			<h1 className='glow'>Programs</h1>
			<section
				className={`slide-in ${
					isHalfShown[0] ? 'on-screen' : ''
				} no-margin-top w100 grid-center classes-section`}>
				<p className='text-center'>
					Feel free to click on any of our programs below to find out more!
				</p>
				<ul className='col2'>
					{programs.map(({ title, slug }, id) => {
						return (
							<li key={id}>
								<Link to={`/fitness-programs/${slug}`}>{title}</Link>
							</li>
						);
					})}
				</ul>
				{/* <Link to='/timetable'>
						<button className='btn'>see the timetable</button>
					</Link> */}
			</section>
			<TryNow
				view={isHalfShown[0]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
		</Layout>
	);
};

export default Programs;
