import React, { Component, Fragment} from 'react';
import TopNavigation from '../component/TopNavigation/topNavigation.jsx'
import PageTop from '../component/PageTop/PageTop.jsx'
import ProjectDetails from '../component/ProjectDetails/ProjectDetails.jsx'
import Footer from '../component/Footer/Footer.jsx'
class ProjectDetailsPage extends Component {


constructor({match}) {
        super();
        this.state={
            projectPassedID:match.params.projectID,
            projectPassedName:match.params.projectName
        }
    }




    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="project details"/>
                <PageTop pagetitle={this.state.projectPassedName}/>
                <ProjectDetails id={this.state.projectPassedID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;