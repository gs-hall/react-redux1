import React from 'react';
import ServiceForm from './features/service/ServiceForm';
import ServiceList from './features/service/ServiceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ServiceForm />
        <ServiceList />
      </header>
    </div>
  );
};

export default App;
