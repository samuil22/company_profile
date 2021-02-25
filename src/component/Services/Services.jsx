import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import AppUrl from '../../RestAPI/AppUrl.jsx'
import RestClient from '../../RestAPI/RestClient.jsx'
class Services extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Serveices3).then(result=>{
             this.setState({myData:result})
    })
}
    render() {

        const myList= this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="img-fluid pb-3" src={myList.service_logo}/>
                            <h3 className="serviceName">{myList.service_name}</h3>
                            <p className="serviceDiscription">{myList.service_decription}</p>
                        </div>
                    </Col> 
        })

        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">MY SERVICE</h1>
                    <Row>

                         {myView}
                         
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;