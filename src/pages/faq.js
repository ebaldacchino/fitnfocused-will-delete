import React from 'react';
import Layout from '../components/layout';
import faqData from '../constants/faq';
import AccordionItem from '../components/faq/AccordionItem';
import useApp from '../functions/useApp';
import '../styles/faq.css'
const defaultFalse = faqData.map(() => false);
const defaultZero = faqData.map(() => 0);
const Faq = () => {
	const [isShown, setIsShown] = React.useState(defaultFalse);
	const [panelHeights, setPanelHeights] = React.useState(defaultZero);
	const { windowHeight, windowWidth } = useApp();
	const handleAccordion = (id) => {
		const values = faqData.map((faq, index) => id === index && !isShown[index]);
		setIsShown(values);
	};

	const getPanelHeights = () => {
		setPanelHeights(faqData.map((faq) => '100%'));
		setTimeout(getPanelScrollHeights, 100);
	};

	const getPanelScrollHeights = () => {
		const panels = Array.from(document.querySelectorAll('.panel'));
		const heights = panels.map((panel) => panel.scrollHeight);
		setPanelHeights(heights);
	};
	React.useEffect(getPanelHeights, [windowHeight, windowWidth]);

	return (
		<Layout title='Frequently Asked Questions'>
			<h1 className='glow'>FAQ</h1>
			<section className='no-margin-top'>
				{faqData.map((faq, id) => {
					return (
						<AccordionItem
							{...faq}
							key={id}
							isShown={isShown[id]}
							handleAccordion={() => handleAccordion(id)}
							panelHeight={panelHeights[id]}
						/>
					);
				})}
			</section>
		</Layout>
	);
};

export default Faq;
