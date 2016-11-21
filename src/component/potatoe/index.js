import './potatoe.scss';
import React, { PropTypes } from 'react';

export const Potatoe = props =>
  <div className='potatoe-container'>
    <div className='potatoe-name'>{props.name}</div>
    <img
      className='potatoe-img'
      src={props.img}
    />
  </div>;

Potatoe.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Potatoe;
