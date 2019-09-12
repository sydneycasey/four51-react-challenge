import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Restaurants from './Restaurants';
import Results from './Results';
import Vote from './Vote';
import './style.css';

const restaurants = [
  { name: "NafNaf",  votes: 4, cuisine: "Medeterranian" },
  { name: "Pizza Luce", votes: 6, cuisine: "Italian" },
  { name: "Whole Foods",  votes: 2, cuisine: "Salads" }
];


class App extends Component {
  constructor() {
    super();
    this.handleRestaurantVote = this.handleRestaurantVote.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.state = {
      restaurants
    };
  }

  getPercentage(restaurantVotes, totalVotes) {
    return Math.round(restaurantVotes / totalVotes * 100);
  };

  handleRestaurantVote(index) {
    const restaurant = this.state.restaurants[index];
    this.setState(prevState => ({
      ...prevState,
      restaurant: {
        ...restaurant,
        votes: restaurant.votes++
      }
    }));
  };

  render() {
    return (
      <div>
        <h1>Where Should We Eat Lunch Today?</h1>
        <Restaurants restaurants={this.state.restaurants}/>
        <Results restaurants={this.state.restaurants} percentage = {this.getPercentage}/>        
        <Vote restaurants={this.state.restaurants} castVote={this.handleRestaurantVote}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
