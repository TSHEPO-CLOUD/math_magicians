import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }