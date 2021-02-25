import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from "recharts";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import ReactHtmlParser from 'react-html-parser';
import WentWrong from '../wentWrong/wentWrong.jsx'
import Loading from '../loading/Loading'
class Analysis extends Component {

    state={
        data:[ ],
        desc:"...",
        error:false,
        loading:true,
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            if(result==null){
                this.setState({error:true})
            }else{
                this.setState({data:result,loading:false})
            }
            
        }).catch(error=>{
            this.setState({error:true})
        })

        RestClient.GetRequest(AppUrl.TechDesc).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else{
                 this.setState({desc:result[0]['tech_decscription'],loading:false})
            }
           
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {
        
        var blue = "rgba(0,115,230,0.8)";
        if(this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){
            return (
                        <Fragment>
                            <Container>
                                <h1 className="serviceMainTitle text-center">Technology Used</h1>
                                <Row>
                                    <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                                    <ResponsiveContainer>
                                        <BarChart width={100} height={300} data={this.state.data}>
                                            <XAxis dataKey="technology" />
                                            <Tooltip />
                                            <Bar dataKey="project" fill={blue}> </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                        
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <p className="text-justify serviceDiscription">{ReactHtmlParser(this.state.desc)}</p>
                                    </Col> 
                                </Row>
                            </Container>
                        </Fragment>
                    );
        }
        else if (this.state.error==true){
            return <WentWrong/>
        }
       
    }
}

export default Analysis;