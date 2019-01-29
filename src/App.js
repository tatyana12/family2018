import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import  { Link } from ‘react-router-dom’;
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
//const Index = () => <h2>Home</h2>;
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
        <center><Link to="/">

             <button type="button" className="button">

             Familie's  information (2018)</button>


         </Link></center>
         
      <center><div class="shadowbox"><body id="myBody">
        <a href="#myBody">Make it dark</a></body></div></center>
  
      <center><div class="shadowbox"><body id="myBody">
        <a href="#myBody">Or Blue</a></body></div></center>
     
      <center><div class="shadowbox"><body id="myBody">
        <a href="#myBody">Or White</a></body></div></center>






     <div className="row">
     <div className="column">
      <div>
          <Link to="/one/">
              <img src={"/T.-s.jpg"}/>

         </Link>

      </div>
      <div>
            <Link to="/two/">
              <img src={"/M3s.jpg"}/>

           </Link>
      </div>
      <div>
            <Link to="/three/">
                <img src={"/O.jpg"}/>

          </Link>
      </div>
      <div>
            <Link to="/four/">
                     <img src={"/a2s.jpg"}/>
            </Link>
      </div>

      <div>
            <Link to="/five/">
                    <img src={"/Ds3.jpg"}/>
           </Link>
      </div>
      <div>
             <Link to="/six/">

                 <img src={"/den-s.png"}/>

          </Link>
      </div>

      <div>
            <Link to="/seven/">
                 <img src={"/m2s.jpg"}/>

             </Link>
      </div>
      <div>

            <Link to="/eight/">
               <img src={"/es2.jpg"}/>

          </Link>
      </div>
      <div>
            <Link to="/nine/">

                 <img src={"/ns2.jpg"}/> 



         </Link>
      </div>
     
      </div>
      <div className="column">
        <Route path="/" exact component={Index} />
          <div className="content">
            <Route path="/one/" component={One} />
          </div>
          <div className="content">
            <Route path="/two/" component={Two} />
          </div>
          <div className="content">
            <Route path="/three/" component={Three} />
          </div>
          <div className="content">
            <Route path="/four/" component={Four} />
          </div>
          <div className="content">
            <Route path="/five/" component={Five} />
          </div>
          <div className="content">
            <Route path="/six/" component={Six} />
          </div>
          <div className="content">
            <Route path="/seven/" component={Seven} />
          </div>
          <div className="content">
            <Route path="/eight/" component={Eight} />
          </div>
          <div className="content">
            <Route path="/nine/" component={Nine} />
          </div>
          <div className="content">
            <Route path="/ten/" component={Ten} />
          </div>

      </div>
      </div>


    </div>
  </Router>
);

export default AppRouter;

class App extends Component {
  render() {
    return (
      <div className="App">

            { data.map(function(people){
                return <li>{people.id} - {people.name}</li>
             }



              )}

        <header className="App-header">

         
        </header>
      </div>
    );
  }
}


