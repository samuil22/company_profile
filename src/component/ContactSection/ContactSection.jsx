import React, { Component, Fragment} from 'react';
import {Container, Row,Col,Form,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons';
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
class ContactSection extends Component {
    constructor(){
        super();
        this.state={
            address:"",
            email:"",
            phone:""  

        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({address: result[0]['address'],
            email: result[0]['email'],
            phone: result[0]['phone'] 
        })
        })
    }

    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;
        
        let jsonObject={name:name,email:email,msg:msg};

        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result =>{
            alert(result)
        }).catch(error=>{
            alert("Error")
        })
    }
    render() {
        return (
            <Fragment>
                <Container className="p-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="name" type="text"  />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control id="email" type="email"  />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="msg"  as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" onClick={this.sendContact} >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h4>Discuss Now</h4>
                            <p className="serviceDiscription">{this.state.address}</p>
                            <p className="serviceDiscription"><FontAwesomeIcon className="iconBullet" icon={faEnvelope}/> {this.state.email}</p> 
                            <p className="serviceDiscription"><FontAwesomeIcon className="iconBullet" icon={faPhone} /> {this.state.phone}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;