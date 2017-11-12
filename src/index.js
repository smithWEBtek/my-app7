import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fruits } from './Arrays'
import FruitList from './FruitList'

ReactDOM.render(
  <App intro="this is root1"
  />, 
  document.querySelector('#root1')
);

ReactDOM.render(
  <App intro="this is root2"
   />,
    document.querySelector('#root2')
);

ReactDOM.render(
  <div>
    <App />
    <FruitList 
      intro="this is root3"
      fruitList={fruits}
    />
  </div>,
  document.querySelector('#root3')
);
 