import React, { Component } from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Meat',
    type: 'meat'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => {
      return <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>;
    })}
  </div>
);

export default buildControls;
