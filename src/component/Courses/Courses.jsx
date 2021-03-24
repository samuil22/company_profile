import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import CourseImg1 from '../../asset/img/JavaScript.jpg';
import CourseImg2 from '../../asset/img/java.png';
import {Link} from "react-router-dom";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
import Loading from '../loading/Loading.jsx'
import WentWrong from '../wentWrong/wentWrong.jsx'
class Courses extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            error:false,
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
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
            const myList = this.state.myData;
                const myView = myList.map(myList=>{
                    return <Col  lg={6} md={12} sm={12}>
                                <Row className="p-2">
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="img-fluid" src={myList.small_img}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify">{myList.course_title}</h5>
                                        <p>{myList.short_desc}.</p>
                                        <Link to={"/courseDetails/"+myList.id}>Details</Link>
                                    </Col>
                                </Row>
                            </Col>
                            
                })
                return (
                    <Fragment>
                        <Container>
                        <h1 className="serviceMainTitle text-center">Our Courses</h1>
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

export default Courses;