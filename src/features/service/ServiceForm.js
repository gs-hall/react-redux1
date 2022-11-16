import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, selectServiceForm } from './serviceFormSlice';
import { addService } from './serviceListSlice';

export default function ServiceForm() {
	const service = useSelector(selectServiceForm);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const {name, value} = e.target;
    console.log('call dispatch', name, value);
		dispatch(changeServiceField({ name, value }));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addService(service));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={service?.name} />
			<input name='price' onChange={handleChange} value={service?.price} />
			<button type='submit'>Save</button>
		</form>
	);
};
