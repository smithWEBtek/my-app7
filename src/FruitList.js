import React from 'react';

export const FruitList = props =>
<ul>
  {props.fruitList.map((fruit) => {
    return <li key={fruit}>{fruit}</li>;
  })}
</ul>;
