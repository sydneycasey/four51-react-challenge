import React from 'react'

const Votes = props => {
  const { restaurants, castVote } = props;
  return (
    <React.Fragment>
      <div id="vote">
      <h2>Cast Your Vote!</h2>    
      {restaurants.map((restaurant, index) => {
        return (
          <button key={index} onClick={() => castVote(index)} className="btn btn-primary">{restaurant.name}</button>
        )    
      })}
    </div>
    </React.Fragment>
  )
}

export default Votes