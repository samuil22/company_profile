import React, { Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import ServicePage from "../pages/ServicesPage.jsx"
import CoursePage from "../pages/CoursesPage.jsx"
import PortfolioPage from "../pages/ProtfolioPage.jsx"
import ContactPage from "../pages/ContactPage.jsx"
import AboutPage from "../pages/AboutPage.jsx"
import RefundPage from "../pages/RefundPage.jsx"
import TermsPage from "../pages/TermsPage.jsx"
import PolicyPage from "../pages/PolicyPage.jsx"
import ProjectDetailsPage from "../pages/ProjectDetailsPage.jsx"
import CourseDetails from "../pages/CourseDetailsPage.jsx"
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/policy" component={PolicyPage}/>
                    <Route exact path="/projectDetails" component={ProjectDetailsPage}/>
                    <Route exact path="/courseDetails" component={CourseDetails}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;