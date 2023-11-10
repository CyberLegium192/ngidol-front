import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Gen({setGen, setValues, values}) {
    return (
        <FormControl variant="standard" className='w-full'>
            <InputLabel id="demo-simple-select-error-label" color='error'>Gen</InputLabel>
            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Gen"
                onChange={(e) => setGen(e.target.value)}
                color='error'
                name='gen'
            >
                <MenuItem >
                  <em>none</em>
                </MenuItem>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='5'>5</MenuItem>
                <MenuItem value='6'>6</MenuItem>
                <MenuItem value='7'>7</MenuItem>
                <MenuItem value='8'>8</MenuItem>
                <MenuItem value='9'>9</MenuItem>
                <MenuItem value='10'>10</MenuItem>
                <MenuItem value='11'>11</MenuItem>
                <MenuItem value='12'>12</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Gen