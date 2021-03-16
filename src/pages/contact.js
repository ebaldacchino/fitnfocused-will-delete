import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import Map from '../components/contact/Map';
import Form from '../components/contact/ContactForm';
import useForm from '../functions/useForm';
import validateInfo from '../functions/validateInfo';
import SubmittedForm from '../components/contact/SubmittedForm';
import '../styles/contact.css';
const Contact = () => {
	const { isHalfShown } = useApp();

	const startValues = {
		name: '',
		email: '',
		message: '',
		phone: '',
	};
	const {
		serverState,
		setServerState,
		values,
		errors,
		handleSubmit,
		handleChange,
	} = useForm(validateInfo, startValues);
	return (
		<Layout title='Contact Us'>
			<h1 className='glow'>get in touch</h1>
			{/* <p className='text-center'>Got a question? Ask away'!</p> */}
			<section className='no-margin-top grid-center col2'>
				<Form
					view={isHalfShown[0]}
					serverState={serverState}
					values={values}
					errors={errors}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<Map view={isHalfShown[1]} />
			</section>
			{serverState.submitted && (
				<SubmittedForm
					closeSection={() =>
						setServerState({ ...serverState, submitted: false })
					}
				/>
			)}
		</Layout>
	);
};

export default Contact;
