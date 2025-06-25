import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const press = (key) => {
    if (display === '0' && key !== '.') {
      setDisplay(key);
    } else {
      setDisplay((prev) => prev + key);
    }
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="operator" onClick={() => press('+')}>+</button>
          <button onClick={() => press('7')}>7</button>
          <button onClick={() => press('8')}>8</button>
          <button onClick={() => press('9')}>9</button>

          <button className="operator" onClick={() => press('-')}>-</button>
          <button onClick={() => press('4')}>4</button>
          <button onClick={() => press('5')}>5</button>
          <button onClick={() => press('6')}>6</button>

          <button className="operator" onClick={() => press('*')}>*</button>
          <button onClick={() => press('1')}>1</button>
          <button onClick={() => press('2')}>2</button>
          <button onClick={() => press('3')}>3</button>

          <button className="operator" onClick={() => press('/')}>/</button>
          <button onClick={() => press('0')}>0</button>
          <button onClick={() => press('.')}>.</button>
          <button className="equal" onClick={calculate}>=</button>

          <button className="operator clear" onClick={clearDisplay}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
