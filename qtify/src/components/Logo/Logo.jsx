import logo from '../../assets/logo.png';
import React from 'react';
import styles from './Logo.module.css';

function Logo(){
    return (
        <div>
            <img src={logo} alt="qtify logo" className={styles.logo} />

        </div>
    )
}

export default Logo;