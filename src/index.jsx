import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './components/app/App';
import Projects from './components/projects/Projects';
import Bulletin from './components/bulletin/Bulletin';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';

const container = document.getElementById('root'); // Get the root DOM element
const root = createRoot(container, {
  onUncaughtError: (error, errorInfo) => {
    // ... log error report
  },
  onCaughtError: (error, errorInfo) => {
    // ... log error report
  }
});

root.render(
  <BrowserRouter>
    <Topbar />
    <Route exact path="/" component={App} />
    <Route exact path="/home" component={App} />
    <Route exact path="/contact_us" component={Projects} />
    <Route exact path="/bulletin" component={Bulletin} />
    <Footer />
  </BrowserRouter>,
); // Render your App component using the root instance