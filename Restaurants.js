import React from 'react';

const Restaurants = props => {
  const { restaurants } = props;
  return (
    <React.Fragment>
      <h2>Restaurants</h2>
      {
        restaurants.map((restaurant, index) => <p key={index}>{restaurant.name} (<small>{restaurant.cuisine}</small>)</p>)
      }
    </React.Fragment>

  )
}

export default Restaurants;
