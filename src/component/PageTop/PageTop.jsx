import React, { Component,Fragment } from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TopPageBanner p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="pageTitle">{this.props.pagetitle}</h1> 
                                </Col> 
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;