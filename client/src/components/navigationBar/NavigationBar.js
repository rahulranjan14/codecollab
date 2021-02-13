import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
// import { createproject } from '../../helper/index'
import { API } from '../../backend'
import {  Container, Navbar, NavDropdown, Button, Nav, Modal } from 'react-bootstrap';
import './NavigationBar.css'
import { json, text } from 'body-parser';


var projectId;
var projectName;
var projectUrl = null;

// var isWorkpage = false;

const NavigationBar = () => {

    

  //for form values
  const [values, setValues] = useState({
    name : "",
    error: "",
    success : false
  })

  const { name, error, success } = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  //for url
  function HeaderView() {
    const location = useLocation();
    var temppathbeg = "http:localhost:3000"
    var temppath = location.pathname
    var res = temppathbeg.concat(temppath)
    projectUrl = res;
    console.log("url is",res);
    return <span>Path : {location.pathname}</span>
  }
  HeaderView();
 

  //making api call for creating project
  const createproject = project => {
      return fetch(`${API}/createproject`, {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(project)
      })
      .then(response => response.text())
      .then((text) => {
        console.log(text)
        var temp =  JSON.parse(text)
        console.log("project id is --",temp.project._id)
        var projectid = temp.project._id
        projectId = projectid
        projectName = temp.project.name
        //  setProjectId(projectid)
        console.log("project ID local --", projectid)
        console.log("project ID global --", projectId)


      })
      .catch(err => console.log(err))
  }


  

  //handling submit button
  const handleSubmit = event => {
    event.preventDefault()
    setValues({...values, error: false})
    createproject({name})
    .then(data => {
      if(data?.error){
        setValues({...values, error: data.error, success: false})
      }else{
        setValues({
          ...values,
          name: "",
          error: "",
          success: true
        })
      }
      console.log("project creation successfull -- ", name)
      handleClose()
      handleShowSuccess()
      // isWorkpage = true
    })
    .catch(console.log("error in creating project", name))
  }


  //constants for modals
   const [show, setShow] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
   const [showSharable, setShowSharable] = useState(false)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleCloseSuccess = () => setShowSuccess(false)
   const handleShowSuccess = () => setShowSuccess(true)

   const handleCloseSharable = () => setShowSharable(false)
   const handleShowSharable = () => setShowSharable(true)

 

 
    //for projectpage
    const projectpagelink = `/project/${projectId}`

    const onclickshare = () => {
      navigator.clipboard.writeText(projectUrl) && handleShowSharable()
      
    }

    return (
      <>
        
        <Navbar collapseOnSelect expand="lg"  className="navbar  navclass" >
          <Navbar.Brand><Link to="/" style={{textDecoration:'none', color:'#fff', padding:'0px 10px'}}>Code-Collab </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
              
              <Nav.Link><Button variant="outline-light" onClick={handleShow}>Create New Project</Button> </Nav.Link>

              {projectUrl != null && (
                <Nav.Link><Button variant="outline-light"  onClick={onclickshare} >Share</Button> </Nav.Link>
                )}
              
              
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       


        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the name of project.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="form-group d-flex justify-content-center">
         <input type="text" className="form-control" placeholder="project name" value={name} onChange={handleChange("name")}/> 
        </div>
        </form>
        {/*<p>{JSON.stringify(values)}</p>  */}
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-block btn-dark" onClick={handleSubmit}>
            Create project
          </Button>
         
        </Modal.Footer>
        </Modal>


        <Modal show={showSuccess} onHide={handleCloseSuccess} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project "{projectName}" created successfully.</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-block btn-dark" >
          <Link to= {projectpagelink} style={{textDecoration:'none', color:'#fff'}}>
            Go to project.
            </Link>
          </Button>
         
        </Modal.Footer>
        </Modal>


        

        <Modal show={showSharable} onHide={handleCloseSharable} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sharable link copied to clipboard.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        {/*<p>{JSON.stringify(values)}</p>  */}
        {projectUrl}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-block btn-dark" onClick={handleCloseSharable}>
            Share with your friends
          </Button>
         
        </Modal.Footer>
        </Modal>

        </>
    );
  }
  
  export default NavigationBar;
  