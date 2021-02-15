import React, { Component, Fragment } from 'react';
import {Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import WhiteLogo from '../../asset/img/navlogo.svg'
import BlueLogo from '../../asset/img/navlogoScroll.svg'
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
class topNavigation extends Component {
constructor(props) {
    super();
    this.state={
        navBarTitle:"navTitle",
        navBarLogo:[WhiteLogo],
        navBarBg:"navBarBgNone",
        navBarItem:"navItem",
        pageTitle:props.title
    }
}

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[BlueLogo], navBarBg : 'navBarBgWhite',navBarItem:'navItemScroll'} )
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarLogo:[WhiteLogo], navBarBg : 'navBarBgNone',navBarItem:'navItem'} )
        }
    }


    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
            <title>{this.state.pageTitle}</title>
                <Navbar fixed="top" className={this.state.navBarBg}  expand="lg">
                    <Navbar.Brand ><NavLink className={this.state.navBarTitle} to="/"><img  src={this.state.navBarLogo}/> SABBIR</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                                
                            </Nav> 

                        </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default topNavigation;