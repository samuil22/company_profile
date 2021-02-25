import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import ReactHtmlParser from 'react-html-parser';
import Loading from '../loading/Loading.jsx'
class RefundDescription extends Component {
    constructor(){
        super();
        this.state={
            data:"",
            loading:true
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.AboutInfometion).then(result=>{
            this.setState({
                data:result[0]['refund'],
                loading:false
            })
        })
    }
    render() {
        if(this.state.loading==true){
            return <Loading />
        }else{
           return (
            <Fragment>
            <Container className="m-5">
                <Row>
                    <Col sm={12} lg={12} md={12}>
                        {ReactHtmlParser(this.state.data)}
                    </Col> 
                </Row>
            </Container>
        </Fragment>
        ); 
        }
        
    }
}

export default RefundDescription;