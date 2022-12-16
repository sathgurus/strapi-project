import { TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { configData } from '../config/config';
import  Container  from '@mui/material/Container';



export function Review() {

    const [data,setData]=useState([]);

    const loadData = async () => {

        const response = await axios.get(configData.Base_URL + '/api/flims?populate=*')
        
            setData(response.data.data);
        console.log('response', data);

    }

    useEffect(() => {
        loadData();

    }, []);

    return(
        <Container maxWidth='xl' sx={{background:'#8ba3a1'}}>

<Typography variant='h2'>Flim Reviews</Typography>
        
        <Typography>
            {data.map((row)=>{
                const review = row.attributes.reviews.data;
                console.log('review',review);
          
                return(
                    <>
                    <Typography variant='h3'  sx={{color:'#de522f'}}>{row.attributes.Movie_Name}:</Typography>
            
            <Typography variant='h6'>
               {review.map((e)=>{ 
                return(
                <>
                <Typography variant='h5' mt={3} ml={15} sx={{color:'#053833'}}>{e.attributes.review}     -    
                  {e.attributes.reviewer}</Typography>
                </>
                );
                })}
            </Typography>

            </>
                );     

})}
            
        </Typography>
        
        
        
        
        
        </Container>

    );
}