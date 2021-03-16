import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import H2Divider from '../H2Divider';
import '../../styles/instagram.css';
const query = graphql`
	{
		allInstaNode {
			posts: nodes {
				id
				localFile {
					image: childImageSharp {
						gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				}
				caption
			}
		}
	}
`;
 
const Instagram = ({ view }) => {
	const {
		allInstaNode: { posts },
	} = useStaticQuery(query);
	return (
		<section className='instagram-section'>
			<H2Divider
				styleClass={`slide-in ${view[0] ? 'on-screen' : ''}`}
				title='instagram'
				description={
					<>
						Come join us on the journey at{' '}
						<a
							href='https://www.instagram.com/fitnfocusedpt'
							target='_blank'
							rel='noreferrer'>
							@fitnfocused
						</a>
						!
					</>
				}
			/>
			<article className='grid-center'>
				{posts.slice(0, 6).map((post, index) => {
					const { caption, id, localFile } = post;
					const image = getImage(localFile.image.gatsbyImageData);
					return (
						<a
							href='https://www.instagram.com/fitnfocusedpt/'
							target='_blank'
							rel='noreferrer'
							key={id}
							className={`slide-in ${view[index + 1] ? 'on-screen' : ''}`}>
							<GatsbyImage image={image} alt={caption} />
						</a>
					);
				})}
			</article>
		</section>
	);
};

export default Instagram;
