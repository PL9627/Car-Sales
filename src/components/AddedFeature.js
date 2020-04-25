import React from 'react';
import {connect} from 'react-redux';
import {removePrice} from '../actions/priceChange'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removePrice(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
