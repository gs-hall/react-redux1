import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../../components/Icon';
import { removeService, selectServiceList } from './serviceListSlice';
import { setServiceForm, selectServiceForm } from './serviceFormSlice';
import { selectServiceSearch } from './serviceSearchSlice';
import styles from './Service.module.css';
import classnames from "classnames";

export default function ServiceList() {
  const serviceList = useSelector(selectServiceList);
  const serviceForm = useSelector(selectServiceForm);
  const search = useSelector(selectServiceSearch).toLowerCase();

  const dispatch = useDispatch();

  return (
    <ul>
      {serviceList?.filter(x => search === undefined || x.name.toLowerCase().includes(search)).map(o => (
        <li key={ o.id } className={ classnames(styles.row, { [styles.edited]: serviceForm?.id === o.id }) } >
          <span className={ styles.name }>{ o.name }</span>
          <span className={ styles.price }>{ o.price }</span>
          <div className={ styles.buttons }>
            {
              !serviceForm?.id &&
                <>
                  <Icon icon="fa-pencil" className={ styles.button } onClick={ () => dispatch(setServiceForm(o)) } />
                  <Icon icon="fa-trash" className={ classnames(styles.button, styles.alert) } onClick={ () => dispatch(removeService(o.id)) } />
                </>
            }
          </div>
        </li>
      ))}
    </ul>
  );
}

