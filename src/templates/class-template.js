import React from 'react';
import Layout from '../components/layout';
import parse from 'html-react-parser';
import GetSignup from '../components/getSignup';
import useApp from '../functions/useApp';
import Classes from '../components/ClassList';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/class-page.css';
const Page = ({ pageContext, path }) => {
	const {
		title,
		excerpt,
		featuredImage: {
			node: {
				localFile: {
					childImageSharp: { gatsbyImageData },
				},
			},
		},
	} = pageContext;
	const image = getImage(gatsbyImageData)
	const { isHalfShown } = useApp();
	return (
		<>
			<Layout
				title={title
					.split(' ')
					.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
					.join(' ')}>
				<h1 className='glow'>{title}</h1>
				<section className='about-class no-margin-top'>
				<GatsbyImage image={image} alt={title} /> 
					<article>{parse(excerpt)}</article>
				</section>
				<GetSignup
					view={isHalfShown[0]}
					title='$28 for 28 days'
					description={`Come try our ${title} class today!`}
					buttonText='try now'
				/>
				<Classes view={isHalfShown[1]} path={path} />
			</Layout>
		</>
	);
};

export default Page;
