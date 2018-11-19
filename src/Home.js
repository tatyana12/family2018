import React, { Component } from 'react';

import data from './events.json';

class Home extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 'home') {
                                                        return (
                                                                <ul>
                  <li>Id: {people.id}</li>
                  <li>Name: {people.name}</li>
                 
                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default One;

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

export default App;

