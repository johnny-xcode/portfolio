import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './containers/App'
import Home from './containers/Home'
import Code from './containers/Code'
import Writing from './containers/Writing'
import RecentWork from './containers/RecentWork'
import SideProject from './containers/SideProject'
import Life from './containers/Life'
import Contact from './containers/Contact'

export default (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Code />} />
          <Route path="/experience" element={<Writing />} />
          <Route path="/work" element={<RecentWork />} />
          <Route path="/side-project" element={<SideProject />} />
          <Route path="/life" element={<Life />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
);
