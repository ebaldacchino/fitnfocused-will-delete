import React from 'react';
import Layout from '../components/layout';
import IframeResizer from 'iframe-resizer-react';
import '../styles/iframes.css';
const Signup = () => {
	return (
		<Layout title='Signup Today'>
			{/* <h1 className='glow no-margin-bottom'>signup today</h1> */}
			<section className='w100 grid-center no-padding-no-margin'>
				<IframeResizer
					src='https://fitnfocused.gymmasteronline.com/portal/signup?logo=0'
					style={{ width: '1px', minWidth: '100%' }}
					id='iFrameResizer0'
					className='gmiframe'
					title='Calendar'
				/>
			</section>
		</Layout>
	);
};

export default Signup;
