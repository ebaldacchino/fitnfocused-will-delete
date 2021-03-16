import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import parse from 'html-react-parser';
import useApp from '../functions/useApp';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		allWpMembership {
			memberships: nodes {
				title
				excerpt 
			}
		}
	}
`;

const Memberships = () => {
	const {
		allWpMembership: { memberships },
	} = useStaticQuery(query);
	
	const reversedMemberships = memberships.reverse()

	const { isHalfShown } = useApp();
	return (
		<Layout title='Memberships'>
			<h1 className='glow'>Memberships</h1>
			<section className='info no-margin-top'>
				{reversedMemberships.map((membership, id) => {
					const { title, excerpt } = membership;
					return (
						<article
							key={id}
							className={`slide-in ${isHalfShown[id] ? 'on-screen' : ''}`}>
							<h4>{title}</h4>
							{parse(excerpt)}
						</article>
					);
				})}
			</section>
			<section
				className={` info grid-center slide-in ${
					isHalfShown[memberships.length] ? 'on-screen' : ''
				}`}>
				<h2 className='glow'>ready to sign up?</h2>
				<p className='text-center'>
					Join today to take full advantage of Geelong's best value offer!
				</p>
				<Link to='/signup'>
					<button className='btn'>get a membership</button>
				</Link>
			</section>
		</Layout>
	);
};

export default Memberships;
