import React from "react";
import styles from './SearchBar.module.css';
import  SearchIcon from '../../assets/search-icon.svg';

function SearchBar(){
    return (
        <div className={styles.searchContainer}>
            <input name="search"
            className={styles.search}
            placeholder="Search a song of you choice" />
            <button className={styles.SearchButton}> <img src={SearchIcon} alt="search_icon" /> </button>
        </div>
    )
}
export default SearchBar;