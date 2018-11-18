mport React, { Component } from 'react';

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
                  <li>Name: {people.id}</li>
                  <li>Presenter: {people.name}</li>
                 
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


