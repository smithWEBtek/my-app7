import React, { Component } from 'react';
import { FruitList } from './FruitList'
import { fruitsData } from './Arrays'
 
export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showEaten: false,
      fruits: []
    };
  }
 
  componentWillMount() {
    this.updateFruitList();
  }
 
  toggleListMode = () => this.setState({ showEaten: !this.state.showEaten });
 
  updateFruitList = () => {
    return fruitsData.fruits
    // fetch(`${fruits}?eaten=${this.state.showEaten}`)
    // fetch(fruitsData)
    //   .then(response => response.json())
    //   .then(fruits => this.setState({ fruits }));
  }
 
  render() {
    return <FruitList fruitList={this.state.fruits} />;
  }
}