import React from 'react';
import Layout from '../components/layout';
const Error = () => {
	return (
		<Layout title='Page Not Found'>
			<h1 className='glow'>page not found</h1>
			<section className="info no-margin-top">
				<p className="text-center">Oops!!! The link you clicked on doesn't appear to exist. Please use the links above to find what you seek!</p>
			</section>
		</Layout>
	);
};

export default Error