import React, { useState,useEffect} from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";

export default function Navigation(){
    const swiper = useSwiper();
    const [isBeginning, setBeginning] = useState(swiper.isBeginning);

    

    useEffect(()=>{
        swiper.on('slideChange', function(){
            setBeginning(swiper.isBeginning);
        })
    });

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => { swiper.slidePrev() } } /> }
        </div>
    )

}