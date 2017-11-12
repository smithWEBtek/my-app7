import React, { Component } from 'react';

export default class FruitList extends Component {
  constructor(props){
    super(props);

    this.state = {
      eaten: 'false',
      fruits: this.props.fruitList,
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.fruits.map(fruit =>  <li>Name: {fruit.name} Eaten: {fruit.eaten}</li> )}
        </ul>
      </div>
    )
  }
};