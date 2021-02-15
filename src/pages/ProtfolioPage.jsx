import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import AllProjects from '../component/AllProjects/AllProjects.jsx'
import Footer from '../component/Footer/Footer.jsx'
class ProtfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pagetitle="All Projects"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProtfolioPage;