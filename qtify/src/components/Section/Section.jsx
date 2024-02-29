import React from "react";
import {useState, useEffect} from 'react';
import Card from "../Card/Card";
import styles from './Section.module.css';
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

//just testing
//import {ReactComponent as RightArrow} from "../../assets/RightArrow.svg";


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
             <p className={styles.toogleText} onClick={sethandle}> {!carouselToggle ? "Collapse" : "Show All"} </p>

            {/* <h4 className={styles.toogleText} onClick={sethandle}>
                {carouselToggle ? "Collapse" : "Show all"}
            </h4>  */}
        </div>

        { data.length===0 ? <CircularProgress/>
            :  
            <div className={styles.cardsWrapper}>
                {!carouselToggle ? <div className={styles.cardsgrid}>
                    {data.map((cardObj)=>  <Card key={cardObj.id} data={cardObj} type={type} /> )}
                </div> 
                : 
                
                <div>
                     <Carousel data={data} renderComponent={(xyz) => <Card key={xyz.id} data={xyz} type={type}/>} />
               
                </div>
               
                
                }
            </div> 
        }
    </div>
   )
}