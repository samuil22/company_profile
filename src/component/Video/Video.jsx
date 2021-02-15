import React, { Component, Fragment} from 'react';
import {Container,Row,Col,Modal,Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import  "video-react/dist/video-react.css";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import {Player,BigPlayButton  } from "video-react"

class Video extends Component {

    state={
        show: false,
        video_description: "",
        video_url: "",

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result=>{
            this.setState({video_url:result[0]['video_url'],
            video_description:result[0]['video_description']
        })
        })
    }

    modalClose=()=>{
        this.setState({show: false});
    }
    modalOpen=()=>this.setState({show: true});

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="videoCard text-center" lg={12} md={12} sm={12}>
                            <div >
                                <p className="videoTitle">How i do!</p>
                                <p className="videoDec">{this.state.video_description}</p>
                                <p className=""><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}> 
                    <Modal.Body>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={this.state.video_url}
                            >
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.modalClose}>
                        Close
                    </Button> 
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;