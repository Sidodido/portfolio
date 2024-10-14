import React from 'react';
import './App.css';

import Sidebar from './component/sidebar/sidebar.jsx';
import Home from './component/home/home.jsx';
import Resume from './component/resume/resume.jsx';
import Portfolio from './component/portfolio/portfolioComponent.jsx';
import Services from './component/services/services.jsx';
import About from './component/about/about.jsx';
import Pricing from './component/pricing/pricing.jsx';
import Testimonials from './component/testimonials/testimonials.jsx';
import Blog from './component/blog/blog.jsx';
import Contact from './component/contact/contact.jsx';


function App() {
  return (
  <>
  <Sidebar />
  <main className='main'>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Contact />

    


  </main>
  </>
  );
}

export default App;
