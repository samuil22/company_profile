import React, { Component, Fragment} from 'react';
import {Container,Row,Col,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ProImage from '../../../src/asset/img/projectOne.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import  "video-react/dist/video-react.css";
import {Player,BigPlayButton  } from "video-react"
class CourseDetails extends Component {
    render() {
        return (

            <Fragment>
                <Container fluid={true} className="TopPageBanner p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent text-white">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3>Full Dynamic Website With Admin Panel</h3>
                                    <p className="mb-0 goldenFont">Total Student = 30</p>
                                    <p className="goldenFont">Total video = 30</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}> 
                                    <p>Unlimited Dynamic Product CategoryUnlimited Dynamic Product CategoryUnlimited Dynamic Product CategoryUnlimited Dynamic Product CategoryUnlimited Dynamic Product CategoryUnlimited Dynamic Product Category</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            
                <Container className="p-5 mt-5"> 
                    <Row> 
                        <Col lg={6} md={6} sm={12} className="p-2 pt-5">
                            <h5 className="serviceName">Skill You Get</h5>
                              <ul className="serviceDetailsUl">
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button varient="primary"><Link className="linkStyle" href=" ">Go to Website</Link></Button>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-5">
                            <Player
                                
                                poster="../../asset/img/java.png"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                >
                                <BigPlayButton position="center" />
                            </Player> 
                        </Col>
                    </Row> 
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;