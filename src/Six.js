import React, { Component } from 'react';

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
                  <li>Relationship: {people.presenter}</li>
                  <li>Like/hate: {people.room}</li>
                   <li>Favorite color: {people.color}</li>
                  <li>Sumary: {people.summary}</li>
                  <li>Date: {people.date}</li></br>
                  Time: {people.time}
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


