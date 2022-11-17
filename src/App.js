import React from 'react';
import ServiceForm from './features/service/ServiceForm';
import ServiceList from './features/service/ServiceList';
import ServiceSearch from './features/service/serviceSearch';
import styles from './features/service/Service.module.css';

function App() {
  return (
    <div className={styles.app}>
      <ServiceForm />
      <ServiceSearch />
      <ServiceList />
    </div>
  );
};

export default App;
