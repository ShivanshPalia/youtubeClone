import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import VideoDetail from './Components/VideoDetail';
import ChannelDetail from './Components/ChannelDetail';
import Feed from './Components/Feed';
import {Box} from "@mui/material"
import ChannelInfo from "./Components/ChannelInfo";
import SearchFeed from "./Components/searchFeed";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Box sx={{background:"#000"}}>

      
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}/>
          <Route path="/channel/:id" element={<ChannelInfo/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/video/:id' element={<VideoDetail/>}/>
        </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
