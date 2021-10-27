import React from 'react';
import Calculator from '../components/Calculator';
import './Calc.css';

const Calc = () => (
  <div className="calc-holder">
    <h2 className="sub-title">E=MC2</h2>
    <Calculator />
  </div>
);

export default Calc;