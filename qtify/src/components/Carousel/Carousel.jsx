import React,{useEffect} from "react";
import styles from "./Carousel.module.css";
import {Swiper,SwiperSlide} from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        //if only 0, is added it displays 7 cards bydefault. But giving some speed error.
        swiper.slideTo(0,1);
    },[data]);
    return<></>;
};

function Carousel({data, renderComponent}){
    return (
        <div className={styles.wrapper}>
        <Swiper 
            style={{padding:"0px 20px"}}
            initialSlide={0}
            modules={[Navigation]}
            //speed={'auto'}
            //you can this to a fixed number as well like 7
            slidesPerView={7}
            spaceBetween={40}
            allowTouchMove
       >
           <Controls data={data}/>

            <CarouselLeftNavigation/>

           <CarouselRightNavigation/> 

           {
               data.map((ele,index)=>(
                   <SwiperSlide key={index}>
                       {renderComponent(ele)}
                   </SwiperSlide>
               ))
           }

       </Swiper>

</div>
    )
   
}
export default Carousel;