import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	{
		allWpMembership {
			memberships: nodes {
				title
				price
				shortDescription
				paymentFrequency
				excerpt
			}
		}
	}
`;
const MembershipSection = ({ view }) => {
	const {
		allWpMembership: { memberships },
	} = useStaticQuery(query); 
	return (
		<section className='grid-center w100'>
			<h2 className={`glow slide-in ${view[0] ? 'on-screen' : ''}`}>
				memberships
			</h2>
			<section className='row no-margin-top'>
				{memberships
					.filter((membership) => membership.paymentFrequency.toLowerCase() !== 'upfront')
					.slice(0, 3)
					.map((membership, index) => {
						const {
							title,
							price,
							shortDescription,
							paymentFrequency,
						} = membership;
						return (
							<article
								key={index}
								className={`service-card slide-in ${view[index + 1] ? 'on-screen' : ''}`}>
								<h3>{title}</h3>
								<div>
									<h1>${price}</h1>
									<h5>{paymentFrequency}</h5>
								</div>
								<h3>{shortDescription}</h3>
							</article>
						);
					})}
			</section>
			<Link to='/memberships'>
				<button className={`btn slide-in ${view[4] ? 'on-screen' : ''}`}>
					more membership info
				</button>
			</Link>
		</section>
	);
};
export default MembershipSection;
