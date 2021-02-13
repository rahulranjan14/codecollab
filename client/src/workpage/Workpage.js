import React,{ useState, useEffect } from 'react'
import NavigationBar from '../components/navigationBar/NavigationBar'
import Footer from '../components/footer/Footer'
import { updateproject, getproject } from '../helper/index'
import { Container, Col, Row, Button } from 'react-bootstrap'

import './Workpage.css'

const Workpage = ({match}) => {


  const [values, setValues] = useState({
    name: "",
    code: "",
    error: "",
    loading: false
  })

  const {name, code, error, loading} = values;

  const preload = (projectId) => {
    getproject(projectId).then(data => {
      if(data?.error){
        setValues({...values, error: data.error})
      }else{
        setValues({
          ...values,
          name: data.name,
          code: data.code
        })
      }
    })
    console.log(values)
  }


  useEffect(() => {
    preload(match.params.projectid)
  }, [])



  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }


  
    const handleSubmit = event => {
      event.preventDefault()
      setValues({...values, error: false})
      updateproject(match.params.projectid, {code})
      .then(data => {
        if(data.error){
          setValues({...values, error: data.error, success: false})
        }else{
          setValues({
            ...values,
            code: code,
            error: "",
            success: true
          })
        }
      })
      .catch(console.log("error in updating project", code))
    }

    

    return (
      <>
       <NavigationBar />   
      <Container fluid>
      <Row>
        <Col xl={9} lg={12} md={12} sm={12} xs={12} className="childcontainer1">
     <textarea  name="" id="" value={code} spellcheck="false" onChange={handleChange("code")} className="codearea" cols="" rows=""></textarea> 
   
        </Col>

        <Col xl={3} lg={12} md={12} sm={12} xs={12} className="childcontainer2">
          
          <div className="headingcontainer">
          <h2 className="chatheading">Project - {name}</h2>
          <button onClick={handleSubmit} className="" style={{paddingTop:5 , paddingBottom:7, marginTop:2, marginBottom:2, marginLeft:30 , backgroundColor:"#120E43", color:"#fff", border:"1px solid #fff", borderRadius:"5px"}}> save </button>
          </div>


        {/*  <div class="chatcontainer">
          
          <div className="message">Tom: Hello</div>
          <div className="message">John: lets start the xyz web project</div>
          <div className="message">Jane: Have you gone through client requirements</div>
          <div className="message">Jenny: yes</div>
          <div className="message">John:yes</div>
          <div className="message">Tom: yes</div>
          <div className="message">John:Which framework should we use ?</div>
          <div className="message">Jane: I think nodejs would be fine</div>
          <div className="message">Tom: yeah i agree</div>
          <div className="message">John:me too</div>
          <div className="message">Jane: node js will be good choice for this project</div>
          <div className="message">Tom: ok lets go for nodejs</div>
          <div className="message">Jane: what should we use in front end?</div>
          <div className="message">John:shall we go for framwork or template engine or plain html</div>
          <div className="message">Jane: I guess react would be fine for this project</div>
          <div className="message">Jane: yeah lets do react</div>
          <div className="message">Tom: and database ?</div>
          <div className="message">Jane: MongoDB</div>
          <div className="message">Jane: MongoDB</div>
          <div className="message">Jane: MongoDB</div>
          <div className="message">Jane: ok lets start</div>
          <div className="message">Tom: lets build frontend front</div>
          <div className="message">Jane: yeah, lets start</div>
          <div className="message">Jane: functional or class components</div>
          <div className="message">Jane: functional are easy</div>
          <div className="message">Jane: lorem ipsum </div>
          <div className="message">Tom: lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">Tom: lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
          <div className="message">lorem ipsum </div>
         
          
          </div>


          <div class="send">
            <form action="#" id="">
            <button style={{height:60, width:60 , marginTop:0, marginBottom:0, marginLeft:3, marginRight:3 , backgroundColor:"brown", color:"#fff", border:"2px solid black", borderRadius:"5px"}} className="photobtn">photo</button>
                <textarea  type="text" name="messageInp" className="messageinput" id="" />
                <button style={{height:60, width:60 , marginTop:-20, marginBottom:0, marginLeft:3 ,marginRight:3 ,  backgroundColor:"brown", color:"#fff", border:"2px solid black", borderRadius:"5px"}} className="sendbtn">send</button>
            </form>
    </div>*/}

    </Col>
      </Row>
      </Container>
   
      </>
    );
  }
  
  export default Workpage;
  