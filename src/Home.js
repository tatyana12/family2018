import React, { Component } from 'react';

import data from './events.json';

class Home extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                
                                 
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

export default Home;





