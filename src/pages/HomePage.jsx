import React, { Component, Fragment} from 'react';
import TopBanner from '../component/TopBanner/TopBanner.jsx';
import Services from '../component/Services/Services.jsx';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx';
import Analysis from '../component/Analysis/Analysis.jsx';
import Summary from '../component/Summary/Summary.jsx';
import RecentProjects from '../component/RecentProjects/RecentProjects.jsx';
import Courses from '../component/Courses/Courses.jsx'
import Video from '../component/Video/Video.jsx'
import ClientReview from '../component/ClientReview/ClientReview.jsx'
import Footer from '../component/Footer/Footer.jsx'
class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Home"/>
                    <TopBanner/>
                    <Services/>
                    <Analysis/>
                    <Summary/>
                    <RecentProjects/>
                    <Courses/>
                    <Video />
                    <ClientReview/>
                    <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;