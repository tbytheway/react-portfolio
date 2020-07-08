import React, { Component } from 'react';
import moment from 'moment';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Terry Bytheway's React Starter</h1>
        <h2>React Redux Router</h2>
               {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}
