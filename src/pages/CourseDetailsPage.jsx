import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import CourseDetails from '../component/CourseDetails/CourseDetails.jsx'
import Footer from '../component/Footer/Footer.jsx'
 
class CourseDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
        coursePassID:match.params.courseID
    }
}

    componentDidMount() {
        window.scroll(0,0)

       
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails id={this.state.coursePassID}/>
                <div>
                    <h1>What is this</h1>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;