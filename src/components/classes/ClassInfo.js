import React from 'react';
import parse from 'html-react-parser';
const ClassInfo = ({ view, classes }) => {
	return (
		<section className='info'>
			<h2 className={`glow slide-in ${view[0] ? 'on-screen' : ''}`}>
				class information
			</h2>
			{classes.map((session, id) => {
				const { title, excerpt, slug } = session;
				return (
					<article
						id={slug}
						className={`slide-in ${view[id + 1] ? 'on-screen' : ''}`}
						key={id}>
						<h3>{title}</h3>
						{parse(excerpt)}
					</article>
				);
			})}
		</section>
	);
};
export default ClassInfo;
