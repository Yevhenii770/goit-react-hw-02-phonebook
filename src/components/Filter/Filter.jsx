import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
