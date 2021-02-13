  
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Image, Text } from 'react-bootstrap'

import codingbg from '../../assets/codingbg.jpg';

import './HeroSection.css'

const HeroSection = () => {
    return(

        <Container fluid className="herocontainer">
        
       
        
        <Row>

            
            <Col lg={4} md={4} sm={12} xs={12} className="textcontainer">
            <h1 className="herotext">Collaborative Coding, Anytime Anywhere !</h1>
            </Col>
        
            <Col lg={8} md={8} sm={12} xs={12}>
                <Image height="100%" width="100%" src={codingbg} className="codingbg" />
            </Col>

        </Row>

    

        </Container>

    )
}

export default HeroSection;