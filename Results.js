import React from 'react';

const Results = props => {
  const { restaurants } = props;
  return (
    <React.Fragment>
      <h2>Live Results</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Restaruant</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.votes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Results;