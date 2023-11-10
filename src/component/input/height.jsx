import React from 'react'
import { FormControl, Input, InputAdornment, FormHelperText, TextField } from '@mui/material'
function height({setHeight}) {
    return (
        <TextField id="standard-basic" className='w-full' name='height' label="Height" color='error' variant="standard" onChange={(e) => setHeight(e.target.value)}/>
    )
}

export default height