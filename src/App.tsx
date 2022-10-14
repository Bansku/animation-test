import React from 'react';
import './App.css';
import Lottie from 'lottie-react';
import sustainabilityGraph from './sustainability-graph.json';

function App() {
  return (
    <div className='App'>
      <Lottie animationData={sustainabilityGraph} />;
    </div>
  );
}

export default App;
