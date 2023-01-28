import React from 'react';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import {DefaultPlayer as Video2} from 'react-html5video';
import word from '../../imgs/Welcome.mp4';
import 'react-html5video/dist/styles.css';
import pink from '../../imgs/pink.jpg'
import blue from '../../imgs/blue.jpg'
import './style.css';

const Videos = () => {
    return ( <div>
       
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
        <Item>
        <Video2 poster={pink}  className="video">
        <source src={word} type="video/webm" />
        </Video2>
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
        <Video2 className="video" poster={blue} >
        <source src={word} type="video/webm" />
        </Video2>
        </Item>
      </Grid>
      </Grid>
      <br />
      <button className='ques-btn'>More Videos</button>
      


    </div> );
}
 
export default Videos;