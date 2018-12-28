import React, { Component } from 'react';

import data from './events.json';

class One extends Component {
	render () {
		return (
			<div>
				{
					data.map(function(people) {
						// assuming if you want people with 
						// id=1 only on page 1
						if (people.id === 1) {
							return (
								<ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.relationship}</li>
                  <li>Like/hate: {people.like}</li>
                  <li>Sumary: {people.summary}</li>
                  <li>Date: {people.date}</li>
                  <li>Time: {people.time}</li>

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
