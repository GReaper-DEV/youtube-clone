import { Routes, Route } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { Box } from '@mui/material'
import { useEffect, useState } from 'react';

function App() {

  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/channel/:id' exact element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Box>
  )
}

export default App
