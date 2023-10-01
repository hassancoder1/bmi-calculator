import './App.css';
import React, { useState } from 'react';

function App() {
  // Setting Up States
  const [weight, Setweight] = useState();
  const [height, Setheight] = useState();
  const [bmi, Setbmi] = useState('');
  const [message, Setmessage] = useState('');

  // Building Logic
  let calcBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please Enter a Valid Weight and Height');
    } else {
      let bmi = weight / (height * height) * 703;
      Setbmi(bmi.toFixed(1));

      // Setting Message
      if (bmi < 25) {
        Setmessage('You are Underweight');
      } else if (bmi >= 25 && bmi < 30) {
        Setmessage('You are a healthy weight');
      } else {
        Setmessage('You are Overweight');
      }
    }
  };

  const reload = () => {
    // Check to make sure that the user has entered valid values for weight and height.
    if (weight === 0 || height === 0) {
      alert('Please Enter a Valid Weight and Height');
    } else {
      // Set the state of the calculator back to its initial values.
      Setweight('');
      Setheight('');
      Setbmi('');
      Setmessage('');
    }
  };

  return (
    <div className='bmi-calculator'>
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBMI}>
        <div>
          <label>Weight (ibs)</label>
          <input
            type='text'
            placeholder='Enter Weight'
            value={weight}
            onChange={(e) => Setweight(e.target.value)}
          />
        </div>

        <div>
          <label>Height (in)</label>
          <input
            type='text'
            placeholder='Enter Height'
            value={height}
            onChange={(e) => Setheight(e.target.value)}
          />
        </div>

        <div>
          <button className='btn' type='submit'>
            Submit
          </button>
          <button
            className='btn btn-outline'
            type='submit'
            onClick={reload}
          >
            Reload
          </button>
        </div>

        <div className='center'>
          <h1>Your BMI is: {bmi}</h1>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
