import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, selectServiceForm, clearServiceForm } from './serviceFormSlice';
import { saveService } from './serviceListSlice';

export default function ServiceForm() {
	const service = useSelector(selectServiceForm);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const {name, value} = e.target;
		dispatch(changeServiceField({ name, value }));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveService(service));
    dispatch(clearServiceForm());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={service?.name} />
			<input name='price' onChange={handleChange} value={service?.price} />
			<button type='submit'>Save</button>
      {service.id && <button type='button' onClick={ () => dispatch(clearServiceForm()) } >Cancel</button>}
		</form>
	);
};
