// import React, { Component } from 'react';

const React = require('react')
const ReactDOM = require('react-dom')
const ReadImg = require('react-read-img')
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//
//           To get started, edit <code>src/App.js</code> and save to reload.
//       </div>
//     );
//   }
// }

// module.exports = App
ReactDOM.render(<ReadImg  />, document.getElementById('content'));

// React.render(<ProductBox />, document.getElementById('content'));
