import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section';
import { fetchTopAlbums } from './components/api/api';
import { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [data, setData] = useState([]);
  // const {topAlbums=[]} = data;

  const generateData = (func_toCall)=>{
    func_toCall().then((fetcheddata)=>setData(fetcheddata));
  }

  useEffect(()=>{
    generateData(fetchTopAlbums);
  }, []);
 
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <div className="sectionsWrapper">
        <Section sectionTitle={'Top Albums'} data={data} type={'album'}/>
      </div>
      
      
    </StyledEngineProvider>
  );
}

export default App;
