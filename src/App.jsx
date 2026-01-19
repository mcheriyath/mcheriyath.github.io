import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';
import ExperienceDetail from './pages/ExperienceDetail';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="experience/:id" element={<ExperienceDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
