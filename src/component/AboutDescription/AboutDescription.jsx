import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import ReactHtmlParser from 'react-html-parser';
import Loading from '../loading/Loading.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class AboutDescription extends Component {

    constructor() {
        super();
        this.state={
            data:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.AboutInfometion).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else{
                this.setState({
                data:result[0]['about'],
                loading:false
                })
            }
            
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }
    render() {
        if(this.state.loading==true && this.state.error==false){
            return <Loading />
        }else if(this.state.loading==false && this.state.error==false){
            return (
            <Fragment>
                <Container className="p-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            {ReactHtmlParser(this.state.data)}
                        </Col> 
                    </Row>
                </Container>
            </Fragment>
        );
        }else if(this.state.error==true){
            return <WentWrong/>
        }
        
    }
}

export default AboutDescription;