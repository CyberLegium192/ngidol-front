import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function zodiac({setValues, values, setZodiac}) {
    return (
        <FormControl variant="standard" className='w-full'> 
            <InputLabel id="demo-simple-select-error-label" color='error'>Zodiac</InputLabel>
            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Zodiac"
                name='zodiac'
                onChange={(e) => setValues({...values, zodiac: e.target.value})}
                color='error'
            >
                <MenuItem>
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Aries'>Aries</MenuItem>
                <MenuItem value='Taurus'>Taurus</MenuItem>
                <MenuItem value='Gemini'>Gemini</MenuItem>
                <MenuItem value='Cencer'>Cencer</MenuItem>
                <MenuItem value='Leo'>Leo</MenuItem>
                <MenuItem value='Virgo'>Virgo</MenuItem>
                <MenuItem value='Libra'>Libra</MenuItem>
                <MenuItem value='Scorpio'>Scorpio</MenuItem>
                <MenuItem value='Sagittarius'>Sagittarius</MenuItem>
                <MenuItem value='Cappricorn'>Cappricorn</MenuItem>
                <MenuItem value='Aquarius'>Aquarius</MenuItem>
                <MenuItem value='Pisces'>Pisces</MenuItem>
            </Select>
        </FormControl>
    )
}

export default zodiac