import React,{useState} from 'react'

import {
    Container,
    Row,
    Navbar,
    NavDropdown,
    Button,
    Nav,
    Modal,
    Col
} from 'react-bootstrap';

import './Footer.css'


const Footer = () => {
    return(
        <Container fluid style={{backgroundColor:'#000', paddingTop:"5px", paddingBottom:"5px"}}>
        <Row >
        <Col lg={1}></Col>
        <Col lg={5} className="" style={{alignItems:'center', justifyContent:"center", paddingTop:"20px", paddingBottom:"5px"}}>
            <h5 className="text-white">Code collab is platform for coders to do collaborative coding</h5>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Col>
        <Col lg={2}></Col>
        <Col lg={2} style={{paddingTop:"20px", paddingBottom:"5px"}}>
        <p className="text-white text-small">developed by:-</p>
        <p className="text-white">• Neeraj Kumar</p>
        <p className="text-white">• Payal Rani</p>
        <p className="text-white">• Rahul Ranjan</p>
        </Col>
        <Col lg={2}></Col>
        </Row>
        </Container>
    )
}

export default Footer;