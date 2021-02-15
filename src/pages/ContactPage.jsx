import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import Contact from '../component/ContactSection/ContactSection.jsx'
import Footer from '../component/Footer/Footer.jsx'
class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <PageTop pagetitle="Contact" />
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;