import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function zodiac({setBlood}) {
    return (
        <FormControl variant="standard" className='w-full'>
            <InputLabel id="demo-simple-select-error-label" color='error'>Blood</InputLabel>
            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Blood"
                name='blood'
                onChange={(e) => setBlood(e.target.value)}
                color='error'
            >
                <MenuItem>
                    <em>None</em>
                </MenuItem>
                <MenuItem value='A'>A</MenuItem>
                <MenuItem value='B'>B</MenuItem>
                <MenuItem value='AB'>AB</MenuItem>
                <MenuItem value='O'>O</MenuItem>
            </Select>
        </FormControl>
    )
}

export default zodiac