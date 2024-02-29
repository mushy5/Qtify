import React from "react";
import {useState, useEffect} from 'react';
import Card from "../Card/Card";
import styles from './Section.module.css';
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

export default function Section({sectionTitle, data, type}){
    const [carouselToggle, setCarouselToggle] = useState(true);

    //console.log(data);

    const sethandle = ()=>{
        setCarouselToggle((prevState)=>!prevState);
    }

    return ( 
    <div>
        <div className={styles.Album_header}>
            
             <h3>{sectionTitle}</h3>
             <p className={styles.toogleText} onClick={sethandle}> {carouselToggle ? "Collapse" : "Show All"} </p>

            {/* <h4 className={styles.toogleText} onClick={sethandle}>
                {carouselToggle ? "Collapse" : "Show all"}
            </h4>  */}
        </div>

        { data.length===0 ? <CircularProgress/>
            :  
            <div className={styles.cardsWrapper}>
                {carouselToggle ? <div className={styles.cardsgrid}>
                    {data.map((cardObj)=>  <Card key={cardObj.id} data={cardObj} type={type} /> )}
                </div> 
                : 
                
                <Carousel data={data} renderComponent={(xyz) => <Card data={xyz} type={type}/>} />}
            </div> 
        }
    </div>
   )
}