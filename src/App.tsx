import React from 'react';
import './App.css';
import Lottie from 'lottie-react';
import sustainabilityGraph from './sustainability-graph.json';
import OPKaupunki from './OP-kaupunki.json';

const style = {
  height: '50vh',
};

const AnimationTest = () => {
  return (
    <div className='App'>
      <div>
        <Lottie
          animationData={sustainabilityGraph}
          style={style}
          autoPlay
          loop={false}
        />
        ;
      </div>
      <div>
        <Lottie animationData={OPKaupunki} style={style} />;
      </div>
    </div>
  );
};

export default AnimationTest;
