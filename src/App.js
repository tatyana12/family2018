import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import data from './events.json';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Five from "./Five";
import Four from "./Four";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
//import Index from "./Home";

const Index = () => <h2></h2>;
// const One = () => <h2>One</h2>;
//const Two = () => <h2>Two</h2>;
//const Three = () => <h2>Three</h2>;
//const Four = () => <h2>Four</h2>;
//const Five = () => <h2>Five</h2>;
//const Six = () => <h2>Six</h2>;
//const Seven = () => <h2>Seven</h2>;
//const Eight = () => <h2>Eightt</h2>;
//const Nine = () => <h2>Nine</h2>;
//const Ten = () => <h2>Ten</h2>;

const AppRouter = () => (
  <Router>
    <div>
        <center><Link to="/">Events  information</Link></center>
      <nav>
       <ol>
         <li>
           <Link to="/one/">ReactJS vs Angular</Link>
         </li>
          <li>
            <Link to="/two/">Advantages of Node</Link>
          </li>
          <li>
            <Link to="/three/">Will Vue JS substitute React JS?</Link>
          </li>
          <li>
            <Link to="/four/">Choosing the right JS Framework</Link>
          </li>
          <li>
            <Link to="/five/">Right approach to Node JS</Link>
          </li>
          <li>
            <Link to="/six/">We are all about JavaScript</Link>
          </li>
         <li>
            <Link to="/seven/">Differences between JavaScript and EcmaScript</Link>
          </li>
         <li>
            <Link to="/eight/">JavaScript Interview</Link>
          </li>
         <li>
            <Link to="/nine/">JavaScript Interview</Link>
          </li>
         <li>
            <Link to="/ten/">Why Node JS?</Link>
          </li>
        </ol>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/one/" component={One} />
      <Route path="/two/" component={Two} />
      <Route path="/three/" component={Three} />
      <Route path="/four/" component={Four} />
      <Route path="/five/" component={Five} />
      <Route path="/six/" component={Six} />
      <Route path="/seven/" component={Seven} />
      <Route path="/eight/" component={Eight} />
      <Route path="/nine/" component={Nine} />
      <Route path="/ten/" component={Ten} />
    </div>
  </Router>
);

export default AppRouter;

