import React from 'react';
import FirstPart from './components/FirstPart'
import SecondPart from './components/SecondPart'
import ThirdPart from './components/ThirdPart'
import FourthPart from './components/FourthPart'
import Top from './components/Top'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Top />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Footer />
    </>
  );
};

export default App;