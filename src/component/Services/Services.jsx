import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import AppUrl from '../../RestAPI/AppUrl.jsx'
import RestClient from '../../RestAPI/RestClient.jsx'
import Loading from '../loading/Loading.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class Services extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Serveices3).then(result=>{
            if(result==null){
                this.setState({loading:false,error:true})
            }else{
                this.setState({myData:result,loading:false})
            }
             
    })
}
    render() {
        if(this.state.loading==true && this.state.error==false){
            return <Loading />
        }else if(this.state.loading==false && this.state.error==false){
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
        else if(this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default Services;