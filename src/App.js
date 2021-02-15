import React from 'react';
import TopNavigation from './component/TopNavigation/topNavigation.jsx';
import AboutPage from './pages/AboutPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ProtfolioPage from './pages/ProtfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PageTop from './component/PageTop/PageTop.jsx'
import AboutDescription from './component/AboutDescription/AboutDescription.jsx'
import RefundDescription from './component/RefundDescription/RefundDescription.jsx'
import AppRoute from './router/AppRoute.jsx'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
