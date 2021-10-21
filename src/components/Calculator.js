import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }

  render() {
   const { result } = this.state;
   return (
     <div className="calculator">
       <p className="calculator-result">{result}</p>
       <div className="calculator-buttons">