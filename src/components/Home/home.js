import React from 'react';
import Header from '../header/header';
import Sentance from './sentance';
import Alert from './alert';
import videoBg from '../../imgs/back.MP4';

const Home = () => {
    return ( 
    <div className='home'>
         <video src={videoBg} autoPlay loop muted />
         <div id="stars" class="relative bg-gradient-6 pt-20 h-screen max-h-168 sm:max-h-1200 min-h-640" data-v-bc3dd708="" data-v-cfcfc8d6="">
         <div class="hero-container absolute left-0 right-0 mx-auto grid-margins mb-20" data-v-bc3dd708=""  className='content'>
         <div class="flex flex-col justify-center items-center text-white" style={{width:"100%"}} data-v-bc3dd708="">
         <Alert  />
         <div class="flex flex-col sm:flex-row mt-6" data-v-bc3dd708="" data-v-cfcfc8d6="" >
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Sentance className="pb-5 text-center" />
         </div>
         </div>
         </div>
         </div>
       

        
        

    </div> );
}
 
export default Home;