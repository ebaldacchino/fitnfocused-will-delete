import React from 'react'; 
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import TryNow from '../components/getSignup';
import { graphql, useStaticQuery } from 'gatsby';
import ClassList from '../components/ClassList';
import ViewTimetable from '../components/ViewTimetable';

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
const Classes = ({ path }) => {
	const {
		allWpClass: { classes },
	} = useStaticQuery(query);

	const { isHalfShown } = useApp();
	const description = `At Fit 'n' Focused, no two classes are the same. Our team of amazing coaches will motivate and inspire you to bring out the best in you. Come try any of our classes including${classes.map(
		(session, id) =>
			` ${id === classes.length - 1 ? 'and ' : ''}${session.title}`
	)}!`;

	return (
		<Layout title='Classes' description={description}>
			<h1 className='glow'>Classes</h1>
			<ClassList view={isHalfShown[0]} path={path} />
			<ViewTimetable view={isHalfShown[1]} />
			<TryNow
				view={isHalfShown[2]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
			{/* <ClassInfo view={isHalfShown.slice(1)} classes={classes} /> */}
		</Layout>
	);
};

export default Classes;
