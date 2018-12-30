import React, { Component } from 'react';

import data from './events.json';

class Eight extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 8) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.presenter}</li>
                  <li>Like/hate: {people.room}</li>
                  <li>Birthday info: {people.summary}</li>
                  <li>Date: {people.date}</li>
                  Time: {people.time}<br></br>
                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Eight;


