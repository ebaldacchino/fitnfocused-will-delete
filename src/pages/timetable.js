import React from 'react';
import Layout from '../components/layout';
import IframeResizer from 'iframe-resizer-react';
import GetSignup from '../components/getSignup';
import useApp from '../functions/useApp';
import ClassList from '../components/ClassList';
import '../styles/iframes.css';
const Timetable = ({ path }) => {
	const { isHalfShown } = useApp();
	return (
		<Layout title='Timetable'>
			<section className='w100 grid-center no-margin-top'>
				<IframeResizer
					src='https://fitnfocused.gymmasteronline.com/portal/classcalendar?logo=0'
					style={{ width: '1px', minWidth: '100%' }}
					id='iFrameResizer0'
					className='gmiframe'
					title='Calendar'
				/>
			</section>
			<GetSignup
				view={isHalfShown[0]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>
			<ClassList view={isHalfShown[1]} path={path} />
		</Layout>
	);
};

export default Timetable;
