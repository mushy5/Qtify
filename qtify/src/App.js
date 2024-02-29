import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section';
import { fetchTopAlbums,fetchNewAlbums ,fetchSongs } from './components/api/api';
import { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [data, setData] = useState({});
  const {topAlbums=[],newAlbums=[],songs=[]} = data;


  const generateData = (key, func_toCall)=>{

    func_toCall().then((fetcheddata)=>{
      setData((prevState)=>{
        return {...prevState,[key]:fetcheddata};
      })
    })
    
  }

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    // generateData("songs",fetchSongs);
  }, []);
 
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <div className="sectionsWrapper">
        <Section sectionTitle={'Top Albums'} data={topAlbums} type={'album'}/>
        <Section sectionTitle="New Albums"  data={newAlbums} type="album"/>
        {/* <Section title="Songs"  data={songs} filterSource={fetchFilters}  type="song"/> */}

      </div>
      
      
    </StyledEngineProvider>
  );
}

export default App;
