import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import RefundDescription from '../component/RefundDescription/RefundDescription.jsx'
import Footer from '../component/Footer/Footer.jsx'
class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
               <TopNavigation title="Refund policy"/>
                <PageTop pagetitle="Refund Policy"/>
                <RefundDescription/>
                <Footer/> 
            </Fragment>
        );
    }
}

export default RefundPage;