import React from 'react';
import { useState,useEffect } from 'react';
import { configData } from '../config/config';
import axios from 'axios'
import { Box, Typography} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import  Link  from '@mui/material/Link';


// const movie = (flim) => {
//   console.log("Movie function", flim);
  
//    return `${flim.attributes.Movie_Name}`;
// };

// const review=((flim)=>{
//   const demo=flim.attributes.reviews.data

//   return <>{demo.attributes.review}</>
// })


// const reviewer=((flim)=>{
//   const demo1=flim.attributes.reviewss.data

//   return <>{demo1.attributes.reviewer}</>
// })


const columns=[

  
    {field:'id',headername:'ID'},
    {field:'Movie_Name',headername:'Movie_Name' ,width:200,
    valueGetter:(params)=> params.row.attributes.Movie_Name,
    valueFormatter : (params) => (params.value),
  },
  //   {field:'reviews',headername: 'reviews',width:200,
  //   // valueGetter:(params)=> params.row.attributes.reviews.data,
    
  //   // valueFormatter : (params) => (params.value),

  //  },
  //   {field:'reviewer',headername : 'reviewer',width:200 //,//valueFormatter : reviewer
  
  // }
  // {field:'Ratings',headername:'Ratings',width:200,render: rowData => {
  //   return <Rating name="hover-feedback" value={rowData.rating} readOnly />;}}

 


]



export function Flim() {

    const [data,setData]=useState([]);

    const loadData = async () => {

        const response = await axios.get(configData.Base_URL + '/api/flims?populate=*')
        
            setData(response.data.data);
        console.log('response', data);

    }

    const [value, setValue] = React.useState(2);

    useEffect(() => {
        loadData();

    }, []);

    console.log('response', data);
  return (
    <>
    <Typography variant='h2'>Flim Reviews</Typography>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}>


        </DataGrid>

    

    </Box>

    <Link href='/review' ><Button variant='contained' sx={{mt:3,ml:5}}>Reviews</Button></Link>
  
    </>
  );
}
