import React, { Component ,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import loading from "../../asset/img/loader.svg"
class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="img-fluid" src={loading}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;