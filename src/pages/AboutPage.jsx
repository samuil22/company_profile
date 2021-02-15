import React, { Component,Fragment } from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import AboutDescription from '../component/AboutDescription/AboutDescription.jsx'
import Footer from '../component/Footer/Footer.jsx'
class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;