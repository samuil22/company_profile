import React, { Component,Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import AllCourses from '../component/AllCourses/AllCourses.jsx'
import Footer from '../component/Footer/Footer.jsx'
class CoursesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"/>
                 <PageTop pagetitle="All Courses"/>
                 <AllCourses/> 
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;