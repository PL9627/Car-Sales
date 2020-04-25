import React from 'react';
import {connect} from 'react-redux';
import {addPrice} from '../actions/priceChange';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        props.addPrice(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
