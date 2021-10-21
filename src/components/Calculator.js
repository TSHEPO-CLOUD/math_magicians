
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  displayResult = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="calculator">
        <p className="calculator-result">{this.displayResult()}</p>
        <div className="calculator-buttons">
          <button
            name="AC"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >