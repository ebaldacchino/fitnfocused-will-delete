import React from 'react';
import Layout from '../components/layout';
import { FaPhone, FaMailBulk, FaInstagram } from 'react-icons/fa';
import useApp from '../functions/useApp';
import { graphql, useStaticQuery } from 'gatsby';
import parse from 'html-react-parser';
import '../styles/trainers.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const query = graphql`
	{
		allWpTrainer {
			trainers: nodes {
				title
				featuredImage {
					node {
						localFile {
							image: childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
					}
				}
				excerpt
				phone
				email
				instagram
			}
		}
	}
`;
const Trainers = () => {
	const { isHalfShown } = useApp();
	const {
		allWpTrainer: { trainers },
	} = useStaticQuery(query);
	return (
		<Layout title='Meet The Trainers'>
			<h1 className='glow'>meet the trainers</h1>
			<section className='no-margin-top row trainers'>
				{trainers.map((trainer, id) => {
					const {
						featuredImage,
						excerpt,
						phone,
						email,
						instagram,
						title,
					} = trainer;
					const image = getImage(
						featuredImage.node.localFile.image.gatsbyImageData
					);
					return (
						<article
							key={id}
							className={`slide-in ${
								isHalfShown[id] ? 'on-screen' : ''
							}`}>
							<h3>{title}</h3>
							<GatsbyImage image={image} alt={title} />
							<ul className='social-links'>
								<li>
									<a href={`tel:${phone}`} target='_blank' rel='noreferrer'>
										<FaPhone className='icon' />
									</a>
								</li>
								<li>
									<a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
										<FaMailBulk className='icon' />
									</a>
								</li>
								<li>
									<a href={instagram} target='_blank' rel='noreferrer'>
										<FaInstagram className='icon' />
									</a>
								</li>
							</ul>
							{parse(excerpt)}
						</article>
					);
				})}
			</section>
		</Layout>
	);
};

export default Trainers;
