import React from 'react';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import how1 from '../../imgs/how1.png';
import how2 from '../../imgs/how2.png';
import wed1 from '../../imgs/wed1.png';
import wed2 from '../../imgs/wed2.png';

const Steps = () => {
    return ( <div>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6} className="gird-width">
        <Item>
           <img src={how1}/>
           </Item>
           <Item>
           <p className='desc'>
           Simplified IoT development: Artemis is a low-code solution that simplifies the process of creating and maintaining IoT devices. 
           It streamlines the development process and makes it easier for developers to create new IoT solutions and products.
           </p>
           </Item>
        
      </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
      
      <Grid item xs={6} className="gird-width">
        <Item>
           <img src={how2}/>
         
        
           <p className='desc'>
           Faster time-to-market: By providing a low-code solution for IoT developers, Artemis make it easier for developers to create new IoT 
           solutions, allowing for faster time-to-market for new products and more efficient development and maintenance of existing systems.
           </p>
           </Item>
       
      </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
      
      <Grid item xs={6} className="gird-width">
         <Item>
           <img src={wed1}/>
  
           <p className='desc'>
           Improved scalability and reliability: Artemis can help to improve the scalability and reliability of IoT systems  by making it easier to develop 
            and maintain the software that runs on IoT devices. This can lead to more robust and reliable IoT systems, which is crucial for the widespread adoption of IoT in various industries.       </p>
           </Item>
      </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      
      <Grid item xs={6} className="gird-width">
        <Item>
           <img src={wed2} />
           <p className='desc'>
           Support for Web 3 standards: Artemis also powers in the Web 3 standards, providing a  security, resilience and open web environment. This ensures the security and full ownership of the user's code. <br />

           </p>
        </Item>
      </Grid>
      </Grid>
    </div> );
}
 
export default Steps;