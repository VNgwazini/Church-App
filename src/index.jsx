import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './components/app/App';
import Projects from './components/projects/Projects';
import Bulletin from './components/bulletin/Bulletin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/contact_us" element={<Projects />} />
      <Route path="/bulletin" element={<Bulletin />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);