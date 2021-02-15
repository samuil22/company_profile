import React, { Component, Fragment} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ReviewCircleImg from '../../asset/img/sabbir.jpeg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from '../../RestAPI/RestClient.jsx'
import AppUrl from '../../RestAPI/AppUrl.jsx'
class ClientReview extends Component {


  constructor() {
    super();
    this.state={
      myData:[]
    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
      this.setState({myData:result})
    })
  }

    render() {
        var settings = {
            dots: true,
            autoplay:true,
            autoplaySpeed:3000,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            vertical:true,
            verticalSwiping: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

         const myList = this.state.myData;
         const myView = myList.map(myList=>{
            return <div>
                        <Row className="justify-content-center">
                          <Col lg={6} md={6} sm={12}>
                            <img className="img-fluid CircleImage" src={myList.client_logo}/>
                            <h1 className="serviceName">{myList.client_title}</h1>
                            <p className="serviceDiscription">{myList.client_description}</p>
                          </Col>
                        </Row> 
                    </div>
         })
        return (
            <Fragment>
                <Container>
                <h1 className="serviceMainTitle text-center">Client Review</h1>
                    <Row>
                      <Col className="text-center ">
                        <Slider {...settings}>
                           {myView}
                        </Slider>
                      </Col> 
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;