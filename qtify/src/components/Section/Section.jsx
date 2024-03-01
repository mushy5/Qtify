import React from "react";
import {useState, useEffect} from 'react';
import Card from "../Card/Card";
import styles from './Section.module.css';
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filter/Filter";


export default function Section({sectionTitle, data,filterSource, type}){
    console.log(type);
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([ {key:'all', label:'All'} ]);
    const [selectedFilterIndex, setSelectedFilterIndex ] = useState(0);


    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                //response= { data : [{},{}, ...]} here key 'data' will destructured and stored in same variable 'data' below.
                //Otherwise each time you will have to do  "response.data to access that array."
                const {data} = response;
                //update filters from list with single obj to list with several objects. i.e [ {k:'all',lab:'All'},{k:'jazz',lab:'Jazz'},{}...] 
                setFilters([...filters, ...data]);  
                
            });
        }
    }, []);
    // filterSource, filters

    const sethandle = ()=>{
        setCarouselToggle((prevState)=>!prevState);
    }

    const showFilters = filters.length > 1;
    const cardsToRender=data.filter((card)=>
    showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key: card
    );

    return ( 
    <div>
        <div className={styles.Album_header}>
            
             <h3>{sectionTitle}</h3>
             {type==='song' ? <></> : <p className={styles.toogleText} onClick={sethandle}> {!carouselToggle ? "Collapse" : "Show All"} </p>
}

        </div>

        {showFilters && (
            <div className={styles.filtersWrapper}> 
                <Filters filters={filters}  />
             </div>
        )}

        { data.length===0 ? <CircularProgress/>
            :  
            <div className={styles.cardsWrapper}>
                {!carouselToggle ? <div className={styles.cardsgrid}>
                    {cardsToRender.map((cardObj)=>  <Card key={cardObj.id} data={cardObj} type={type} /> )}
                </div> 
                : 
                
                <div>
                    {/* renderComponent is sending a callback function that display the card. */}
                     <Carousel data={cardsToRender} renderComponent={(xyz) => <Card key={xyz.id} data={xyz} type={type}/>} />
                </div> 
                }
            </div> 
        }
    </div>
   )
}