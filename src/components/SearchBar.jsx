import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const text = e.target.value;
        setSearchTerm(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, border: '1px solid #e3e3e3', paddingLeft: 2, boxShadow: 'none', marginRight: { sm: 5 } }}>
            <input className='search-bar' placeholder='Search...' onChange={handleChange} value={searchTerm} />
            <IconButton type='submit' sx={{ p: '10px', color: 'red'}}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;