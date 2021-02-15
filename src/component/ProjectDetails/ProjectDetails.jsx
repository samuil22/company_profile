import React, { Component, Fragment} from 'react';
import {Container,Row,Col,Image,Button } from 'react-bootstrap';
import ProImage from  '../../asset/img/projectOne.png'
import {Link} from 'react-router-dom'
class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container> 
                    <Row>
                        <Col lg={6} md={6} sm={12} className="p-2">
                            <Image  className="p-3 img-fluid" variant="top" src={ProImage} /> 
                        </Col>
                        <Col lg={6} md={6} sm={12} className="p-2">
                            <h5 className="serviceName">Foll Bazzar</h5>
                            <p className="">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                            <ul>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button varient="primary"><Link className="linkStyle" href=" ">Go to Website</Link></Button>
                        </Col>
                    </Row> 
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;