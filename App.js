import React from 'react';
import {StatusBar} from 'react-native';

import Stopwatch from './src/screens/Stopwatch';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stopwatch />
    </>
  );
};

export default App;
