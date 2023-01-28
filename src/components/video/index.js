import React from 'react';
import Videoo from './videoo';
import Sent from './sent';
import './style.css';
import ParVideo from './parVideo';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';

const Video = () => {
    return ( <div>
            <Sent />
        <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Item className='video-cont'> <Videoo /></Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item style={{marginRight:"10rem"}}><ParVideo /></Item>
  </Grid>
  </Grid>
    </div> );
}
 
export default Video;