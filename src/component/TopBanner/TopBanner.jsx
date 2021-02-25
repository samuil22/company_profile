import React, { Component, Fragment} from 'react';

import {Container,Row,Col,Button} from "react-bootstrap";
import axios from "axios";
import AppUrl from '../../RestAPI/AppUrl.jsx'
import RestClient from '../../RestAPI/RestClient.jsx'
import Loading from "../loading/Loading.jsx"
class TopBanner extends Component {
    constructor() {
        super();
        this.state={
        title:" ",
        subtitle:" ",
        loaderClass:""
    }
    }
    
    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTop).then(result=>{
            this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle'],loaderClass:"d-none"})
        }).catch(error=>{
            this.setState({
                title:"no data",
                subtitle:"no data", 
            })
        })
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                <span className={this.state.loaderClass}>
                                    <Loading  />
                                </span>
                                
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle mb-3">{this.state.subtitle}</h4>
                                    <Button variant="warning">More Info</Button>{' '}
                                </Col> 
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;