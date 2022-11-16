import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, selectServiceList } from './serviceListSlice';
//import styles from './Service.module.css';

export default function ServiceList() {
  const serviceList = useSelector(selectServiceList);
  console.log(serviceList);
  const dispatch = useDispatch();  

  return (
    <ul>
      {serviceList?.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => dispatch(removeService(o.id))}>✕</button>
        </li>
      ))}
    </ul>
  );
}
