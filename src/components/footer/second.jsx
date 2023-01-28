import { Checkbox } from '@mui/material';
import { Button } from 'bootstrap';
import React from 'react';

const Second = () => {
    return ( <div className='second'>
        <input type="email" placeholder='email@yourdomain.com' className='sec-email' />
        <button className='ques-btn'>Subscribe</button>
        {/* <Checkbox className='sec-check'/> <label className='sec-check'>please send me the news letter</label> */}
        
    </div> );
}
 
export default Second;