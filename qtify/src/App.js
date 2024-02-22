import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'

function App() {
  const dummydata = {
    image :"https://picsum.photos/200", 
    follows: 780,
     title:"Nonsense project", 
     slug:"strident-analyst", 
     songs:[1,3,3,4,5,5]
  }
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <Card data={dummydata} type={'album'}/>
    </StyledEngineProvider>
  );
}

export default App;
