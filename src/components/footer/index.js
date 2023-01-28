import React from 'react';
import First from './first';
import Second from './second';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import './style.css';


const Footer = () => {
    return ( <div className='footer'>
   <Grid container spacing={2} >
  <Grid item xs={6} md={8}>
    <Item > <First /> </Item>
  </Grid>
  <Grid item xs={6} md={8 } > 
    <Item ><Second /> </Item>
  </Grid>
 
  </Grid>

    </div> );
}
 
export default Footer;