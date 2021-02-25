import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons';
import {NavLink,Link} from "react-router-dom";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class Footer extends Component {
    constructor(){
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:"",
            error:false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false});
            }else{
                this.setState({address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                facebook: result[0]['facebook'],
                youtube: result[0]['youtube'],
                footer_credit: result[0]['footer_credit'],})
            }
        }).catch(error =>{
            this.setState({error:true,loading:false});
        })
    }
    render() {
        if(this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className="footerSection p-3">
                        <Row>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4>Fllow Me</h4> 
                                <p><a href={"//"+this.state.facebook} target="_blank"><FontAwesomeIcon className="iconBullet" icon={faFacebook} /> Facebook</a></p>
                                <p><a href={"//"+this.state.youtube} target="_blank"><FontAwesomeIcon className="iconBullet" icon={faYoutube} /> Youtube</a></p> 
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4>Address</h4>
                                <p className="serviceDiscription">{this.state.address}</p>
                                <p className="serviceDiscription"><FontAwesomeIcon className="iconBullet" icon={faEnvelope}/> {this.state.email}</p> 
                                <p className="serviceDiscription"><FontAwesomeIcon className="iconBullet" icon={faPhone} /> {this.state.phone}</p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4>Information</h4> 
                                <p><Link to="/about">About me</Link></p>  
                                <p><Link to="/contact">Contact</Link></p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className="p-5">
                                <h4>Legal</h4> 
                                <p>
                                <Link exact activeStyle={{color:'#00a8ee'}}  to="/refund">Refund Policy</Link>
                                </p> 
                                <p>
                                <Link exact activeStyle={{color:'#00a8ee'}}  to="/terms">Terms And Condition</Link>
                                </p>
                                <p> 
                                <Link exact activeStyle={{color:'#00a8ee'}}  to="/policy">Privacy Policy </Link>
                                </p> 
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="text-center copyRight">
                        <a href="#">{this.state.footer_credit}</a>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong />
        }
        
    }
}

export default Footer;