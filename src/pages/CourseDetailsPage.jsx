import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import CourseDetails from '../component/CourseDetails/CourseDetails.jsx'
import Footer from '../component/Footer/Footer.jsx'
class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;