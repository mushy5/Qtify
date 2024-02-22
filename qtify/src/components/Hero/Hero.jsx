import React from "react";
import styles from './Hero.module.css';
import headphones from '../../assets/hero_headphones.png';
 
function Hero(){
    return (
        
        <div className={styles.heroParent}>
            <div className={styles.herocontainer}>        
                        <div className={styles.heroText}>
                            <div>100 Thousand Songs, ad-free</div>
                            <div>Over thousands podcast episodes</div>
                        </div> 
                            <img src={headphones} alt="headphone-img" width={212} height={212} />
            </div>
        </div>  
       
    );
}
export default Hero;