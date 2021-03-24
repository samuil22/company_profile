import React, { Component ,Fragment } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import WrongIcon from "../../asset/img/warning.svg"
class wentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            {/* <img className="img-fluid" src={WrongIcon}/> */}
                            <h1>Data Not Found</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default wentWrong;