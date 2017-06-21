// import React, { Component } from 'react';

const React = require('react')
const ReactDOM = require('react-dom')
const ReadImg = require('react-read-img')
class App extends React.Component {

  static  state : {
     sss : null
   }
img(){
  const sss = this.state.sss
  if(sss!=null) {
    return  <img src={sss} />
  }
  return <div>sss</div>
}

    render() {

        return (
            <div className="App">

                <ReadImg style={{
                    background: '#000',
                    overflow: 'hidden',
                    width: '100px',
                    height: '100px',
                    float: 'left'
                }}   result={(a)=>{
                  console.log(a)
                  // document.getElementById('ddd').append(`<img src="${a}" />`)
                  this.setState({sss:a})
                  // console.log(url)
                }}    />
              <div id='ddd' style={{
                  float: 'left'
                }}>
                    {this.img.bind(this)()}
                </div>
            </div>
        );
    }
}

// module.exports = App
ReactDOM.render(
    <App />, document.getElementById('content'));

// React.render(<ProductBox />, document.getElementById('content'));
