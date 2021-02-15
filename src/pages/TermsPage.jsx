import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import TermsConditions from '../component/TermsCondition/TermsCondition.jsx'
import Footer from '../component/Footer/Footer.jsx'
class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsConditions/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;