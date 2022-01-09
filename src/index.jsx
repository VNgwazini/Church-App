import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Bulletin from './components/bulletin/Bulletin';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';


ReactDOM.render(
    <BrowserRouter>
    <Topbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/bulletin" component={Bulletin}/>
    <Footer/>
    </BrowserRouter>,
  document.getElementById('root')
);