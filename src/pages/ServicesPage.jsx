import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import AllServices from '../component/AllServices/AllServices.jsx'
import Footer from '../component/Footer/Footer.jsx'
class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <PageTop pagetitle="Services"/>
                <AllServices/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;