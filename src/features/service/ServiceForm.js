import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, selectServiceForm, clearServiceForm } from './serviceFormSlice';
import { saveService } from './serviceListSlice';
import styles from './Service.module.css';

export default function ServiceForm() {
	const service = useSelector(selectServiceForm);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(changeServiceField({ name, value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveService(service));
    dispatch(clearServiceForm());
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input name='name' value={service?.name} onChange={ handleChange } />
			<input name='price' value={service?.price} onChange={ handleChange } />
			<button type='submit'>Save</button>
      {service.id && <button type='button' onClick={ () => dispatch(clearServiceForm()) } >Cancel</button>}
		</form>
	);
};
