import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Sidebar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed() {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    useEffect(()=> {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}&order=date`).then((data)=>setVideos(data?.items)).catch((error)=>console.log(error));
    }, [searchTerm])

    return (
        <Stack sx={{flexDirection: {sx:"column", md:"row"}}}>
            <Box sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
                    Search Results for <span style={{color: '#F31503'}}>{searchTerm}</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
}

export default SearchFeed;