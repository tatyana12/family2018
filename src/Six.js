mport React, { Component } from 'react';

import data from './events.json';

class Six extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 6) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Presenter: {people.presenter}</li>
                  <li>Room: {people.room}</li>
                  <li>Sumary: {people.summary}</li>
                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Six;


