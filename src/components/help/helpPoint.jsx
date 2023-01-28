import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Help1 from '../../imgs/help1.png';
import Help2 from '../../imgs/help2.png';
import Help3 from '../../imgs/help3.png';


const Helpoint = () => {
    return ( <div style={{marginLeft:"15rem",marginTop:"5rem"}}>
    <Container>
      <Row md={4}>
        <Col className='col-help'>
        <img src={Help1} />
        <h5>Artemis, as a low-code solution for IoT developers, contributes to achieve the SDGs by providing an open-source tool that can 
          streamline the development process for IoT devices.</h5>
        </Col>
        <Col xs={6} className='col-help'>
        <img src={Help2} />
        <h5>By providing a low-code solution, it makes it easier for developers to create new IoT solutions, 
          allowing for more experimentation and innovation in the field of IoT.</h5>
        </Col>
        <Col className='col-help'>
        <img src={Help3} />
        <h5> Additionally, it supports the development of more robust and reliable infrastructure,
           foster entrepreneurship, and support digitalization of various industries..</h5> 
            </Col>
      </Row>
    </Container>
    <Container>
      <Row md={4}>
        <Col className='col-help'>
        <img src={Help1} />
        <h5>Artemis can support the development of smart city applications, such as smart lighting, smart parking, and smart waste management.
           With the help of these IoT solutions, cities can be more efficient, sustainable, and livable.</h5>
        </Col>
        <Col xs={6} className='col-help'>
        <img src={Help2} />
        <h5> Artemis can be considered as a DPG as it aims to benefit everyone and support various global challenges such as the SDGs  </h5>
        </Col>
        <Col className='col-help'>
        <img src={Help3} />
        <h5> providing an open-source and low-code solution for IoT developers,
           which can accelerate innovation, foster entrepreneurship, and support sustainable development.</h5> 
            </Col>
      </Row>
    </Container>
    </div> );
}
 
export default Helpoint;