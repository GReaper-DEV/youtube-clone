import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function Feed() {

    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('New');

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items)).catch((error) => console.log(error));

    }, [selectedCategory])

    if (!videos) return 'Loading...';

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }, mr: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright' variant='body2' sx={{ mt: '1.5', color: '#fff' }}>
                    Copyright 2025
                </Typography>
            </Box>
            <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, p: '10px'}}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;