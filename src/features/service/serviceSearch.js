import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField, selectServiceSearch } from './serviceSearchSlice';
import { selectServiceForm } from './serviceFormSlice';
import Icon from '../../components/Icon';
import styles from './Service.module.css';

export default function ServiceSearch() {  
	const search = useSelector(selectServiceSearch);
  const serviceForm = useSelector(selectServiceForm);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(changeSearchField(e.target.value));
	};

  return (
    <div className={ styles.search }>
      <input type="search" name="search" value={ search } onChange={ handleChange } disabled={ serviceForm.id !== undefined } />
      <Icon icon="fa-search" />
    </div>
  );
}
