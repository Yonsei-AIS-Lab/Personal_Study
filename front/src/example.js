import React from "react";

export default class Example1 extends React.Component {

    state = {
      text: "",
    };
  
    render() {
      return (
        <div className='list'>
        <h3>요일</h3>
        <p> <span onClick={()=>{}}>●</span>월요일</p>
      </div>
      );
    }
  }