import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import { motion } from 'framer-motion';



const Sentance = () => {
    return ( 
    <motion.div 
        // initial={{x:-800}}
        // animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 4 }}
        whileHover={{
            scale:0.9
        }}>       
      
        <h1 className='no-logo'>A R T E M I S</h1>
        <br />
        <h3 class="pb-3 text-center">The IoT development needs Artemis today</h3>
        <br/>
        <br />
        <p className='quote text-center'>Artemis will make the development easier.</p>
        <br />
        <br />
        <br />
       <button className='get-btn'>
        Get Started
       </button>
       <button className='how-btn'>
        How it works
       </button>
        
        </motion.div>
       
       


    );
}
 
export default Sentance;