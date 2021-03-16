import React from 'react';
const CancellationsForm = ({
	serverState,
	values,
	errors,
	handleSubmit,
	handleChange,
	handleBlur,
	view,
}) => {
	return (
		<form
			className={`form w100 slide-in ${view ? 'on-screen' : ''}`}
			noValidate
			onSubmit={handleSubmit}>
			<label htmlFor='firstname'>First Name</label>
			<input
				className={
					!serverState.submitting ? '' : errors.firstname ? 'error' : 'success'
				}
				type='text'
				name='firstname'
				placeholder='e.g. John'
				value={values.firstname}
				onChange={handleChange}
			/>
			{serverState.submitting && errors.firstname && (
				<small>{errors.firstname}</small>
			)}
			<label htmlFor='surname'>Surname</label>
			<input
				className={
					!serverState.submitting ? '' : errors.surname ? 'error' : 'success'
				}
				type='text'
				name='surname'
				placeholder='e.g. Doe'
				value={values.surname}
				onChange={handleChange}
			/>
			{serverState.submitting && errors.surname && (
				<small>{errors.surname}</small>
			)}
			<label htmlFor='email'>Email</label>
			<input
				type='email'
				name='email'
				className={
					!serverState.submitting ? '' : errors.email ? 'error' : 'success'
				}
				value={values.email}
				placeholder='e.g. johndoe@gmail.com'
				onChange={handleChange}
			/>
			{serverState.submitting && errors.email && <small>{errors.email}</small>}
			<label htmlFor='phone'>Phone</label>
			<input
				type='phone'
				name='phone'
				className={
					!serverState.submitting ? '' : errors.phone ? 'error' : 'success'
				}
				value={values.phone}
				placeholder='e.g. 0499 999 999'
				onChange={handleChange}
			/>
			{serverState.submitting && errors.phone && <small>{errors.phone}</small>}
			{/* <label htmlFor='type'>Suspend or Cancel</label> */}
			<div className='form-control'>
				<input
					type='radio'
					name='type'
					value='Suspend'
					checked={(values.type === 'Suspend')}
					onChange={handleChange}
					onBlur={handleBlur}
				/>{' '}
				<label htmlFor='suspend'>Suspend</label>
			</div>
			<div className='form-control'>
				<input
					type='radio'
					name='type'
					value='Cancel'
					checked={(values.type === 'Cancel')}
					onChange={handleChange}
					onBlur={handleBlur}
				/>{' '}
				<label htmlFor='cancel'>Cancel</label>
			</div>

			{/* <select
				name='type'
				className={
					!serverState.submitting ? '' : errors.type ? 'error' : 'success'
				}
				value={values.type}
				onChange={handleChange}
				onBlur={handleBlur}>
				<option value=''>Select an option</option>
				<option value='Suspend'>Suspend my membership</option>
				<option value='Cancel'>Cancel my membership</option>
			</select> */}
			{serverState.submitting && errors.type && <small>{errors.type}</small>}
			<label htmlFor='from'>Start Date</label>
			<input
				type='date'
				name='from'
				className={
					!serverState.submitting ? '' : errors.from ? 'error' : 'success'
				}
				value={values.from}
				onChange={handleChange}
			/>
			{serverState.submitting && errors.from && <small>{errors.from}</small>}
			{values.type === 'Suspend' && (
				<>
					<label htmlFor='until'>End Date</label>
					<input
						type='date'
						name='until'
						className={
							!serverState.submitting ? '' : errors.until ? 'error' : 'success'
						}
						value={values.until}
						onChange={handleChange}
					/>
					{serverState.submitting && errors.until && (
						<small>{errors.until}</small>
					)}
				</>
			)}
			<label htmlFor='message'>Additional Information</label>
			<textarea
				name='message'
				className={
					!serverState.submitting ? '' : errors.message ? 'error' : 'success'
				}
				placeholder='Please leave your message here...'
				value={values.message}
				onChange={handleChange}
				cols='30'
				rows='10'
			/>
			{serverState.submitting && errors.message && (
				<small>{errors.message}</small>
			)}
			<button className='btn'>send</button>
		</form>
	);
};
export default CancellationsForm;
