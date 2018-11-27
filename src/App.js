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

             Events  informatio</button>

         </Link></center>
      <nav>
       <ol>
         <li>
           <Link to="/one/">
              <button type="button" className="button">
               ReactJS vs Angula
              </button>
          
         </Link>
         </li>
          <li>
            <Link to="/two/">
              <button type="button"  className="button" >
               Advantages of Node
              </button>
            
           </Link>
          </li>
          <li>
            <Link to="/three/">
                <button type="button"  className="button">
                 Will Vue JS substitute React JS?
              </button>

          </Link>
          </li>
          <li>
            <Link to="/four/">
                     <button type="button"  className="button">
                 Choosing the right JS Framework
              </button>
            </Link>
          </li>

          <li>
            <Link to="/five/">
                       <button type="button"  className="button">
                       Right approach to Node JS
              </button>


           </Link>
          </li>
          <li>
             <Link to="/six/">

               <button type="button">
               We are all about JavaScript             
              </button>

          </Link>
          </li>

         <li>
            <Link to="/seven/">
             <button type="button"  className="button">
               Differences between JavaScript and EcmaScript
              </button>


         </Link>
          </li>
         <li>

            <Link to="/eight/">
               <button type="button"  className="button">
               JavaScript Interview
              </button>


          </Link>
          </li>
         <li>
            <Link to="/nine/">

                 <button type="button"  className="button">
                 Vue, React, or Angular?
              </button>



         </Link>
          </li>
         <li>
            <Link to="/ten/">
              <button type="button"  className="button">
                  Why Node JS?
              </button>

          </Link>
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

class App extends Component {
  render() {
    return (
      <div className="App">

            { data.map(function(people){
                return <li>{people.id} - {people.name}</li>
             }



              )}

        <header className="App-header">

          <a
            className="App-link"
            href="https://react-file1.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABC Seminar
          </a>
        </header>
      </div>
    );
  }
}



