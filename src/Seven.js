import React, { Component } from 'react';

import data from './events.json';

class Seven extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 7) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.presenter}</li>
                  <li>Room: {people.room}</li>
                   <li>Favorite color: {people.color}</li>
                  <li>Sumary: {people.summary}</li>
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

export default Seven;


