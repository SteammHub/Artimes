import React from 'react';
import Sent from './sent';
import Blog from './blog';
import Media from './media';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import Videos from './videos';


const News = () => {
    return ( <div>
        <Sent />
        

        <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Item > <Blog /></Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item ><Media /></Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item > <Videos /></Item>
  </Grid>
  </Grid>

    </div> );
}
 
export default News;