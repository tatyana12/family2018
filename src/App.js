import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './events.json';

const Index = () => <h2>Home</h2>;
const One = () => <h2>One</h2>;
const Two = () => <h2>Two</h2>;
const Three = () => <h2>Three</h2>;
const Four = () => <h2>Four</h2>;
const Five = () => <h2>Five</h2>;
const Six = () => <h2>Six</h2>;
const Seven = () => <h2>Seven</h2>;
const Eight = () => <h2>Eightt</h2>;
const Nine = () => <h2>Nine</h2>;
const Ten = () => <h2>Ten</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/one/">One</Link>
          </li>
          <li>
            <Link to="/two/">Two</Link>
          </li>
          <li>
            <Link to="/three/">Three</Link>
          </li>
          <li>
            <Link to="/four/">Four</Link>
          </li>
          <li>
            <Link to="/five/">Five</Link>
          </li>
          <li>
            <Link to="/six/">Six</Link>
          </li>
         <li>
            <Link to="/seven/">Seven</Link>
          </li>
         <li>
            <Link to="/eight/">Eight</Link>
          </li>
         <li>
            <Link to="/nine/">Nine</Link>
          </li>
         <li>
            <Link to="/ten/">Ten</Link>
          </li>
        </ul>
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
