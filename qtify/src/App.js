import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section';
import { fetchTopAlbums,fetchNewAlbums ,fetchSongs } from './components/api/api';
//for sending an extra prop to the songs section.
import {fetchFilters } from './components/api/api';
import { useEffect, useState } from 'react';

import './App.css';


function App() {
  //here data starts as an empty obj,then has 3 keys (top, new, song) where each key has a value list type(array of objects).
  //once page is rendered, componentdidMount ( useEffect(callback, []) ) will fetch data for each key and update the data to whatever it was previously + particular key's new value.
  const [data, setData] = useState({});
  const {topAlbums=[],newAlbums=[],songs=[]} = data;


  const generateData = (key, func_toCall)=>{

    func_toCall().then((fetcheddata)=>{
      setData((prevState)=>{
        //if topAlbums key of data is fetched, then that key will be modified, all rest of keys will remain same.
        return {...prevState,[key]:fetcheddata};
      })
    })
    
  }

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  }, []);
 
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <div className="sectionsWrapper">
        <Section sectionTitle={'Top Albums'} data={topAlbums} type={'album'}/>
        <Section sectionTitle="New Albums"  data={newAlbums} type="album"/>
        <Section sectionTitle="Songs"  data={songs} filterSource={fetchFilters}  type="song"/>
      </div>
      
      
    </StyledEngineProvider>
  );
}

export default App;
