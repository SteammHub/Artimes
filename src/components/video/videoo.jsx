import React from 'react';
import {DefaultPlayer as Video2} from 'react-html5video';
import word from '../../imgs/Welcome.mp4';
import 'react-html5video/dist/styles.css';
import './style.css';
import human from '../../imgs/human.png'

<link rel="stylesheet" href="/css/video-react.css" />
const Videoo = () => {
    return ( <Video2 poster={human} >
        <source src={word} type="video/webm" className="video-cont"  />
        </Video2>
       

     );
}
 
export default Videoo;