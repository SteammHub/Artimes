import React from 'react';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import './style.css';
import one from '../../imgs/one.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import two from '../../imgs/two.png';



const Options = () => {
    return ( <div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
    
         <Card.Header>
            <img src={one} />
         </Card.Header>
      <Card.Body>
        <Card.Title className='option-title'>Artemis for WordPress</Card.Title>
        <Card.Text className='option-desc'>
        Just want to use Artemis in wordpress? Follow these step-by-step instructions for getting up and running on Elementor <br />
        using the Go implementation of Artemis.<br />
        </Card.Text>
        <br />
        <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Coming Soon...</Button>
      </Card.Body>
        
      </Grid>

      
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
    
         <Card.Header>
            <img src={one} />
         </Card.Header>
      <Card.Body>
        <Card.Title className='option-title'>Artemis for Flutter</Card.Title>
        <Card.Text className='option-desc'>
        Just want to use Artemis in your Flutter code? Follow these step-by-step instructions for getting up and running on your code<br />
        using the Go implementation of Artemis.<br />
        </Card.Text>
        <br />
        <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Coming soon...</Button>
      </Card.Body>
        
      </Grid>

      
      </Grid>
      <div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
    
         <Card.Header>
            <img src={one} />
         </Card.Header>
      <Card.Body>
        <Card.Title className='option-title'> React js</Card.Title>
        <Card.Text className='option-desc'>
        Automatically allocate Artemis at your React js code
        </Card.Text>
        <br />
        <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Coming Soon...</Button>
      </Card.Body>
        
      </Grid>

      
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      <Grid item xs={6}>
    
         <Card.Header>
            <img src={one} />
         </Card.Header>
      <Card.Body>
        <Card.Title className='option-title'> React Native</Card.Title>
        <Card.Text className='option-desc'>
        Automatically allocate Artemis at your React Native code
        </Card.Text>
        <br />
        <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Coming Soon..</Button>
      </Card.Body>
        
      </Grid>

      
      </Grid>

      </div>

      {/* <div>
      <p className='install'>For Developers</p>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

<Grid item xs={6}>

   <Card.Header>
      <img src={one} />
   </Card.Header>
<Card.Body>
  <Card.Title className='option-title'>JS implementation</Card.Title>
  <Card.Text className='option-desc'>
  IPFS implemented entirely in JavaScript for a world <br />of possibilities in the browser and Node.js.
  </Card.Text>
  <br />
  <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Install IPFS Desktop</Button>
</Card.Body>
  
</Grid>


</Grid>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

<Grid item xs={6}>

   <Card.Header>
      <img src={one} />
   </Card.Header>
<Card.Body>
  <Card.Title className='option-title'>Go implementation</Card.Title>
  <Card.Text className='option-desc'>
  The original IPFS implementation: IPFS core, <br /> daemon server, CLI tooling, and more.
  </Card.Text>
  <br />
  <Button variant="primary" className="Install" style={{backgroundColor:'white',borderColor:'white',color:"#34797D"}}>Install IPFS Desktop</Button>
</Card.Body>
  
</Grid>


</Grid>

</div> */}


      

      

      


      
    
    </div> );
}
 
export default Options;