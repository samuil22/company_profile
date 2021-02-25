import React, { Component ,Fragment } from 'react';
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import ProImage from  '../../asset/img/projectOne.png'
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import {Link} from "react-router-dom";
class RecentProjects extends Component {


    constructor(){
        super();
        this.state={
            myData:[]
        }
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.Project3).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList= this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={4} sm={12} className="p-2">
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
             
                <Container>
                <h1 className="serviceMainTitle text-center">Recent Projects</h1>
                    <Row>
                          {myView}
                    </Row>
                </Container>
            </Fragment>
       
       );
    }
}

export default RecentProjects;