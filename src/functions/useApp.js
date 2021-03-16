import checkSlides from './checkSlideIn';
import useDebounce from './useDebounce'
const Function = () => {
	const {
		isHalfShown,
		windowWidth,
		windowHeight,
		offset,
		checkSlideIn,
	} = checkSlides();

	const slugify = (x) => x.toLowerCase().split(' ').join('-');

	return {
		isHalfShown,
		windowWidth,
		windowHeight,
		offset,
		checkSlideIn,
		slugify,
		useDebounce,
	};
};
export default Function;