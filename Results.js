import React from 'react';

const Results = props => {
  const { restaurants, percentage } = props;

  let totalVotes = 0;
  for (let i = 0; i < restaurants.length; i++) {
    totalVotes += restaurants[i].votes;
  }

  return (
    <React.Fragment>
      <h2>Live Results</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Restaruant</th>
            <th>Votes</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.votes}</td>
                <td>{percentage(restaurant.votes, totalVotes) + "%"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Results;