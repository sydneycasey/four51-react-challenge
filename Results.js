import React from 'react';

const Results = props => {
  const { restaurants, percentage } = props;

  // helper for getPercentage in index.js - calculates total votes
  let totalVotes = 0;
  for (let i = 0; i < restaurants.length; i++) {
    totalVotes += restaurants[i].votes;
  };

  // sorts restaurants by number of votes
  restaurants.sort((a,b) => {
    if (a.votes > b.votes) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <React.Fragment>
      <h2>Live Results</h2>
      <table id="results-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Restaurant</th>
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
                <td>{percentage(restaurant.votes, totalVotes)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Results;