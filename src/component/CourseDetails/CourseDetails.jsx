import React, { Component, Fragment} from 'react';
import {Container,Row,Col,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ProImage from '../../../src/asset/img/projectOne.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import  "video-react/dist/video-react.css";
import {Player,BigPlayButton  } from "video-react"
import ReactHtmlParser from 'react-html-parser';
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
class CourseDetails extends Component {

    constructor(props) {
        super();
        this.state={
            coursePassID:props.id,
             course_title:"",
             long_title:"",
             long_dec:"",
             total_lecture:"",
             total_student:"",
             skill_all:"",
             video_url:"",
             course_link:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.coursePassID).then(result => {
            this.setState({
                courseData:result,
                long_title:result[0]['long_title'],
            course_title:result[0]['course_title'],
            long_dec:result[0]['long_dec'],
            total_lecture:result[0]['total_lecture'],
            total_student:result[0]['total_student'],
            skill_all:result[0]['skill_all'],
            video_url:result[0]['video_url'],
            course_link:result[0]['course_link'],

            })
        }).catch(error => {

        })
    }
    render() {

        return (

            <Fragment>
                <Container fluid={true} className="TopPageBanner p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent text-white">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    
                                    <h3>{this.state.long_title}</h3>
                                    <p className="mb-0 goldenFont">Total Student = {this.state.total_student}</p>
                                    <p className="goldenFont">Total video = {this.state.total_lecture}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}> 
                                    <h5>{this.state.long_dec}</h5>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            
                <Container className="p-5 mt-5"> 
                    <Row> 
                        <Col lg={6} md={6} sm={12} className="p-2 pt-5">
                            <h1>{this.state.long_title}</h1>
                            <h5 className="serviceName">Skill You Get</h5>
                              {/* <ul className="serviceDetailsUl">
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                                <li><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Unlimited Dynamic Product Category</li>
                            </ul> */}
                            {ReactHtmlParser(this.state.skill_all)}
                            <Button target="_blank" href={"//"+this.state.course_link} varient="primary"> Go to Website </Button>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pt-5">
                            <Player
                                
                                poster="../../asset/img/java.png"
                                src={this.state.video_url}
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