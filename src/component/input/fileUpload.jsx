import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 1,
    whiteSpace: 'nowrap',
    width: 0,
});

function fileUpload({setProfile}) {
    const [image, setImage] = useState(null)
    const user = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLHZh0aF5Og2DF4G19yPVx_QGjXfaBByFZA&usqp=CAU'
    const handleUpload = (e) => {
        setProfile(e.target.files[0])
        setImage(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <div className='w-full lg:flex lg:flex-col lg:justify-center'>
            <img src={image === null ? `${user}` : image} className="w-28 h-28 lg:m-auto rounded-full shadow mb-5 object-cover" alt="" />

            <Button component="label" variant="outlined" size='small' color='error' startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" name='profile' onChange={(e) => handleUpload(e)}/>
            </Button>

        </div>
    )
}

export default fileUpload