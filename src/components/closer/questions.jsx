import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Aya from '../../imgs/Aya.jpg'
import Soub from '../../imgs/Soub.jpg'
import Osama from '../../imgs/Osama.jpg'
import Omar from '../../imgs/Omar.jpg'

const Questions = () => {
    return ( <div>
         {/* <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
        <h4 className='ques-h4'>Want to dig in? </h4>
          <button className='ques-btn'>Check the docs</button>
        </Col>
        <Col md="auto">
        <h4 className='ques-h4'>Want to dig in? </h4>
          <button className='ques-btn'>Check the docs</button>
        </Col>
        <Col xs lg="5">
        <h4 className='ques-h4'>Want to dig in? </h4>
          <button className='ques-btn'>Check the docs</button>
        </Col>
     </Row>
    </Container> */}
        <div class="wrapper">
  
    <div class="our_team">
   
     
        <div class="team_member">
           <div class="member_img">
             <img src={Soub} alt="our_team" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Mohammad Soub</h3>
          
        
      </div>
      
      <div class="team_member">
           <div class="member_img">
             <img src={Omar} alt="our_team" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Omar Abu Salim</h3>
          
        
      </div>
      {/* <div class="team_member">
          <div class="member_img">
             <img src={Aya} alt="our_team" />
            <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Aya Joudeh</h3>
      
       
        </div> */}
        {/* <div class="team_member">
           <div class="member_img">
             <img src={Osama} alt="our_team" />
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>Osama Shoman </h3>
          <p>Robotics and STEAM coach for more than 6 years of experince , global robotics achievements</p>
      </div>   */}
    </div>
</div>

    </div> );
}
 
export default Questions;