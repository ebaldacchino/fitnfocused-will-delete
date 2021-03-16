import { useState, useEffect } from 'react';
import checkWindowSize from './checkWindowSize';

const Function = () => {
	const [isHalfShown, setIsHalfShown] = useState([]);
	const { offset, windowWidth, windowHeight } = checkWindowSize();
	const checkSlideIn = (e) => {
		const sliderItems = Array.from(document.querySelectorAll('.slide-in'));
		const result = sliderItems.map((item) => {
			const itemBottom = item.offsetTop + item.clientHeight;
			const midwayPoint = itemBottom - item.clientHeight * 0.75;
			const slideInAt = window.scrollY + window.innerHeight;
			const isHalfShown = slideInAt > midwayPoint;
			
			return isHalfShown;
		});
		setIsHalfShown(result);
	};
	useEffect(checkSlideIn, [windowWidth, windowHeight]);
	useEffect(() => {
		window.addEventListener('scroll', checkSlideIn);
		return () => {
			window.removeEventListener('scroll', checkSlideIn);
		};
	}, []);
	return { offset, isHalfShown, windowWidth, windowHeight, checkSlideIn };
};

export default Function