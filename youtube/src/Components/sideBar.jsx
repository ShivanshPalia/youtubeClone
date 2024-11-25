import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constant'
function sideBar({selected,setSelected}) {
  return (
   < Stack direction="row"
    sx={{
    flexDirection:{md:"column"},
    overflowY:"auto",
    height:{sx:"auto",md:"95%"}}}> 
       { categories.map((category)=>{
        return(
            <button onClick={()=>{
                setSelected(category.name)
            }} className='category-btn' style={{color:'white',background:selected===category.name && "#FC1503"}} key={category.name}>
                <span style={{color:category.name===selected ? "white":"red" , marginRight:"15px"}}>{category.icon}</span>
                <span style={{opacity:category.name===selected?"1":"0.8"}}>{category.name}</span>
            </button>)
        })}
   </Stack>
  )
}

export default sideBar