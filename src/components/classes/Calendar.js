import React from 'react';
import IframeResizer from 'iframe-resizer-react'; 

const Calendar = () => {
	const [isTimetable, setIsTimetable] = React.useState(false);
	return (
		<section className='w100 grid-center no-margin-top'>
			<h2 className='glow'>the timetable</h2>
			{!isTimetable && (
				<>
					<p className='text-center'>Open to see our complete timetable!</p>
					<button
						className={`btn ${isTimetable ? 'no-margin-bottom' : ''}`}
						onClick={() => setIsTimetable(!isTimetable)}>
						{isTimetable ? 'hide' : 'view'} the timetable
					</button>{' '}
				</>
			)}
			{isTimetable && (
				<IframeResizer
					src='https://fitnfocused.gymmasteronline.com/portal/classcalendar?logo=0'
					style={{ width: '1px', minWidth: '100%' }}
					id='iFrameResizer0'
					className='gmiframe'
					title='Calendar'
				/>
			)}
		</section>
	);
};
export default Calendar;