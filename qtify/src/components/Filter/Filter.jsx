import React, { useEffect, useState } from "react";
import {Tab,Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Styles from './Filter.module.css';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function Filters({filters }){
    
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    const handleChange=(event,newValue)=>{
        
        setSelectedFilterIndex(newValue)
    };

    function allyProps(index){
        return{
            id:`simple-tab-${index}`,
            "aria-controls":`simple-tabpanel-${index}`,
        };

    }
   //
    return (
        <div>
            <Tabs
            value={selectedFilterIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
                style:{
                    backgroundColor:'green',
                },
            }}
            >
                {filters.map((ele,idx) =>                     
                    <Tab className={Styles.tab} key={idx} label={ele.label} {...allyProps(idx) }/> 
                )}
            </Tabs>
            {filters.map((ele,idx)=>(
                    <TabPanel value={selectedFilterIndex} index={idx} key={idx}/>
                ))}
        </div>
    )
}

export default Filters;