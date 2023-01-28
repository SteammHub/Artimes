import React from 'react';
import Grid from '@mui/material/Button';
import Item from '@mui/material/Button';
import art1 from '../../imgs/artimes7 (2).png';
import art2 from '../../imgs/artimes6 (2).png';
import art3 from '../../imgs/artimes5 (2).png';
import art4 from '../../imgs/artimes4 (2).png';
import './style.css';
import Card from 'react-bootstrap/Card';

const Ben = () => {
    return ( 
      <div>
        <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
        <Grid item xs={6} >
          <Item >
          <Card style={{ width: '30rem', border:"none", marginRight:"20rem" }} >
      <Card.Img variant="top" src={art1} />
      <Card.Body>
        <Card.Title>No hidden or expensive costs</Card.Title>
        <Card.Text style={{color:"black",textTransform:'lowercase'}}>
        Most IoT platforms are expensive or they have a lot of hidden costs Artemis is an open source so you can use artimes in your servers 
        or you can use our servers with a low cost .
        </Card.Text>
    
      </Card.Body>
    </Card>
          </Item>
        </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Card style={{ width: '30rem',border:"none" }}>
      <Card.Img variant="top" src={art2} />
      <Card.Body>
        <Card.Title>platforms nowadays destroy your data</Card.Title>
        <Card.Text style={{color:"black" ,textTransform:'lowercase'}}>
        Most platforms in the market  destroy your data after one day of collecting it. In Artemis we give you the option to 
        store data or use it whenever you want it works on your server.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </Item>
        </Grid>
        </Grid>
        </div>

        <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Card style={{ width: '30rem', border:"none", marginRight:"20rem" }}>
      <Card.Img variant="top" src={art3} />
      <Card.Body>
        <Card.Title>No centralization in our platform</Card.Title>
        <Card.Text style={{color:"black" ,textTransform:'lowercase'}}>
        Most platforms that we see in the field force you to use their platforms or only allow you to use the APIs 
        when you pay when you use artemis you will have the access to use it on your application directly.
        </Card.Text>
    
      </Card.Body>
    </Card>
          </Item>
        </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <Card style={{ width: '30rem',border:"none" }}>
      <Card.Img variant="top" src={art4} />
      <Card.Body>
        <Card.Title> web nowadays needs an intermediary servers</Card.Title>
        <Card.Text style={{color:"black" ,textTransform:'lowercase'}}>
        We plan to change the way of connection  between the iot devices and  other devices and make a connection between 
        the devices to improve the user experience but for now that’s 
        going to be future plan.
        </Card.Text>
       
      </Card.Body>
    </Card>
          </Item>
        </Grid>
        </Grid>
        </div>
       

      </div>
   
    
 );
}
 
export default Ben;

 