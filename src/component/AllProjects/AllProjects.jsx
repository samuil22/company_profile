import React, { Component,Fragment } from 'react';
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import ProImage from  '../../asset/img/projectOne.png'; 
import {Link} from "react-router-dom";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import Loading from '../loading/Loading.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class AllProjects extends Component {
    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false});
            }else{
                 this.setState({myData:result,loading:false})
            }
           
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }
    render() {
        if(this.state.loading==true && this.state.error==false){
            return <Loading />
        }else if(this.state.loading==false && this.state.error==false){
            const myList= this.state.myData;
            const myView = myList.map(myList=>{
                return  <Col lg={4} md={4} sm={12} className="p-2">
                            <Card >
                                <Card.Img className="p-3" variant="top" src={myList.project_img} />
                                <Card.Body>
                                    <Card.Title>{myList.project_name}</Card.Title>
                                    <Card.Text>
                                    {myList.project_short_description}
                                    </Card.Text>
                                    <Button><Link className="linkStyle" to={"/projectDetails/"+myList.id+"/"+myList.project_name}>Go to Website</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col> 
            })
    
            return (
                <Fragment>
                 
                    <Container className="pt-5"> 
                        <Row>
                             
                             {myView}
                            
                        </Row>
                    </Container>
                </Fragment>
           
            ); 
            }else if(this.state.error==true){
                return <WentWrong/>
            }
        
    }
}

export default AllProjects;