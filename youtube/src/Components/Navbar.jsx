import React from 'react'
import { Stack } from '@mui/material'
import { logo } from '../utils/constant'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
function Navbar() {
  return (
    <Stack direction='row' 
    alignItems="center" 
    p={2} 
    sx={{position:"sticky", background:"#000", top:"0",justifyContent:"space-between",  zIndex:100}}>
        <Link to="/" style={{display:"flex", alignItems:"center"}}>
        <img src={logo} alt="" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar