import React from 'react';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cuisine: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCuisineChange = this.handleCuisineChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    this.props.addNew(this.state.name, this.state.cuisine);
    e.preventDefault();
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleCuisineChange(e) {
    this.setState({cuisine: e.target.value});
  }

  handleDelete(name) {
    this.props.remove(name);
  }

  render() {
  return (
    <React.Fragment>
      <h2>Restaurants</h2>
      <ul id="restaurant-list">
      { this.props.restaurants.map((restaurant, index) => <li onClick={() => { this.handleDelete(restaurant.name)}} key={restaurant.name}> {restaurant.name} (<small>{restaurant.cuisine}</small>) </li>)
      }
      </ul>
      <h5>Add a Restaurant!</h5>
      <form id="add-form" onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input id="text" type="text" value={this.state.name} name="name" onChange={this.handleNameChange}/>
        </label>
        <label>
        Cuisine:
        <input id="text" type="text" value={this.state.cuisine} name="cuisine" onChange={this.handleCuisineChange}/>
        </label>
        <button id="submit-btn"type="submit">+</button>
      </form>

    </React.Fragment>
    )
  }
}

export default Restaurants;