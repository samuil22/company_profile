import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import webLogo from '../../asset/img/web.svg';
import mobileLogo from '../../asset/img/mobile.svg';
import graphicLogo from '../../asset/img/graphic.svg';
class AllServices extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center pt-5">
                    <Row>

                        <Col  lg={4} md={6} sm={12}>
                             <div className="serviceCard text-center">
                                 <img className="img-fluid pb-3" src={webLogo}/>
                                 <h3 className="serviceName">Web Development</h3>
                                 <p className="serviceDiscription">Some thing about web development and many more.we do nathing.</p>
                             </div>
                        </Col> 
                        <Col lg={4} md={6} sm={12}>
                             <div className="serviceCard text-center">
                                 <img className="img-fluid pb-3" src={mobileLogo}/>
                                 <h3 className="serviceName">Mobile Development</h3>
                                 <p className="serviceDiscription">Some thing about Mobile development and many more.we do nathing.</p>
                             </div>
                        </Col> 
                        <Col lg={4} md={6} sm={12}>
                             <div className="serviceCard text-center">
                                 <img className="img-fluid pb-3" src={graphicLogo}/>
                                 <h3 className="serviceName">Graphic Design</h3>
                                 <p className="serviceDiscription">Some thing about Graphic Design and many more.we do nathing.</p>
                             </div>
                        </Col> 
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllServices;