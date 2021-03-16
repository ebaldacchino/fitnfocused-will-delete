import React from 'react';
import Layout from '../components/layout';
import HeroSection from '../components/home/HeroSection';
import Classes from '../components/ClassList';
import Memberships from '../components/home/Memberships';
import parse from 'html-react-parser';
import useApp from '../functions/useApp';
import TryNow from '../components/getSignup';
import Instagram from '../components/home/Instagram';
// import Testimonials from '../components/TestimonialsSection';

const aboutText = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor culpa, autem, quae earum non, veritatis modi amet omnis nemo deserunt laborum voluptates animi voluptatibus cumque itaque illo. Natus qui fugiat neque eligendi unde sapiente aut nesciunt tempora excepturi rerum.</p>


<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, possimus totam. Odit commodi ab accusamus minima dolore, impedit est magni eum architecto quas suscipit repellendus laborum placeat consequatur qui ut!</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad animi repellat eaque culpa asperiores, laborum assumenda id. Distinctio iusto temporibus porro autem praesentium facere laboriosam quae ad accusantium natus eveniet architecto non asperiores, numquam cum tempora nostrum fugiat assumenda.</p>`;

const HomePage = ({ path }) => {
	const { isHalfShown } = useApp();
	const [readMore, setReadMore] = React.useState(false);
	const aboutFull = aboutText;
	const aboutShortened = aboutFull.split(' ').slice(0, 50).join(' ') + '...';
	return (
		<Layout
			path={path}
			// title='Home'
		>
			<HeroSection />
			<TryNow
				view={isHalfShown[0]}
				title='$28 for 28 days'
				description="Come try Geelong's best value offer today!"
				buttonText='try now'
			/>

			<section
				className={`grid-center info slide-in ${
					isHalfShown[1] ? 'on-screen' : ''
				}`}>
				<h2 className='glow'>about</h2>
				<article>{readMore ? parse(aboutFull) : parse(aboutShortened)}</article>
				<button className='btn' onClick={() => setReadMore(!readMore)}>
					read {readMore ? 'less' : 'more'}
				</button>
			</section>
			<Classes view={isHalfShown[2]} path={path} />
			<Memberships view={isHalfShown.slice(3, 8)} />
			{/* <Testimonials view={isHalfShown[8]} /> */}
			<Instagram view={isHalfShown.slice(8)} />
		</Layout>
	);
};

export default HomePage;
