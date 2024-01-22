import React from 'react';
import { connect } from 'react-redux';
import { updateRandomNumber } from './Action/actions';
import './style.css';


const App = ({ randomNumber, updateRandomNumber }) => {
  return (
    <div className='block'>
      <h1 className='one-h1'>Random Number: {randomNumber}</h1>
      <br />
      <button id='but' className="button-85" role="button" onClick={() => updateRandomNumber(true)}>+RND</button>
      <br />
      <button id='but2' className="button-89" role="button" onClick={() => updateRandomNumber(false)}>-RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomNumber: state.randomNumber,
  };
};

export default connect(mapStateToProps, { updateRandomNumber })(App);
