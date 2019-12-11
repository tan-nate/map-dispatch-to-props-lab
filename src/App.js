import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { addRestaurant } from './actions/restaurants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => {
      dispatch(addRestaurant());
    }
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
