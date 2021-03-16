import React from 'react';
import Layout from '../components/layout';
import useApp from '../functions/useApp';
import Form from '../components/cancellations/Form';
import useForm from '../functions/useForm';
import validate from '../functions/validateCancellations';
import SubmittedForm from '../components/contact/SubmittedForm';
import '../styles/contact.css'
const Cancellations = () => {
	const { isHalfShown } = useApp();

	const startValues = {
		firstname: '',
		surname: '',
		email: '',
		phone: '',
		type: 'Suspend',
		from: '',
		until: '',
		message: '',
	};
	const {
		serverState,
		setServerState,
		values,
		setValues,
		errors,
		handleSubmit,
		handleChange,
	} = useForm(validate, startValues);

	const handleBlur = () => {
		if (values.type === 'Suspend') return;
		setValues({
			...values,
			until: '',
		});
	};  
	return (
		<Layout title='Cancellations'>
			<h1 className='glow'>cancellations</h1>
			{/* <p className='text-center'>Got a question? Ask away'!</p> */}
			<section className='min-w35 no-margin-top grid-center'>
				<Form
					view={isHalfShown[0]}
					serverState={serverState}
					values={values}
					errors={errors}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					handleBlur={handleBlur}
				/>
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

export default Cancellations;
