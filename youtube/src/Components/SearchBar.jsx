import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

function SearchBar() {
  const [searchTerm,setSearchTerm] = useState(' ');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm(' ')
    }
  }
  return (
    <Paper onSubmit={handleSubmit}  elevation={2} sx={{borderRadius:20, border:"1px solid e3e3e3", pl:2 , boxShadow:'none', mr:{sm:5}}}>
        <input type="text" placeholder='search...' className='search-bar' onChange={(e)=>{setSearchTerm(e.target.value)} } value={searchTerm}/>
        <IconButton type='submit' sx={{p:"10px", color:"red"}} onClick={handleSubmit}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar