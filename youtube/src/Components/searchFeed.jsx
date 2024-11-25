import React from 'react'
import { useState,useEffect } from 'react'
import { Typography,Box,CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchApi'
import Videos from './videos'
import SearchVids from './searchVids'
function SearchFeed() {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(()=>{
      FetchApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm])
  return (
   <Box p={2} minHeight="95vh">
      <Typography variant='h4' fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Your search for your item <span style={{color:"red"}}>{searchTerm}</span> Videos
      </Typography>
      <Box sx={{display:"flex" }}>
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>

      </Box>
       
      <Box sx={{marginLeft:"160px"}}>
      <Box sx={{ mr: { sm: '200px' } }}/>
          <div >
          <SearchVids videos={videos}/>
          </div>
        

      </Box>
    
      
   </Box>
  )
}

export default SearchFeed