
import { Box} from '@mui/material'
import React from 'react'
import Post from './Post';
import { image1, image2, image3 } from '../utlility/constants';


const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post image={image1}/>
      <Post image={image2}/>
      <Post image={image3}/>
      <Post image={image1}/>
      <Post image={image2}/>
      <Post image={image3}/>
    </Box>
  )
}

export default Feed;


  
