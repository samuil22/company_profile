import React, { Component, Fragment} from 'react';
import {Container,Row,Col,Image,Button } from 'react-bootstrap';
import ProImage from  '../../asset/img/projectOne.png'
import {Link} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import Loading from '../loading/Loading.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class ProjectDetails extends Component {


    constructor(props){
        super();
        this.state={
            MyProjectID:props.id,
            myProjectName:props.name,
            project_short_description:"",
            project_feature:"",
            project_url_live:"",
            project_imgtwo:"",
            project_name:"",
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false});
            }else{
                this.setState({
                project_imgtwo:result[0]['project_imgtwo'],
                project_feature:result[0]['project_feature'],
                project_url:result[0]['project_url_live'],
                project_short:result[0]['project_short_description'],
                project_name:result[0]['project_name'],
                loading:false
            })
            }
            

        }).catch(err=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {

        if(this.state.loading==true && this.state.error==false){
            return <Loading />
        }
        else if(this.state.loading==false && this.state.error==false){
            return (
            <Fragment>
                <Container> 
                    <Row>
                        <Col lg={6} md={6} sm={12} className="p-2">
                            <Image  className="p-3 img-fluid" variant="top" src={this.state.project_imgtwo} /> 
                        </Col>
                        <Col lg={6} md={6} sm={12} className="p-2">
                            <h5 className="serviceName">{this.state.MyProjectID}</h5>
                            <h4 className="serviceName">{this.state.project_name}</h4>

                            <p className="">{this.state.project_short}</p>
                            
                            {ReactHtmlParser(this.state.project_feature)}
                            <Button target="_blank" href={"//"+this.state.project_url} varient="primary"> Go to Website </Button>
                        </Col>
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

export default ProjectDetails;