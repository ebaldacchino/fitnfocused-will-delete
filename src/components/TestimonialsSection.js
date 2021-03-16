// import React, { useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import '../styles/testimonials.css';
// import {
// 	FaQuoteLeft,
// 	FaQuoteRight,
// 	FaChevronLeft,
// 	FaChevronRight,
// } from 'react-icons/fa';
// import useApp from '../functions/useApp';
// const query = graphql`
// 	{
// 		allGoogleReview(filter: { body: { regex: "/./g" } }) {
// 			nodes {
// 				source
// 				rating
// 				body
// 			}
// 		}
// 	}
// `;


// const Testimonials = () => {
// 	const {
// 		allGoogleReview: { reviews },
// 	} = useStaticQuery(query);

// 	const { windowWidth } = useApp();
//     return <section></section>
// 	const filteredReviews = reviews
// 		.map((review) => {
// 			if (!review.body) return review;
// 			const arr = review.body.split('(Originale)');
// 			if (arr.length > 1) {
// 				review.body = arr[arr.length - 1];
// 			}
// 			return review;
// 		})
// 		.filter(
// 			({ body, rating }) => 
// 				rating === 5 &&
// 				body.split(' ').length > 20 &&
// 				body.split(' ').length < 70
// 		);
// 	const [index, setIndex] = useState(0);
// 	const [slideHeight, setSlideHeight] = useState('auto');
// 	const [pageX, setPageX] = useState(0);
// 	const [isDown, setIsDown] = useState(false);

// 	var slider = document.querySelector('.slider');
// 	const numberOfSlides = filteredReviews.length;

// 	const prevSlide = () =>
// 		setIndex(index === 0 ? numberOfSlides - 1 : index - 1);
// 	const nextSlide = () =>
// 		setIndex(index === numberOfSlides - 1 ? 0 : index + 1);

// 	const handleScrollLeft = () => {
// 		const sliderWidth = slider.getBoundingClientRect().width;
// 		slider.scroll({
// 			left: index * sliderWidth,
// 			behavior: 'smooth',
// 		});
// 	};

// 	const pointerDown = (e) => {
// 		setIsDown(true);
// 		setPageX(e.pageX);
// 	};
// 	const pointerUp = (e) => {
// 		if (!isDown) return;
// 		const movement = e.pageX - pageX;
// 		movement > 15 ? prevSlide() : movement < -15 && nextSlide();
// 		setIsDown(false);
// 	};

// 	const getSlideHeight = () => {
// 		setSlideHeight('auto');

// 		setTimeout(() => {
// 			const boxHeight = Array.from(
// 				document.querySelectorAll('.quote-box')
// 			).reduce((highest, box) => {
// 				const thisBoxesHeight = box.scrollHeight;
// 				return highest > thisBoxesHeight ? highest : thisBoxesHeight;
// 			}, 0);
// 			setSlideHeight(boxHeight);
// 		}, 100);
// 	};
// 	useEffect(() => {
// 		getSlideHeight();
// 	}, [windowWidth]);

// 	useEffect(() => {
// 		if (!slider) return;
// 		handleScrollLeft();
// 	}, [index, windowWidth]);

// 	return (
// 		<>
// 			<section className='info testimonials-section'>
// 				<h2 className='glow'>Testimonials</h2>
// 				<article>
// 					<div
// 						className='arrow-container left'
// 						onClick={prevSlide}
// 						onKeyPress={prevSlide}>
// 						<FaChevronLeft className='icon' />
// 					</div>
// 					<div
// 						className='slider'
// 						onPointerDown={pointerDown}
// 						onPointerUp={pointerUp}>
// 						{filteredReviews.map(({ body, source }, id) => (
// 							<div
// 								key={id}
// 								className={`review-container ${
// 									index === id ? 'show' : 'hide'
// 								}`}>
// 								<div
// 									className='quote-box'
// 									style={{
// 										height: slideHeight,
// 									}}>
// 									<FaQuoteLeft className='quotes left' />
// 									<p>{body}</p>
// 									<FaQuoteRight className='quotes right' />
// 								</div>
// 								<div className='quote-box-arrow'></div>

// 								<p>
// 									{source
// 										.split(' ')
// 										.map(
// 											(name) => name.slice(0, 1).toUpperCase() + name.slice(1)
// 										)
// 										.join(' ')}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 					<div
// 						className='arrow-container right'
// 						onClick={nextSlide}
// 						onKeyPress={nextSlide}>
// 						<FaChevronRight className='icon' />
// 					</div>
// 				</article>
// 			</section>
// 		</>
// 	);
// };

// export default Testimonials;
