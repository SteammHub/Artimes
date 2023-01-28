import React from 'react';
import Sent from './sent';
import './style.css'
import Options from './options';

const IPFS = () => {
    return ( <div className='IPFS'>
        <Sent />
        <Options />
    </div> );
}
 
export default IPFS;