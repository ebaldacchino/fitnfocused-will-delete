import React from 'react';
import heroVideoWebm from '../../images/fitnfocused-trailer-compressed.webm';
import heroVideoMp4 from '../../images/fitnfocused-trailer-compressed.mp4';
import Logo from '../../images/fitnfocused-transparent.svg';
import useApp from '../../functions/useApp';
import { FaPlay, FaPause } from 'react-icons/fa';
import '../../styles/hero.css';

const HeroSection = () => {
	const { offset } = useApp();
	const [isPlay, setIsPlay] = React.useState(false);
	
	React.useEffect(() => {
		const video = document.querySelector('video');
		isPlay ? video.play() : video.pause();
	}, [isPlay]);
	return (
		<section className='hero-container no-margin-top'>
			<video
				loop
				muted
				preload='metadata'
			>
				<source src={heroVideoWebm} type='video/webm' />
				<source src={heroVideoMp4} type='video/mp4' />
			</video>
			<article className='hero-overlay'>
				<img
					className={`hero-img ${offset === 0 ? 'show' : ''}`}
					src={Logo}
					alt="Fit 'n' Focused Logo"
				/>
				<button
					className='grid-center'
					onClick={() => setIsPlay(!isPlay)}
					onKeyPress={() => setIsPlay(!isPlay)}
					aria-label='Play/Pause Button'>
					{isPlay ? <FaPause /> : <FaPlay />}
				</button>
			</article>
		</section>
	);
};
export default HeroSection;
