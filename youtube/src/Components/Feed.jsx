import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Videos from './videos'
import SideBar from './sideBar'
import { FetchApi } from '../utils/FetchApi'

function Feed() {
  const [selected,setSelected] = useState("New")
  const [videos,setvideos] = useState([])
  useEffect(()=>{
    FetchApi(`search?part=snippet&q=${selected}`)
    .then((response)=>{
      setvideos(response.items);
    })
  },[selected])
  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
        <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d" , px:{sx:3, md:4}}}>
          <SideBar 
          selected={selected}
          setSelected={setSelected} />
              <Typography variant='body2' className='copyright' sx={{mt:1.5 , color:"white"}}>
                Copyright here there
              </Typography>
        </Box>
        <Box p={1} sx={{height:"100vh" , overflowY:"auto" , }}>
          <Typography variant='h4'  fontWeight="bold" mb={2} sx={{color:"white" }}> 
            {selected} <span style={{color:"#FC1503"}}>Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed