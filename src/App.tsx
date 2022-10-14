import React from 'react';
import './App.css';
import Lottie from 'lottie-react';
import sustainabilityGraph from './sustainability-graph.json';
import OPKaupunki from './OP-kaupunki.json';
import OPKassa from './OP-kassa.json';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const style = {
  height: '50vh',
};

const AnimationTest = () => {
  return (
    <div className='App'>
      <Typography variant='h1'>Animation tests</Typography>
      <Box
        sx={{
          padding: 4,
        }}
      >
        <Typography variant='h3'>Sustainability graph</Typography>
        <Typography>Loops three times</Typography>
        <Lottie
          animationData={sustainabilityGraph}
          style={style}
          autoPlay
          loop={2}
        />
      </Box>
      <Box
        sx={{
          padding: 4,
        }}
      >
        <Typography variant='h3'>City</Typography>
        <Typography>
          Loops indefinetely. Animation size is not optimised.
        </Typography>
        <Lottie animationData={OPKaupunki} style={style} />
      </Box>
      <Box
        sx={{
          padding: 4,
        }}
      >
        <Typography variant='h3'>City</Typography>
        <Typography>
          Loops indefinetely. Animation size is not optimised.
        </Typography>
        <Lottie animationData={OPKassa} style={style} />
      </Box>
    </div>
  );
};

export default AnimationTest;
