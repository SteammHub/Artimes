import React from 'react';
import Sent from './sent';
import Questions from './questions';


const Closer = () => {
    return ( <div style={{display:"inline",marginTop:"15px"}}>
      <Sent />
      <Questions />
    </div> );
}
 
export default Closer;