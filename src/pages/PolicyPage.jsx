import React, { Component , Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import Policy from '../component/Policy/policy.jsx'
import Footer from '../component/Footer/Footer.jsx'
class PolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="privacy policy"/>
                <PageTop pagetitle="Privacy and Policy"/>
                <Policy />
                <Footer/>
            </Fragment>
        );
    }
}

export default PolicyPage;