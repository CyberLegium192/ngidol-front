import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function status({setValues, values, setStatus}) {
  return (
    <FormControl variant="standard" className='w-full' >
            <InputLabel id="demo-simple-select-error-label" color='error'>Status</InputLabel>
            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label="Status"
                onChange={(e) => setStatus(e.target.value)}
                color='error'
                name='status'
            >
                <MenuItem>
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Anggota'>Anggota</MenuItem>
                <MenuItem value='Grad Announcement'>Grad Announcement</MenuItem>
                <MenuItem value='Trainee'>Trainee</MenuItem>
                <MenuItem value='Ex Member'>Ex Member</MenuItem>
            </Select>
        </FormControl>
  )
}

export default status